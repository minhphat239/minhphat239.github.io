import { useRef, useState } from "react";
import { ChevronsLeftRight, Gamepad2, Monitor, MoonStar, Music, Smartphone, Tv, Wallet } from "lucide-react";
import { Reveal, SectionHeader } from "./ui";

/* ---------- dữ liệu so sánh hồi xưa / bây giờ ---------- */
const COMPARE: { icon: typeof Smartphone; label: string; old: string; now: string }[] = [
  { icon: Smartphone, label: "Điện thoại", old: "Máy của mẹ — chỉ để nghe mẹ gọi về", now: "Galaxy — chụp đêm còn ngon" },
  { icon: Monitor, label: "Máy tính", old: "PC của bố, mở có mỗi Paint", now: "30 tab tra bài + 1 tab nhạc" },
  { icon: Gamepad2, label: "Trò chơi", old: "Pikachu, game ô vuông trên tivi", now: "Valorant — rank thấp nhưng vui" },
  { icon: Music, label: "Nhạc", old: "MP3 tải lậu, tên «baihatmoi(1)»", now: "Lofi + playlist 2h sáng" },
  { icon: Tv, label: "Xem gì", old: "Doraemon, Pokémon trên tivi", now: "YouTube, preview theo tủ đồ" },
  { icon: Wallet, label: "Tiền lì xì", old: "20k — tiêu được cả cái Tết", now: "Để dành từng đồng… chốt máy mới" },
  { icon: MoonStar, label: "Giấc ngủ", old: "21:00 — mẹ tắt đèn là ngủ", now: "02:00 — «5 phút nữa ngủ»" },
];

export default function ThenNow() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(55);

  const update = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(94, Math.max(6, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <section id="hoi-xua" className="relative border-y-2 border-ink/10 bg-paper-deep bg-graph">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeader
          index="02"
          eyebrow="Hồi xưa vs Bây giờ"
          title={
            <>
              Cùng một đứa, <span className="text-accent">hai kỷ nguyên</span>
            </>
          }
          note="* kéo thanh ở giữa để du hành 2013 → 2026 — không cần máy thời gian"
          center
        />

        {/* ---------- slider kéo ---------- */}
        <Reveal className="mx-auto max-w-2xl">
          <div
            ref={trackRef}
            data-cursor
            role="slider"
            aria-label="Kéo để so sánh ảnh hồi xưa và bây giờ"
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(6, p - 4));
              if (e.key === "ArrowRight") setPos((p) => Math.min(94, p + 4));
            }}
            onPointerDown={(e) => {
              dragging.current = true;
              (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
              update(e.clientX);
            }}
            onPointerMove={(e) => dragging.current && update(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
            className="relative aspect-[4/5] touch-none select-none overflow-hidden rounded-2xl border-2 border-ink/70 bg-night shadow-[10px_10px_0_rgba(27,23,18,1)] sm:aspect-[5/4]"
          >
            {/* ảnh hồi xưa (bên trái) */}
            <img
              src="/images/tuoi-tho/tu-2013.jpg"
              alt="Minh Phát hồi nhỏ, khoảng 2013"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* ảnh bây giờ (bên phải, bị cắt theo vị trí thanh) */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
              <img
                src="/images/hien-tai/sinh-nhat-16.jpg"
                alt="Minh Phát hiện tại, sinh nhật 16 tuổi 2026"
                draggable={false}
                className="h-full w-full object-cover"
              />
            </div>

            {/* nhãn năm */}
            <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3.5 py-1.5 font-display text-sm font-bold text-paper backdrop-blur-sm">
              2013
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-accent px-3.5 py-1.5 font-display text-sm font-bold text-paper">
              2026
            </span>

            {/* thanh kéo */}
            <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
              <div className="absolute inset-y-0 -translate-x-1/2 border-l-[3px] border-dashed border-white/90" />
              <div
                className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-ink bg-white text-ink shadow-xl transition-transform active:scale-95"
                title="Kéo đi"
              >
                <ChevronsLeftRight className="h-5 w-5" />
              </div>
            </div>
          </div>
          <p className="mt-5 text-center font-hand text-2xl text-ink/60">
            tự nhiên lớn thật… mà thành công thì đang trên đường tới
          </p>
        </Reveal>

        {/* ---------- bảng so sánh ---------- */}
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
          <Reveal>
            <div className="hidden grid-cols-[1fr_auto_1fr] items-center gap-6 border-b-2 border-ink/70 pb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-ink/45 sm:grid">
              <span className="text-right">Hồi xưa</span>
              <span className="w-24 text-center" />
              <span>Bây giờ</span>
            </div>
          </Reveal>
          {COMPARE.map((row, i) => (
            <Reveal key={row.label} delay={Math.min(i * 0.05, 0.25)}>
              <div className="grid gap-1.5 border-b border-ink/10 py-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6 sm:py-5">
                <div className="order-first flex items-center gap-2.5 sm:order-none sm:col-start-2 sm:w-28 sm:justify-center">
                  <row.icon className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-ink/60">{row.label}</span>
                </div>
                <p className="text-sm text-ink/55 sm:text-right sm:text-base">{row.old}</p>
                <p className="text-sm font-semibold text-ink sm:text-base">{row.now}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
