"use client";

import { useTheme } from "next-themes";

const BackgroundLayer = ({ children }) => {
  const { theme } = useTheme();

  if (!theme) return null;

  return (
    <main
      className={`${
        theme === "dark"
          ? "relative bg-top bg-no-repeat dark:bg-black dark:bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg')]"
          : "w-full bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] bg-cover bg-center bg-no-repeat"
      } min-h-screen w-full`}
    >
      {children}
    </main>
  );
};

export default BackgroundLayer;
