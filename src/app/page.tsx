import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <div className="flex md:flex-row flex-col">
        <LatestQuestions/>
        <TopContributers/>
      </div>
    </div>
  );
}
