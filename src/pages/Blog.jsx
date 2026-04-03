import { useState } from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogs";

const categories = ["All", "Development", "AI", "DevOps", "Business"];

const Blog = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((b) => {
    const searchText = search.trim().toLowerCase();

    const matchCategory = active === "All" || b.category === active;

    const matchSearch =
      b.title.toLowerCase().includes(searchText) ||
      b.desc.toLowerCase().includes(searchText) ||
      b.content.toLowerCase().includes(searchText);

    return matchCategory && matchSearch;
  });

  const featured = blogs[0];

  return (
    <section className="min-h-screen bg-[#0F172A] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 🔥 HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Insights, Guides & Strategies to Grow Your Business
          </h1>

          <p className="text-white/60 mt-4">
            Expert content on web development, AI, and digital growth to help
            you scale faster.
          </p>
        </div>

        {/* 🔍 SEARCH */}
        <div className="flex justify-center mt-8">
          <input
            type="text"
            placeholder="Search articles..."
            className="px-5 py-3 rounded-xl bg-white/10 w-full max-w-lg outline-none border border-white/10 focus:border-cyan-400 transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 🔥 FEATURED BLOG */}
        <div className="mt-14 group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-600/20 to-cyan-500/20 hover:shadow-2xl transition">
          <img
            src={featured.image}
            className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="p-6">
            <span className="text-purple-400 text-sm">🔥 Featured</span>

            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              {featured.title}
            </h2>

            <p className="text-white/70 mt-3 max-w-2xl">{featured.desc}</p>

            <Link
              to={`/blog/${featured.id}`}
              className="inline-block mt-4 text-cyan-400 hover:underline"
            >
              Read Full Article →
            </Link>
          </div>
        </div>

        {/* 🧠 CATEGORIES */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                active === cat
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 shadow-lg"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🧾 BLOG GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs text-purple-400">
                    {blog.category}
                  </span>

                  <h3 className="text-lg font-semibold mt-2 group-hover:text-purple-400 transition">
                    {blog.title}
                  </h3>

                  {/* Reading Time */}
                  <p className="text-xs text-white/50 mt-1">
                    {Math.ceil(blog.content.split(" ").length / 200)} min read
                  </p>

                  <p className="text-sm text-white/70 mt-2">{blog.desc}</p>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="inline-block mt-4 text-cyan-400 hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-white/50 mt-10">
              No blogs found 😔
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
