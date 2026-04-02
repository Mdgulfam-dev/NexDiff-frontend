

import { useState } from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogs";

const categories = ["All", "Development", "AI", "DevOps", "Business"];

const Blog = () => {
const [active, setActive] = useState("All");

const filteredBlogs =
active === "All"
? blogs
: blogs.filter((b) => b.category === active);

return ( <section className="min-h-screen bg-[#0F172A] text-white py-20 px-6"> <div className="max-w-7xl mx-auto">


    {/* Heading */}
    <h1 className="text-4xl font-bold text-center">
      NexDiff Blog ✍️
    </h1>

    {/* Categories */}
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-2 rounded-full text-sm transition ${
            active === cat
              ? "bg-gradient-to-r from-purple-600 to-cyan-500"
              : "bg-white/10 hover:bg-white/20"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Blog Cards */}
    <div className="grid md:grid-cols-3 gap-8 mt-14">

      {filteredBlogs.map((blog) => (
        <div
          key={blog.id}
          className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-purple-500/20 hover:shadow-2xl transition"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-5">

            {/* Category */}
            <span className="text-xs text-purple-400">
              {blog.category}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold mt-2 group-hover:text-purple-400 transition">
              {blog.title}
            </h3>

            {/* Desc */}
            <p className="text-sm text-white/70 mt-2">
              {blog.desc}
            </p>

            {/* Link */}
            <Link
              to={`/blog/${blog.id}`}
              className="inline-block mt-4 text-cyan-400"
            >
              Read More →
            </Link>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>


);
};

export default Blog;
