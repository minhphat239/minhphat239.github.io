import { ArrowUp } from "lucide-react";
import { Reveal } from "./ui";
import { scrollToTop } from "../lib/scroll";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-paper">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-20 sm:px-6">
        <Reveal>
          <p className="text-center font-display text-[13vw] font-extrabold leading-none tracking-tight sm:text-8xl">
            <span className="text-stroke-paper">hẹn gặp</span>{" "}
            <span className="text-sun">lại</span>
            <span className="text-stroke-paper">!</span>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-center gap-8 border-t border-paper/15 pt-10 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-extrabold">
                minhphat<span className="text-accent">.exe</span>
                <span className="animate-blink text-accent">_</span>
              </p>
              <p className="mt-2 text-sm text-paper/50">
                © 2026 — code bằng React + Tailwind, chạy bằng khát vọng & sữa đá
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-3 text-sm font-bold transition-all hover:border-accent hover:bg-accent"
            >
              về đầu trang
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
