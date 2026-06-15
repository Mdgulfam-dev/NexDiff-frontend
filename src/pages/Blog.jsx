import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Search } from "lucide-react";
import ShareButton from "../components/ShareButton";
import { getBlogPosts } from "../api/api";

const getBlogPath = (blog) => `/blog/${blog.slug || blog.id}`;

const Blog = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts()
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch(() => {
        setPosts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredBlogs = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return posts.filter((blog) => {
      const matchCategory = active === "All" || blog.category === active;
      const matchSearch =
        blog.title.toLowerCase().includes(searchText) ||
        blog.desc.toLowerCase().includes(searchText) ||
        blog.content.toLowerCase().includes(searchText);

      return matchCategory && matchSearch;
    });
  }, [search, active, posts]);

  const categories = useMemo(
    () => ["All", ...new Set(posts.map((post) => post.category))],
    [posts],
  );

  const featured = posts[0];

  return (
    <main className="page-shell">
      <Helmet>
        <title>NexDiff Blog | Web Development, AI & Growth Insights</title>
        <meta
          name="description"
          content="Learn MERN stack, AI development, DevOps, and business growth strategies. Expert blogs from NexDiff."
        />
      </Helmet>

      <section className="section-pad">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
            <div>
              <p className="eyebrow">Insights</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
                Practical guides for building and growing online.
              </h1>
            </div>
            <div>
              <p className="max-w-2xl text-sm leading-7 text-[#101312]/65 sm:text-base">
                Explore development, AI, DevOps, and business growth ideas from
                the NexDiff team.
              </p>
              <div className="relative mt-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#101312]/38" size={18} />
                <input
                  type="text"
                  placeholder="Search articles"
                  className="w-full rounded-lg border border-[#101312]/10 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[#101312]"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>

          {featured && (
            <article className="mt-12 grid overflow-hidden rounded-lg bg-[#101312] text-white transition hover:-translate-y-1 lg:grid-cols-[1fr_0.88fr]">
              <Link to={getBlogPath(featured)} className="min-h-full">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="h-72 w-full object-cover lg:h-full"
                />
              </Link>
              <div className="p-6 sm:p-8">
                <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7f9cc]">
                    Featured
                  </p>
                  <ShareButton
                    title={featured.title}
                    text={featured.desc}
                    url={getBlogPath(featured)}
                    dark
                  />
                </div>
                <Link to={getBlogPath(featured)}>
                  <h2 className="mt-4 text-2xl font-semibold leading-tight hover:text-[#c7f9cc] sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/62">{featured.desc}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#c7f9cc]">
                    Read Full Article <ArrowUpRight size={16} />
                  </p>
                </Link>
              </div>
            </article>
          )}

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                  active === category
                    ? "border-[#101312] bg-[#101312] text-white"
                    : "border-[#101312]/10 bg-white text-[#101312]/62 hover:border-[#101312]/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {loading ? (
              <div className="col-span-full rounded-lg border border-[#101312]/10 bg-white p-8 text-center">
                <p className="text-[#101312]/60">Loading articles...</p>
              </div>
            ) : filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <article
                  key={blog._id || blog.id}
                  className="light-card group overflow-hidden rounded-lg transition hover:-translate-y-1"
                >
                  <Link to={getBlogPath(blog)}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="h-48 w-full object-cover"
                    />
                  </Link>
                  <div className="p-5">
                    <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e05f2f]">
                        {blog.category}
                      </p>
                      <ShareButton title={blog.title} text={blog.desc} url={getBlogPath(blog)} />
                    </div>
                    <Link to={getBlogPath(blog)}>
                      <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-[#16837a]">
                        {blog.title}
                      </h3>
                    </Link>
                    <p className="mt-2 text-xs text-[#101312]/45">
                      {Math.ceil(blog.content.split(" ").length / 200)} min read
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#101312]/62">{blog.desc}</p>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full rounded-lg border border-[#101312]/10 bg-white p-8 text-center">
                <p className="text-[#101312]/60">No articles found.</p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActive("All");
                  }}
                  className="mt-4 text-sm font-semibold text-[#e05f2f]"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
