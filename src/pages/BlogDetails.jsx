import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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

  return (
    <main className="page-shell">
      <article className="section-pad">
        <div className="mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#e05f2f]">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <p className="eyebrow mt-8">{blog.category}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
            {blog.title}
          </h1>
          <p className="mt-4 text-sm text-[#101312]/50">
            {Math.ceil(blog.content.split(" ").length / 200)} min read
          </p>

          <img
            src={blog.image}
            alt={blog.title}
            className="mt-8 h-72 w-full rounded-lg object-cover sm:h-96"
          />

          <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-semibold prose-p:leading-8 prose-a:text-[#e05f2f] prose-pre:rounded-lg">
            <ReactMarkdown
              components={{
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");

                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className="rounded bg-[#101312]/8 px-1.5 py-0.5" {...props}>
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
