import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";

const Home = () => {
  return (
    <main className="relative bg-black bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg')] bg-top bg-no-repeat pt-8 pb-28 text-white max-md:px-2">
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default Home;
