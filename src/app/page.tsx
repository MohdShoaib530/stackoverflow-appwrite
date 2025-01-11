import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";
export default function Home() {
  return (
    <div>
      <HeroSection/>/
      <div className="flex md:flex-row flex-col w-full justify-center items-center">
        <LatestQuestions/>
        <TopContributers/>
      </div>
    </div>
  );
}
