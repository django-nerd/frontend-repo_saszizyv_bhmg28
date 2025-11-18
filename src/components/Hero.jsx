import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(239,68,68,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(250,204,21,0.2),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              A Fairer Future, Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg md:text-xl text-red-100/90"
            >
              Join a movement focused on solidarity, dignity at work, and shared prosperity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#join" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold shadow-lg shadow-red-900/30 transition">
                Join the movement
              </a>
              <a href="#values" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/10 transition">
                Learn our values
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-red-500 via-rose-500 to-amber-400 p-[1px]">
              <div className="h-full w-full rounded-3xl bg-slate-900 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Workers' Rights", color: "bg-red-500/20" },
                    { label: "Healthcare", color: "bg-rose-500/20" },
                    { label: "Education", color: "bg-amber-400/20" },
                    { label: "Housing", color: "bg-orange-500/20" },
                  ].map((card, i) => (
                    <div key={i} className={`rounded-2xl p-4 border border-white/10 ${card.color}`}>
                      <p className="text-white font-semibold">{card.label}</p>
                      <p className="text-white/70 text-sm mt-1">Building systems that put people first.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
