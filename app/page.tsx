import HeroSection from "./components/HeroSection";
import MintToken from "./components/MintToken";

export default function Home() {
  return (
    <div className="bg-zinc-100 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <MintToken />
    </div>
  );
}
