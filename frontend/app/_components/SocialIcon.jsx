import { Facebook, Github, Instagram, Linkedin, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const SocialIcon = ({ theming = false, instagram = false }) => {
  const { theme, setTheme } = useTheme();

  const className =
    "bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer rounded dark:bg-gray-800 p-2 transition-colors dark:hover:bg-gray-900 dark:text-gray-200";

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-2">
      {theming && (
        <button
          onClick={toggleTheme}
          className="cursor-pointer rounded p-2 text-gray-800 transition-colors hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-900"
        >
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </button>
      )}

      <a className={className} href="#">
        <Facebook size={19} />
      </a>

      <a className={className} href="#">
        <Linkedin size={19} />
      </a>

      <a className={className} href="#">
        <Github size={19} />
      </a>

      {instagram && (
        <a className={className} href="#">
          <Instagram size={19} />
        </a>
      )}
    </div>
  );
};

export default SocialIcon;
