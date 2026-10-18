import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Clock, Coffee, MoonStar, Sparkles } from "lucide-react";
import { Polaroid } from "./ui";
import { scrollToSection } from "../lib/scroll";

const STICKERS = [
  { icon: Sparkles, text: "sinh 23/9/2010", className: "-top-5 -left-6 sm:-left-10", rotate: -6, duration: 5 },
  { icon: Coffee, text: "cà phê sữa đá addict", className: "top-1/3 -right-4 sm:-right-12", rotate: 5, duration: 6 },
  { icon: MoonStar, text: "thức đến 2h sáng", className: "-bottom-5 -left-4 sm:-left-12", rotate: 4, duration: 5.5 },
  { icon: Clock, text: "«5 phút nữa»", className: "bottom-1/4 -right-3 sm:-right-10", rotate: -5, duration: 6.5 },
];

const STATS = [
  { value: "16", label: "tuổi — tinh thần thì 30" },
  { value: "23/9", label: "ngày nạp tuổi mỗi năm" },
  { value: "∞", label: "khát vọng thành công" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const ySticker = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section ref={ref} id="top" className="bg-graph relative overflow-hidden">
      {/* chữ dọc trang trí bên phải */}
      <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rotate-90 items-center gap-3 text-[10px] font-bold uppercase tracking-[0.5em] text-ink/35 xl:flex">
        <span className="h-px w-14 bg-ink/25" />
        portfolio cá nhân — 2010 → 2026
      </div>

      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pt-20">
        {/* ---------- cột chữ ---------- */}
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-ink/55"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            chào mừng tới góc nhỏ của mình
          </motion.p>

          <h1 className="font-display text-[15vw] font-extrabold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-[5.6rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              XIN CHÀO,
            </motion.span>
            <motion.span
              className="flex items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              TÔI LÀ
              <span className="inline-block h-[0.68em] w-[1.5em] -rotate-3 overflow-hidden rounded-full border-2 border-ink/15 shadow-md">
                <img src="images/hien-tai/selfie-2026.jpg" alt="Minh Phát selfie hiện tại, 2026" className="h-full w-full object-cover" />
              </span>
            </motion.span>
            <motion.span
              className="block text-accent text-[13vw] sm:text-7xl lg:text-[5.6rem]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
            >
              MINH PHÁT
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58 }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink/65 sm:text-lg"
          >
            Sinh 23/9/2010 — năm nay 16t, học sinh ở Sài Gòn. Không dám nhận «tài năng» gì đâu:
            thứ mình dư dả nhất là<span className="font-semibold text-ink"> khát vọng thành công</span>.
            Còn lại thì <span className="font-semibold text-ink">rút kinh nghiệm từng bước nha</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToSection("#hoi-xua")}
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-paper shadow-lg transition-all hover:-translate-y-0.5 hover:bg-accent"
            >
              Xem hồi xưa vs bây giờ
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollToSection("#ket-noi")}
              className="rounded-full border-2 border-ink/20 px-6 py-3 text-sm font-bold text-ink transition-all hover:border-accent hover:text-accent"
            >
              Kết nối với tôi
            </button>
          </motion.div>

          {/* số liệu vô dụng nhưng thú vị */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.82 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/15 pt-6"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-extrabold text-ink sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-ink/50">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---------- cột ảnh polaroid ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-fit"
        >
          <motion.div style={{ y: yPhoto }}>
            <Polaroid
              src="images/hien-tai/sinh-nhat-16.jpg"
              alt="Minh Phát với bánh sinh nhật 16 tuổi"
              caption="23/9/2026 — vừa lớn thêm một tuổi"
              rotate={3}
              className="w-64 sm:w-72 lg:w-80"
            />
          </motion.div>

          {/* sticker bay lơ lửng */}
          {STICKERS.map((s, i) => (
            <motion.span
              key={s.text}
              style={{ y: ySticker }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1, rotate: [s.rotate, s.rotate - 2, s.rotate] }}
              transition={{
                opacity: { delay: 1 + i * 0.15, duration: 0.5 },
                scale: { delay: 1 + i * 0.15, duration: 0.5 },
                rotate: { delay: 1 + i * 0.15, duration: s.duration, repeat: Infinity, ease: "easeInOut" },
              }}
              className={`absolute z-20 inline-flex items-center gap-1.5 rounded-full border-2 border-ink/70 bg-sun px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-ink shadow-[3px_3px_0_rgba(27,23,18,1)] ${s.className}`}
            >
              <s.icon className="h-3.5 w-3.5" />
              {s.text}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* gợi ý cuộn */}
      <motion.button
        onClick={() => scrollToSection("#ve-toi")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-ink/45 transition-colors hover:text-accent lg:flex"
      >
        cuộn xuống nha
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
