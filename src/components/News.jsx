import { useEffect, useState } from "react";

export default function News() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/posts`);
        const data = await res.json();
        setPosts(data.items || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Updates</h2>
          <p className="text-white/60 text-sm">From our chapters and campaigns</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {loading ? (
            <p className="text-white/70">Loading…</p>
          ) : posts.length === 0 ? (
            <p className="text-white/70">No posts yet.</p>
          ) : (
            posts.map((p) => (
              <article key={p.id} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                {p.image_url && (
                  <img src={p.image_url} alt="" className="w-full h-40 object-cover" />
                )}
                <div className="p-5">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  {p.summary && <p className="text-white/70 text-sm mt-1">{p.summary}</p>}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
