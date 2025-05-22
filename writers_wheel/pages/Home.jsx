import { Link } from "react-router-dom";
import SpinningWheel from "../components/SpinningWheel";
import { Button } from "../components/ui/button";
import { ArrowRight, Info } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container px-4 py-8 mx-auto">
        <header className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            Topic Wheel
          </h1>
          <Link to="/about">
            <Button variant="outline" className="flex items-center gap-2">
              <Info size={18} />
              <span>About</span>
            </Button>
          </Link>
        </header>
        <section className="flex flex-col items-center justify-center mb-16">
          <h2 className="mb-8 text-2xl font-semibold text-center text-slate-700 dark:text-slate-200">
            Spin the wheel to discover your next writing inspiration
          </h2>
          <div className="w-full max-w-3xl">
            
            <SpinningWheel />
          </div>
          <div className="mt-8 text-center">
            <p className="mb-4 text-slate-600 dark:text-slate-300">
           aliquid est! Suscipit nisi maxime porro sed aut illum quos quia dignissimos, beatae unde excepturi veniam iusto harum.
            </p>
            <Link to="/topics">
              <Button className="flex items-center gap-2">
                <span>Browse All Topics</span>
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
