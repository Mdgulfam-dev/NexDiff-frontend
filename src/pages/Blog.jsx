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
        <h1 className="text-4xl font-bold text-center">NexDiff Blog ✍️</h1>

        {/* Search */}
        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Search blogs..."
            className="px-4 py-3 rounded-xl bg-white/10 w-full max-w-md outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Featured */}
        <div className="mt-12 bg-white/5 rounded-2xl overflow-hidden">
          <img src={featured.image} className="w-full h-64 object-cover" />
          <div className="p-6">
            <span className="text-purple-400 text-sm">🔥 Featured</span>
            <h2 className="text-2xl font-bold mt-2">{featured.title}</h2>
            <p className="text-white/70 mt-2">{featured.desc}</p>
            <Link
              to={`/blog/${featured.id}`}
              className="text-cyan-400 mt-3 inline-block"
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full ${
                active === cat
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500"
                  : "bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/5 rounded-2xl overflow-hidden"
            >
              <img src={blog.image} className="h-48 w-full object-cover" />

              <div className="p-5">
                <span className="text-xs text-purple-400">{blog.category}</span>

                <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>

                <p className="text-xs text-white/50 mt-1">
                  {Math.ceil(blog.content.split(" ").length / 200)} min read
                </p>

                <p className="text-sm text-white/70 mt-2">{blog.desc}</p>

                <Link
                  to={`/blog/${blog.id}`}
                  className="text-cyan-400 mt-3 inline-block"
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
