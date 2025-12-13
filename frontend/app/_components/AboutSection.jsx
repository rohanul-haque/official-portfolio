import { Button } from "@/components/ui/button";
import Image from "next/image";
import about_image from "../assets/about-1.jpg";

const AboutSection = () => {
  return (
    <section className="w-full px-4 py-20 lg:px-8 dark:bg-[#001205]">
      <div className="flex flex-col items-center gap-10 lg:flex-row">
        {/* Image Section */}
        <div className="flex justify-center lg:w-[35%] lg:pl-8">
          <Image
            src={about_image}
            placeholder="blur"
            alt="About Image"
            className="mt-10 h-[380px] max-w-[300px] -rotate-4 rounded-2xl object-cover shadow-xl transition-transform duration-300 hover:rotate-0 hover:border-4 hover:border-purple-600 md:mt-0"
          />
        </div>

        {/* Text Section */}
        <div className="mt-10 w-full text-center md:mt-0 md:text-left">
          <h2 className="text-4xl font-bold text-green-500">About Me</h2>

          <span className="mx-auto mt-2 mb-6 block h-1 w-20 rounded-full bg-blue-600 md:mx-0 dark:bg-white"></span>

          <p className="mb-4 leading-relaxed text-gray-800 dark:text-green-200">
            👋 Hello! I’m <strong>Rohanul Haque Rohan</strong>, a passionate
            <strong> Full Stack Web Developer</strong> 💻 with experience in
            building
            <strong>responsive</strong> 📱 and <strong>user-friendly</strong> 🌟
            websites and applications. I specialize in
            <strong> React.js ⚛️</strong>, <strong>Next.js ▲</strong>,
            <strong>JavaScript 📜</strong>, <strong>Node.js 🟢</strong>,
            <strong>Express.js 🚀</strong>, <strong>MongoDB 🍃</strong> and
            other
            <strong>modern web technologies 🛠️</strong>. I love turning
            <strong>ideas 💡</strong> into reality ✨ through clean, efficient,
            and <strong>scalable code 🖋️</strong>.
          </p>

          <p className="mb-6 leading-relaxed text-gray-800 dark:text-green-200">
            When I'm not coding 💻, you can find me
            <strong>exploring new technologies</strong> 🔍,
            <strong>contributing to open-source projects</strong> 🤝, or{" "}
            <strong>enjoying the outdoors</strong> 🌿☀️.
          </p>

          <Button variant="destructive" className={"mt-4 animate-bounce"}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
