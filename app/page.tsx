import Header from "@/components/Header";
import { HeroHighlight } from "@/components/Hero";

function Page() {
  return (
    <div>
      <Header />
      <HeroHighlight>
        <h1 className="text-2xl sm:text-4xl md:text-6xl">BookNest</h1>
      </HeroHighlight>
      <p>Hey there</p>
    </div>
  );
}

export default Page;