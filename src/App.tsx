import { useEffect } from "react";
import { initLenis } from "./lib/scroll";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import ThenNow from "./components/ThenNow";
import Timeline from "./components/Timeline";
import Daily from "./components/Daily";
import Gallery from "./components/Gallery";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import { Marquee } from "./components/ui";

export default function App() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <div className="bg-paper font-sans text-ink antialiased">
      {/* lớp film grain phủ toàn trang */}
      <div className="grain" aria-hidden="true" />

      <Cursor />
      <Nav />

      <main>
        <Hero />
        <Marquee
          items={[
            "tuổi thơ 2010 →",
            "16 tuổi",
            "23/9/2010",
            "sài gòn đêm",
            "khát vọng thành công",
            "thức 2h sáng — ai cũng có lý do riêng",
            "minhphat.exe",
          ]}
        />        <About />
        <ThenNow />
        <Timeline />
        <Daily />
        <Gallery />
        <Marquee
          dark
          reverse
          items={["email", "facebook", "instagram", "tiktok", "discord", "github", "kết nối nha"]}
        />
        <Socials />
      </main>

      <Footer />
    </div>
  );
}
