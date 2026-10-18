import Lenis from "lenis";

let lenis: Lenis | null = null;

export function initLenis(): Lenis {
  if (lenis) return lenis;
  lenis = new Lenis({ lerp: 0.09 });
  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  return lenis;
}

export function scrollToSection(selector: string) {
  const el = document.querySelector(selector);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.4 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}
