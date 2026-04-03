import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="text-white p-10">Blog not found</div>;
  }

  const related = blogs.filter(
    (b) => b.category === blog.category && b.id !== blog.id,
  );

  return (
    <section className="min-h-screen bg-[#0B1120] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">{blog.title}</h1>

        <p className="text-white/50 mt-2 text-sm">
          {Math.ceil(blog.content.split(" ").length / 200)} min read •{" "}
          {blog.category}
        </p>

        <img
          src={blog.image}
          className="w-full h-64 object-cover rounded-xl mt-6"
        />

        <div className="mt-10 prose prose-invert max-w-none">
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
                  <code className="bg-white/10 px-1 py-0.5 rounded">
                    {children}
                  </code>
                );
              },
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>

        {/* Related */}
        <div className="mt-16">
          <h2 className="text-xl font-bold mb-4">Related Posts</h2>

          {related.slice(0, 2).map((item) => (
            <Link
              key={item.id}
              to={`/blog/${item.id}`}
              className="block mt-2 text-cyan-400"
            >
              → {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
