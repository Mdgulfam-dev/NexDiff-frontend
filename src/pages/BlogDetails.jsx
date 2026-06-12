import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ArrowLeft, ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import blogs from "../data/blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => String(item.slug || item.id) === id);

  if (!blog) {
    return (
      <main className="page-shell section-pad">
        <div className="container-wide">
          <p className="text-[#101312]/60">Blog not found.</p>
          <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#e05f2f]">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const related = blogs.filter(
    (item) => item.category === blog.category && item.id !== blog.id,
  );
  const readTime = Math.ceil(blog.content.trim().split(/\s+/).length / 200);

  return (
    <main className="page-shell">
      <article>
        <header className="section-pad pb-10">
          <div className="mx-auto max-w-5xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#e05f2f]">
            <ArrowLeft size={16} /> Back to Blog
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.38fr] lg:items-end">
              <div>
                <p className="eyebrow">{blog.category}</p>
                <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
                  {blog.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[#101312]/65">
                  {blog.desc}
                </p>
              </div>

              <div className="light-card rounded-lg p-5">
                <div className="flex items-center gap-3 border-b border-[#101312]/10 pb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f7f3ea] text-[#e05f2f]">
                    <BookOpen size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#101312]/42">
                      Article guide
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#101312]">
                      Practical read
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#101312]/62">
                  <Clock3 size={16} className="text-[#16837a]" />
                  {readTime} min read
                </div>
              </div>
            </div>

            <img
              src={blog.image}
              alt={blog.title}
              className="mt-10 h-72 w-full rounded-lg object-cover shadow-[0_18px_48px_rgba(16,19,18,0.12)] sm:h-96"
            />
          </div>
        </header>

        <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.28fr_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-lg border border-[#101312]/10 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e05f2f]">
                  Reading note
                </p>
                <p className="mt-3 text-sm leading-7 text-[#101312]/62">
                  Scan the headings first, then use the code examples and
                  checklists as implementation references.
                </p>
              </div>
            </aside>

            <div className="rounded-lg border border-[#101312]/10 bg-white px-5 py-7 shadow-[0_18px_48px_rgba(16,19,18,0.08)] sm:px-8 sm:py-10">
            <ReactMarkdown
              components={{
                h1() {
                  return null;
                },
                h2({ children }) {
                  return (
                    <h2 className="mt-12 border-t border-[#101312]/10 pt-8 text-3xl font-semibold leading-tight text-[#101312] first:mt-0 first:border-t-0 first:pt-0">
                      {children}
                    </h2>
                  );
                },
                h3({ children }) {
                  return (
                    <h3 className="mt-8 text-xl font-semibold leading-snug text-[#101312]">
                      {children}
                    </h3>
                  );
                },
                p({ children }) {
                  return (
                    <p className="mt-5 text-base leading-8 text-[#101312]/70">
                      {children}
                    </p>
                  );
                },
                a({ href, children }) {
                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#e05f2f] underline decoration-[#e05f2f]/30 underline-offset-4 hover:text-[#101312]"
                    >
                      {children}
                    </a>
                  );
                },
                ul({ children }) {
                  return <ul className="mt-5 space-y-3">{children}</ul>;
                },
                ol({ children }) {
                  return <ol className="mt-5 list-decimal space-y-3 pl-5">{children}</ol>;
                },
                li({ children }) {
                  return (
                    <li className="flex gap-3 text-base leading-7 text-[#101312]/70">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16837a]" />
                      <span>{children}</span>
                    </li>
                  );
                },
                blockquote({ children }) {
                  return (
                    <blockquote className="mt-7 border-l-4 border-[#e05f2f] bg-[#f7f3ea] px-5 py-4 text-[#101312]/72">
                      {children}
                    </blockquote>
                  );
                },
                hr() {
                  return <hr className="my-10 border-[#101312]/10" />;
                },
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");

                  return !inline && match ? (
                    <div className="mt-6 overflow-hidden rounded-lg border border-[#101312]/10 bg-[#101312]">
                      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">
                          {match[1]}
                        </span>
                        <span className="text-xs text-white/36">Example</span>
                      </div>
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          padding: "1.25rem",
                          background: "#101312",
                          fontSize: "0.875rem",
                          lineHeight: "1.7",
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code className="rounded-md bg-[#101312]/8 px-1.5 py-0.5 text-sm font-semibold text-[#101312]" {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {blog.content}
            </ReactMarkdown>
            </div>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-wide">
            <h2 className="text-2xl font-semibold">Related Posts</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {related.slice(0, 2).map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.slug || item.id}`}
                  className="light-card rounded-lg p-5 transition hover:-translate-y-1"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e05f2f]">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#16837a]">
                    Read article <ArrowUpRight size={15} />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogDetails;
