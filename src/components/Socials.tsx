import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal, SectionHeader } from "./ui";
import { DiscordIcon, FacebookIcon, GitHubIcon, InstagramIcon, TikTokIcon } from "./icons";

const SOCIALS = [
  {
    name: "Email",
    handle: "phatngominh.hcm@gmail.com",
    note: "kênh chính thống — viết được thì viết, không được thì mailler vẫn nhận",
    href: "mailto:phatngominh.hcm@gmail.com",
    icon: Mail,
    color: "#ea4335",
  },
  {
    name: "GitHub",
    handle: "@minhphat239",
    note: "nơi những giờ tự học để lại dấu vết",
    href: "https://github.com/minhphat239",
    icon: GitHubIcon,
    color: "#e8e3d8",
  },
  {
    name: "Facebook",
    handle: "minhphat.239",
    note: "nơi cả họ hàng theo dõi mình",
    href: "https://www.facebook.com/minhphat.239",
    icon: FacebookIcon,
    color: "#4d9de0",
  },
  {
    name: "Instagram",
    handle: "@ngominhphat_23",
    note: "story tồn tại lâu hơn tình cảm",
    href: "https://www.instagram.com/ngominhphat_23",
    icon: InstagramIcon,
    color: "#e4405f",
  },
  {
    name: "TikTok",
    handle: "@mphat239",
    note: "xuất hiện 3 giây rồi lướt tiếp",
    href: "https://www.tiktok.com/@mphat239",
    icon: TikTokIcon,
    color: "#25f4ee",
  },
  {
    name: "Discord",
    handle: "phatngominh.hcm",
    note: "online 24/7, inbox treo 24/8",
    href: "https://discord.com/users/phatngominh.hcm",
    icon: DiscordIcon,
    color: "#8891f5",
  },
];

export default function Socials() {
  return (
    <section id="ket-noi" className="bg-graph-dark relative border-y-2 border-ink/10 bg-night text-paper">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeader
          index="06"
          eyebrow="Kết nối"
          title={
            <>
              Nói chuyện với tôi <span className="text-sun">nha</span>
            </>
          }
          note="* inbox luôn mở — trừ lúc ngủ (tức là hiếm khi)"
          dark
        />

        <div className="border-t border-paper/15">
          {SOCIALS.map((s, i) => (
            <Reveal key={s.name} delay={Math.min(i * 0.05, 0.25)} y={26}>
              <a
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-paper/15 py-5 transition-colors hover:bg-paper/5 sm:gap-6 sm:py-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-paper/20 transition-all duration-300 group-hover:scale-110 group-hover:border-paper/50 sm:h-14 sm:w-14">
                  <s.icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: s.color }} />
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-display text-2xl font-bold transition-colors duration-300 group-hover:text-sun sm:text-4xl">
                    {s.name}
                  </span>
                  <span className="mt-1 block truncate text-sm text-paper/45">
                    {s.handle} — {s.note}
                  </span>
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-paper/20 text-paper/60 opacity-0 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-paper group-hover:opacity-100 sm:h-12 sm:w-12">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center font-hand text-2xl text-paper/50">
            trả lời chậm nhưng chắc — như tin nhắn của bố mình vậy
          </p>
        </Reveal>
      </div>
    </section>
  );
}
