import { useRef } from "react";
import { MoonStar, MoveHorizontal } from "lucide-react";
import { Reveal, SectionHeader } from "./ui";

/* khung ảnh trong cuộn phim */
const FRAMES: { img?: string; alt?: string; note: string }[] = [
  { note: "dậy trễ 3 phút — nhưng vẫn kịp" },
  { note: "sữa đậu nành + bánh mì: combo quốc dân" },
  { note: "cơm mẹ nấu — ưu tiên số một của tuần" },
  { img: "/images/daily/saigon-dem.jpg", alt: "Sài Gòn lên đèn nhìn từ sông", note: "sài gòn lên đèn — đứng đây ngắm một lúc" },
  { img: "/images/daily/khu-chung-cu.jpg", alt: "Khu chung cư đêm, đèn lấp lánh", note: "đi bộ quanh khu, tai nghe lofi, não để trống" },
  { img: "/images/daily/bien-dem.jpg", alt: "Đứng ở mép biển đêm, sóng vỗ", note: "cuối tuần thoát thoáng — biển đêm không giờ tắt" },
  { img: "/images/daily/doi-che.jpg", alt: "Đồi chè buổi sớm, trời còn xám", note: "chạy ngắm đồi chè — chữa lành kiểu của tôi" },
  { img: "/images/hien-tai/sinh-nhat-16.jpg", alt: "Bánh sinh nhật 16 tuổi, Happy Birthday Minh Phát", note: "mỗi năm một lần — nạp thêm 1 tuổi & khát vọng full pin" },
  { img: "/images/hien-tai/selfie-ran-giay.jpg", alt: "Selfie dán râu giấy vui", note: "râu giấy xé từ vở — giữ cho bản thân luôn biết cười" },
  { note: "「5 phút nữa ngủ» — nằm lướt tới 3h" },
];

function SprocketRow() {
  return (
    <div className="flex items-center justify-between px-2 py-1.5">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="h-2 w-3 rounded-[3px] bg-paper/85" />
      ))}
    </div>
  );
}

export default function Daily() {
  const stripRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  /* kéo để cuộn trên desktop */
  const onPointerDown = (e: React.PointerEvent) => {
    const el = stripRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = stripRef.current;
    if (!el || !drag.current.active) return;
    el.scrollLeft = drag.current.scrollLeft - (e.clientX - drag.current.startX);
  };
  const stop = () => (drag.current.active = false);

  return (
    <section id="daily" className="relative border-y-2 border-ink/10 bg-paper-deep bg-graph">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeader
          index="04"
          eyebrow="Daily"
          title={
            <>
              Một ngày của tôi, <span className="text-accent">quay thành phim</span>
            </>
          }
          note="* lịch trình rất khoa học — khoa học theo cách của riêng tôi"
        />

        <Reveal>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-ink/70 bg-paper px-4 py-2 text-sm font-bold text-ink shadow-[3px_3px_0_rgba(27,23,18,1)]">
            <MoveHorizontal className="h-4 w-4 text-accent" />
            kéo ngang để xem cả ngày nha
          </div>

          <div
            ref={stripRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stop}
            onPointerCancel={stop}
            className="no-scrollbar cursor-grab overflow-x-auto rounded-2xl bg-night p-3 shadow-[10px_10px_0_rgba(27,23,18,1)] select-none active:cursor-grabbing sm:p-4"
          >
            <div className="flex w-max gap-4 sm:gap-5">
              {FRAMES.map((f) => (
                <div key={f.note} className="w-52 shrink-0 snap-start sm:w-60">
                  <div className="rounded-md bg-night-soft">
                    <SprocketRow />
                    {f.img ? (
                      <img
                        src={f.img}
                        alt={f.alt}
                        draggable={false}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover"
                      />
                    ) : (
                      <div className="grid aspect-[4/5] w-full place-items-center border-y border-paper/10 bg-night-soft p-5 text-center">
                        <div>
                          <MoonStar className="mx-auto h-9 w-9 text-sun" />
                          <p className="mt-4 font-hand text-xl leading-snug text-paper/80">{f.note}</p>
                          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-paper/40">
                            màn hình tắt
                          </p>
                        </div>
                      </div>
                    )}
                    <SprocketRow />
                  </div>
                  {f.img && (
                    <div className="mt-3 px-1">
                      <div className="font-hand text-lg leading-tight text-paper/75">{f.note}</div>
                    </div>
                  )}
                </div>
              ))}

              {/* khung cuối: hết phim */}
              <div className="grid w-52 shrink-0 snap-start place-items-center sm:w-60">
                <p className="rotate-[-8deg] font-hand text-2xl text-paper/60">Thế là đủ rùi ✦</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
