export default function Values() {
  const items = [
    {
      title: "Democratic Participation",
      text: "Empowering communities to have a direct voice in decisions that affect them.",
    },
    {
      title: "Economic Justice",
      text: "A society where work is valued fairly and essential needs are guaranteed.",
    },
    {
      title: "Solidarity & Equality",
      text: "Standing together across differences to ensure everyone can thrive.",
    },
  ];

  return (
    <section id="values" className="py-20 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Our Values</h2>
        <p className="text-white/70 text-center mt-3 max-w-2xl mx-auto">
          We believe in dignity, fairness, and democracy in every part of life — at work, at home, and in our communities.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {items.map((v) => (
            <div key={v.title} className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <h3 className="text-white font-semibold text-lg">{v.title}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
