import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FacebookIcon, GitHubIcon, InstagramIcon } from "./icons";
import { scrollToSection, scrollToTop } from "../lib/scroll";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "Về tôi", href: "#ve-toi" },
  { label: "Hồi xưa", href: "#hoi-xua" },
  { label: "Hành trình", href: "#hanh-trinh" },
  { label: "Daily", href: "#daily" },
  { label: "Khoảnh khắc", href: "#khoanh-khac" },
  { label: "Kết nối", href: "#ket-noi" },
];

const SOCIALS = [
  { label: "Facebook", icon: FacebookIcon, href: "https://www.facebook.com/minhphat.239" },
  { label: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/ngominhphat_23" },
  { label: "GitHub", icon: GitHubIcon, href: "https://github.com/minhphat239" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(2010);
  const { scrollYProgress, scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setYear(Math.min(2026, Math.max(2010, Math.round(2010 + v * 16))));
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    // đợi menu đóng rồi mới cuộn
    setTimeout(() => scrollToSection(href), open ? 250 : 0);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[120] transition-all duration-500",
          scrolled ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <button
            onClick={scrollToTop}
            className="font-display text-lg font-extrabold tracking-tight text-ink"
            aria-label="Về đầu trang"
          >
            minhphat<span className="text-accent">.exe</span>
            <span className="animate-blink text-accent">_</span>
          </button>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => go(l.href)}
                  className="group relative text-[13px] font-semibold uppercase tracking-wider text-ink/70 transition-colors hover:text-ink"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="hidden h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink/70 transition-all hover:border-accent hover:bg-accent hover:text-paper sm:grid"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
            <button
              onClick={() => setOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
              aria-label="Mở menu"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </div>
        </nav>

        {/* thanh tiến trình cuộn */}
        <motion.div
          className="h-[3px] origin-left bg-accent"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
      </header>

      {/* chip "bạn đang ở năm nào" — gắn với tiến trình cuộn 2010 → 2026 */}
      <div className="fixed bottom-4 right-4 z-[110] flex items-center gap-2 rounded-full border border-ink/10 bg-ink px-3.5 py-2 text-paper shadow-xl">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sun opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-sun" />
        </span>
        <span className="font-display text-sm font-bold tabular-nums">{year}</span>
      </div>

      {/* menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[130] flex flex-col bg-paper bg-graph"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
              <span className="font-display text-lg font-extrabold text-ink">
                minhphat<span className="text-accent">.exe</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink"
                aria-label="Đóng menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-1 px-8">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.45 }}
                  onClick={() => go(l.href)}
                  className="group flex items-baseline gap-4 border-b border-ink/10 py-4 text-left"
                >
                  <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
                  <span className="font-display text-4xl font-bold text-ink transition-colors group-hover:text-accent">
                    {l.label}
                  </span>
                </motion.button>
              ))}
            </div>
            <div className="flex items-center gap-3 px-8 pb-10">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full bg-ink text-paper"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
