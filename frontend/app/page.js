import AboutSection from "./_components/AboutSection";
import BackgroundLayer from "./_components/BackgroundLayer";
import CounterSection from "./_components/CounterSection";
import EducationAndExperience from "./_components/EducationAndExperience";
import HeroSection from "./_components/HeroSection";
import MyBlogs from "./_components/MyBlogs";
import MyProject from "./_components/MyProject";
import MyServices from "./_components/MyServices";
import MySkillsSection from "./_components/MySkillsSection";
import MyTeamMember from "./_components/MyTeamMember";
import Navbar from "./_components/Navbar";

const Home = () => {
  return (
    <>
      <BackgroundLayer>
        <Navbar />
        <HeroSection />
      </BackgroundLayer>
      <CounterSection />
      <AboutSection />
      <MySkillsSection />
      <EducationAndExperience />
      <MyServices />
      <MyTeamMember />
      {/* <MyProject /> */}
      {/* <MyBlogs /> */}
    </>
  );
};

export default Home;
