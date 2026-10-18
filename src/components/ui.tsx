import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { cn } from "../utils/cn";

/* ---------- reveal khi cuộn ---------- */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 44,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ y, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- tiêu đề mục: số thứ tự + eyebrow + heading ---------- */
export function SectionHeader({
  index,
  eyebrow,
  title,
  note,
  dark = false,
  center = false,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  note?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-10 sm:mb-14", center && "text-center")}>
      <Reveal>
        <div className={cn("flex items-center gap-3", center && "justify-center")}>
          <span className={cn("font-display text-sm font-bold", dark ? "text-sun" : "text-accent")}>{index}</span>
          <span className={cn("h-px w-10", dark ? "bg-paper/30" : "bg-ink/30")} />
          <span
            className={cn(
              "text-[11px] font-bold uppercase tracking-[0.35em]",
              dark ? "text-paper/60" : "text-ink/60",
            )}
          >
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-4 font-display text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-6xl",
            dark ? "text-paper" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {note && (
        <Reveal delay={0.16}>
          <p className={cn("mt-3 font-hand text-xl sm:text-2xl", dark ? "text-paper/55" : "text-ink/55")}>{note}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- marquee chạy chữ ---------- */
export function Marquee({
  items,
  reverse = false,
  dark = false,
  className,
}: {
  items: string[];
  reverse?: boolean;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden border-y py-3.5 select-none",
        dark ? "border-paper/15 bg-night text-paper/90" : "border-ink/15 bg-accent text-paper",
        className,
      )}
    >
      <div className={cn("flex w-max", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-6 pr-6 font-display text-sm font-bold uppercase tracking-[0.25em] sm:text-base"
              >
                {item}
                <Sparkle className={cn("h-4 w-4", dark ? "text-sun" : "text-paper/70")} fill="currentColor" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- khung ảnh polaroid ---------- */
export function Polaroid({
  src,
  alt,
  caption,
  rotate = 0,
  tape = true,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  rotate?: number;
  tape?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={cn("relative w-fit bg-white p-2.5 pb-3 shadow-[0_22px_45px_-14px_rgba(27,23,18,0.4)]", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {tape && <span className="tape" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="block aspect-[4/5] w-full select-none object-cover"
        loading="lazy"
      />
      {caption && (
        <figcaption className="px-1 pt-2 text-center font-hand text-lg leading-tight text-ink/75">{caption}</figcaption>
      )}
    </figure>
  );
}
