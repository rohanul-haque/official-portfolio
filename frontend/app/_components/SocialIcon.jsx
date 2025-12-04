import { Facebook, Github, Instagram, Linkedin, Sun } from "lucide-react";
import { Button } from "../../components/ui/button";

const SocialIcon = () => {
  return (
    <div className="flex items-center gap-4">
      <Button href="#">
        <Sun />
      </Button>

      <a href="">
        <Facebook size={19} />
      </a>
      <a href="">
        <Linkedin size={19} />
      </a>
      <a href="">
        <Github size={19} />
      </a>
      <a href="">
        <Instagram size={19} />
      </a>
    </div>
  );
};

export default SocialIcon;
