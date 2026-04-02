import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

const BlogDetails = () => {
const { id } = useParams();

const blog = blogs.find((b) => b.id === parseInt(id));

if (!blog) return <div className="text-white p-10">Blog not found</div>;

return ( <section className="min-h-screen bg-[#0F172A] text-white py-20 px-6"> <div className="max-w-3xl mx-auto">


    <h1 className="text-3xl font-bold">{blog.title}</h1>

    <img
      src={blog.image}
      alt=""
      className="w-full h-64 object-cover rounded-xl mt-6"
    />

    <p className="mt-6 text-white/70 leading-relaxed">
      {blog.content}
    </p>

  </div>
</section>


);
};

export default BlogDetails;
