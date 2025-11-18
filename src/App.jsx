import Hero from "./components/Hero";
import Values from "./components/Values";
import News from "./components/News";
import JoinForm from "./components/JoinForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-red-600 to-amber-400" />
            <span className="font-semibold">People's Movement</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#values" className="hover:text-white">Values</a>
            <a href="#news" className="hover:text-white">Updates</a>
            <a href="#join" className="hover:text-white">Join</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Values />
        <div id="news"><News /></div>
        <JoinForm />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} People's Movement</p>
          <p>Built with care for community and fairness.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
