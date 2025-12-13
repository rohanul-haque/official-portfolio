import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero_image from "../assets/logo.jpg";
import TypingAnimation from "./TypingAnimation";

const HeroSection = () => {
  return (
    <section className="container mx-auto w-full px-4 pt-36 pb-20 lg:px-8">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        {/* Text Content */}
        <div className="text-center lg:w-1/2 lg:text-left">
          <span className="mb-4 block text-xl font-bold">
            👋 Hi! I'm Rohanul Haque
          </span>

          <TypingAnimation />
          <p className="mt-6 md:text-lg">
            I break down complex user experience problems 🧩 to create
            integrity-focused solutions 🛡️ that connect billions of people 🌍🤝.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
            <Button className={"cursor-pointer"} variant={"destructive"}>
              Get In Touch
            </Button>
            <Button className="cursor-pointer" variant={"default"}>
              <a
                href="https://docs.google.com/document/d/1TUvFqoXmxBQOo0dLlKaHJ9pwVbLPBSaychsEPVU-TKE/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-20 flex justify-center md:w-[35%] lg:mt-0">
          <Image
            src={hero_image}
            height={400}
            width={400}
            placeholder="blur"
            alt="Hero Image"
            className="rotate-0 transform rounded-2xl shadow-lg transition-transform duration-400 ease-in-out hover:rotate-0 hover:border-4 hover:border-purple-600 hover:p-[1px] md:rotate-6"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
