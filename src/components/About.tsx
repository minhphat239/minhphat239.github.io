import { Cake, Laptop, Languages, MapPin, User } from "lucide-react";
import { Polaroid, Reveal, SectionHeader } from "./ui";

const INFO = [
  { icon: User, label: "Tên", value: "Minh Phát — mẹ đặt, mong con «phát» như ý nó" },
  { icon: Cake, label: "Sinh", value: "23/9/2010 — 16 tuổi, hàng Gen Z chính hãng" },
  { icon: MapPin, label: "Ở", value: "Sài Gòn (kèm những chuyến trốn cuối tuần)" },
  { icon: Laptop, label: "Làm", value: "Học sinh, chụp ảnh nghiệp dư bằng điện thoại" },
  { icon: Languages, label: "Ngôn ngữ", value: "Tiếng Việt, tiếng Anh, và giọng cười hớ hênh" },
];

const TAGS = ["#16t", "#23-9-2010", "#sài-gòn-đêm", "#lofi-2h-sáng", "#cà-phê-sữa-đá", "#khát-vọng-full-pin"];

const FACTS = [
  { value: "16", label: "tuổi — và đang lớn từng ngày" },
  { value: "23/9", label: "ngày nạp tuổi chính thức" },
  { value: "0", label: "talent đặc biệt (tạm thời thôi)" },
  { value: "∞", label: "khát vọng (đang tăng đều theo tuổi)" },
];

export default function About() {
  return (
    <section id="ve-toi" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeader
          index="01"
          eyebrow="Về tôi"
          title={
            <>
              Đằng sau cái tên <span className="text-accent">minhphat.exe</span>
            </>
          }
          note="* đọc là «minh phát chấm e-xe» — tên gì thì phát vậy"
        />

        <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* ---------- collage polaroid ---------- */}
          <Reveal className="relative mx-auto w-fit">
            <Polaroid
              src="images/tuoi-tho/tu-2015.jpg"
              alt="Minh Phát thời bé, khoảng 2015"
              caption="2015 — tròn trĩnh, chưa biết lo toan"
              rotate={-4}
              className="w-64 sm:w-72"
            />
            <div className="absolute -bottom-10 -right-4 sm:-right-10">
              <Polaroid
                src="images/tuoi-tho/tu-2013.jpg"
                alt="Minh Phát nhỏ hơn, 2013"
                caption="2013 — bản beta"
                rotate={7}
                tape={false}
                className="w-40 sm:w-48"
              />
            </div>
            <span className="absolute -left-2 bottom-16 hidden -rotate-6 font-hand text-2xl text-accent sm:block">
              lớn nhanh ghê, chưa kịp nhìn lại ←
            </span>
          </Reveal>

          {/* ---------- thông tin ---------- */}
          <div>
              <Reveal>
                <p className="text-lg leading-relaxed text-ink/75">
                  Chào cậu — đúng hơn là chào người đang lướt tới đây.{" "}
                  <span className="font-semibold text-ink">Mình là Minh Phát</span>, 16t, sinh 23/9/2010.
                  Chưa có talent gì để flex cả — chỉ là thằng nhóc thích{" "}
                  <span className="font-semibold text-ink">chụp ảnh bằng điện thoại</span>,{" "}
                  <span className="font-semibold text-ink">nghe lofi lúc 2h sáng</span> và lang thang Sài Gòn
                  sau mỗi buổi học.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink/75">
                  Nhưng có một thứ mình tin rằng nặng hơn mọi talent:{" "}
                  <span className="font-semibold text-ink">khát vọng thành công</span>. Trang này là album{" "}
                  <span className="font-semibold text-ink">hồi xưa và bây giờ</span> — nơi cất những bước
                  đầu tiên để một ngày nào đó «phát» đúng như cái tên.
                </p>
              </Reveal>

            <Reveal delay={0.1} className="mt-8">
              <ul className="border-t border-ink/10">
                {INFO.map((row) => (
                  <li key={row.label} className="flex items-center justify-between gap-4 border-b border-ink/10 py-3.5">
                    <span className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-ink/50">
                      <row.icon className="h-4 w-4 text-accent" />
                      {row.label}
                    </span>
                    <span className="text-right text-sm font-medium text-ink sm:text-base">{row.value}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18} className="mt-7 flex flex-wrap gap-2.5">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink/20 bg-paper-deep px-3.5 py-1.5 text-xs font-bold text-ink/70 transition-colors hover:border-accent hover:text-accent"
                >
                  {t}
                </span>
              ))}
            </Reveal>
          </div>
        </div>

        {/* ---------- dải fact vui ---------- */}
        <Reveal delay={0.1} className="mt-24 sm:mt-28">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border-2 border-ink/70 bg-paper-deep shadow-[6px_6px_0_rgba(27,23,18,1)] sm:grid-cols-4">
            {FACTS.map((f, i) => (
              <div
                key={f.label}
                className={`border-ink/15 p-6 odd:border-r sm:border-r sm:p-7 [&:not(:last-child)]:sm:border-r ${
                  i < 2 ? "border-b sm:border-b-0" : ""
                }`}
              >
                <div className="font-display text-3xl font-extrabold text-accent">{f.value}</div>
                <div className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-ink/55">{f.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
