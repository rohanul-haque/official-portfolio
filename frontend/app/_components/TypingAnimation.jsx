"use client";

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      key="type-animation"
      sequence={[
        "I am a Full Stack Developer",
        1000,
        "I am a Blogger...",
        1000,
        "I am a Youtuber...",
        1000,
        "I am a Freelancer...",
        1000,
      ]}
      speed={50}
      className="text-2xl font-extrabold text-purple-600 sm:text-3xl lg:text-4xl"
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
