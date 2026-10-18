import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Hand } from "lucide-react";
import { Polaroid, SectionHeader } from "./ui";

type Photo = { src: string; caption: string; x: number; y: number; r: number; w: string };

const PHOTOS: Photo[] = [
  { src: "images/hien-tai/selfie-2026.jpg", caption: "16 tuổi, cười như vầy", x: 4, y: 8, r: -5, w: "w-40 sm:w-52" },
  { src: "images/hien-tai/sinh-nhat-16.jpg", caption: "23/9 — nạp tuổi, bánh 16", x: 56, y: 2, r: 4, w: "w-40 sm:w-52" },
  { src: "images/daily/saigon-dem.jpg", caption: "sài gòn lên đèn", x: 30, y: 24, r: 2, w: "w-40 sm:w-52" },
  { src: "images/tuoi-tho/tu-2013.jpg", caption: "2013 — thủy tổ", x: 3, y: 58, r: 6, w: "w-40 sm:w-52" },
  { src: "images/daily/bien-dem.jpg", caption: "biển đêm, sóng không ngủ", x: 34, y: 66, r: -4, w: "w-40 sm:w-52" },
  { src: "images/tuoi-tho/tu-2015.jpg", caption: "2015 — phiên bản nhí", x: 60, y: 52, r: -6, w: "w-40 sm:w-52" },
  { src: "images/hien-tai/selfie-ran-giay.jpg", caption: "râu giấy — vui là chính", x: 74, y: 26, r: 3, w: "w-40 sm:w-52" },
];

export default function Gallery() {
  const boundsRef = useRef<HTMLDivElement>(null);
  const zCounter = useRef(20);
  const [photos, setPhotos] = useState(PHOTOS.map((p, i) => ({ ...p, z: i })));

  const bringToFront = (i: number) => {
    zCounter.current += 1;
    const z = zCounter.current;
    setPhotos((prev) => prev.map((p, idx) => (idx === i ? { ...p, z } : p)));
  };

  return (
    <section id="khoanh-khac" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeader
          index="05"
          eyebrow="Khoảnh khắc"
          title={
            <>
              Bảng ảnh <span className="text-accent">kéo-được</span>
            </>
          }
          note="* đúng vậy — kéo ảnh đi bất cứ đâu, nó không vỡ đâu"
        />

        <div
          ref={boundsRef}
          className="bg-graph relative h-[125vw] touch-none select-none overflow-hidden rounded-3xl border-2 border-dashed border-ink/25 sm:h-[95vw] sm:rounded-[2rem] lg:h-[72vh] lg:min-h-[560px]"
        >
          {photos.map((p, i) => (
            <motion.div
              key={p.src + i}
              drag
              dragConstraints={boundsRef}
              dragElastic={0.18}
              dragMomentum={false}
              onPointerDown={() => bringToFront(i)}
              whileDrag={{ scale: 1.07, rotate: 0 }}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 40, rotate: p.r }}
              whileInView={{ opacity: 1, y: 0, rotate: p.r }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: Math.min(i * 0.07, 0.5), ease: [0.22, 1, 0.36, 1] }}
              style={{ left: `${p.x}%`, top: `${p.y}%`, zIndex: p.z }}
              className="absolute"
              data-cursor
            >
              <Polaroid src={p.src} alt={p.caption} caption={p.caption} className={`${p.w} rotate-0`} tape={false} />
            </motion.div>
          ))}

          {/* gợi ý */}
          <div className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink/85 px-4 py-2 text-xs font-bold text-paper backdrop-blur-sm">
            <Hand className="h-3.5 w-3.5 text-sun" />
            kéo thử một tấm xem
          </div>
          <span className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 rotate-90 font-hand text-xl text-ink/30 lg:block">
            khoảnh khắc lộn xộn
          </span>
        </div>
      </div>
    </section>
  );
}
