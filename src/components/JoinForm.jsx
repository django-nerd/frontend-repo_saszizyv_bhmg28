import { useState } from "react";

export default function JoinForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/members`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, city }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: "Thanks for joining! We'll be in touch." });
        setName("");
        setEmail("");
        setCity("");
      } else {
        setStatus({ type: "error", message: data.detail || "Something went wrong." });
      }
    } catch (e) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="join" className="py-20 bg-slate-900/60">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center">Become a Member</h2>
        <p className="text-white/70 text-center mt-2">Add your voice. We'll connect you with local organizers.</p>
        <form onSubmit={submit} className="mt-8 grid gap-4">
          <div className="grid md:grid-cols-3 gap-4">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City or region"
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            disabled={loading}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-60 text-white font-semibold shadow-lg shadow-red-900/30 transition"
          >
            {loading ? "Submitting…" : "Join now"}
          </button>
          {status && (
            <p className={status.type === "success" ? "text-green-400" : "text-red-400"}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
}
