import { Polaroid, Reveal, SectionHeader } from "./ui";
import { cn } from "../utils/cn";

const MILESTONES = [
  {
    year: "2010",
    title: "Ra mắt bản 1.0",
    desc: "Chào đời ngày 23/9/2010. Khóc rất to — ba mẹ gọi đó là khát vọng phiên bản đầu tiên.",
  },
  {
    year: "2013",
    title: "Bản beta cười chữ O",
    desc: "Chưa biết chữ nào — chỉ biết cười to và giơ «OK» như thể cả thế giới là của mình.",
    img: "/images/tuoi-tho/tu-2013.jpg",
    caption: "bản beta",
  },
  {
    year: "2015",
    title: "Tròn trĩnh 5 tuổi",
    desc: "Mới tập đặt chữ, nhưng nghiêng người chụp ảnh 20 độ thì đã lão làng.",
    img: "/images/tuoi-tho/tu-2015.jpg",
    caption: "thời tròn trĩnh",
  },
  {
    year: "2017",
    title: "Sinh nhật đầu có bánh riêng",
    desc: "Lần đầu tiên được cầm cả cái bánh — thổi xong 2 nến trước thì hết hơi, mẹ đổ nốt.",
    img: "/images/tuoi-tho/sinh-nhat-2017.jpg",
    caption: "bánh đầu tiên",
  },
  {
    year: "2026",
    title: "16 tuổi & trang này",
    desc: "Bánh 16, khát vọng vẫn full pin. Chưa giỏi gì — nhưng mỗi ngày vẫn đi thêm một bước.",
    img: "/images/hien-tai/sinh-nhat-16.jpg",
    caption: "bản hiện tại",
  },
];

export default function Timeline() {
  return (
    <section id="hanh-trinh" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeader
          index="03"
          eyebrow="Hành trình"
          title={
            <>
              16 năm, tóm gọn <span className="text-accent">5 dòng</span>
            </>
          }
          note="* dòng 16 năm được cô đọng — đọc nhanh kẻo nghỉ"
        />

        <div className="relative">
          {/* trục giữa */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-ink/20 sm:left-1/2" />

          {MILESTONES.map((m, i) => {
            const left = i % 2 === 0;
            return (
              <div key={m.year} className="relative mb-14 last:mb-0 sm:mb-20">
                {/* chấm trên trục */}
                <span className="absolute left-0 top-2 grid h-4 w-4 place-items-center sm:left-1/2 sm:-translate-x-1/2">
                  <span className="absolute h-4 w-4 rounded-full bg-accent/30" />
                  <span className="relative h-2 w-2 rounded-full bg-accent" />
                </span>

                <div
                  className={cn(
                    "pl-10 sm:w-1/2 sm:pl-0",
                    left ? "sm:pr-14 sm:text-right" : "sm:ml-auto sm:pl-14",
                  )}
                >
                  <Reveal y={36}>
                    <div
                      className={cn(
                        "flex flex-wrap items-baseline gap-x-4 gap-y-1",
                        left && "sm:flex-row-reverse",
                      )}
                    >
                      <span className="font-display text-4xl font-extrabold text-accent sm:text-5xl">{m.year}</span>
                      <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">{m.title}</h3>
                    </div>
                    <p className="mt-2.5 max-w-md text-sm leading-relaxed text-ink/60 sm:text-base sm:leading-relaxed">
                      {m.desc}
                    </p>
                    {m.img && (
                      <div className={cn("mt-5 w-fit", left && "sm:ml-auto")}>
                        <Polaroid src={m.img} alt={`Minh năm ${m.year}`} caption={m.caption} rotate={left ? -3 : 3} className="w-36" />
                      </div>
                    )}
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
