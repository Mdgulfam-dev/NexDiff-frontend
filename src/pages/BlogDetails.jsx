// import { useParams } from "react-router-dom";
// import blogs from "../data/blogs";

// const BlogDetails = () => {
// const { id } = useParams();

// const blog = blogs.find((b) => b.id === parseInt(id));

// if (!blog) return <div className="text-white p-10">Blog not found</div>;

// return ( <section className="min-h-screen bg-[#0F172A] text-white py-20 px-6"> <div className="max-w-3xl mx-auto">


//     <h1 className="text-3xl font-bold">{blog.title}</h1>

//     <img
//       src={blog.image}
//       alt=""
//       className="w-full h-64 object-cover rounded-xl mt-6"
//     />

//     <p className="mt-6 text-white/70 leading-relaxed">
//       {blog.content}
//     </p>

//   </div>
// </section>


// );
// };

// export default BlogDetails;




import { useParams } from "react-router-dom";
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

return ( <section className="min-h-screen bg-[#0B1120] text-white py-20 px-6"> <div className="max-w-3xl mx-auto">


    {/* Title */}
    <h1 className="text-3xl md:text-4xl font-bold leading-tight">
      {blog.title}
    </h1>

    {/* Image */}
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-64 object-cover rounded-xl mt-6"
    />

    {/* Markdown Content */}
    <div className="mt-10 prose prose-invert max-w-none
      prose-headings:text-white
      prose-p:text-white/80
      prose-li:text-white/70
      prose-strong:text-white
    ">

      <ReactMarkdown
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");

            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                className="rounded-lg text-sm"
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

  </div>
</section>


);
};

export default BlogDetails;
