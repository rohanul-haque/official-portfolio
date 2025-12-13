import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";
import { skills } from "../data/skills";
import SectionHeader from "./SectionHeader";

const MySkillsSection = () => {
  return (
    <section className="bg-slate-100 py-20 dark:bg-[#001205]/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* skill section header */}
        <SectionHeader title={"My Skills"} />
        {/* skill cards */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ id, name, level, icon, class: className }) => {
            const IconComponent =
              FaIcons[icon] || SiIcons[icon] || VscIcons[icon] || null;

            return (
              <div
                key={id}
                className="space-y-2 transition-all transition-transform duration-500 hover:scale-105"
              >
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    {IconComponent && (
                      <IconComponent className={`text-3xl ${className}`} />
                    )}
                    <span className="text-lg font-medium">{name}</span>
                  </div>
                  <span className="font-medium">{level}%</span>
                </div>

                <div className="h-3 w-full rounded-full bg-green-200 shadow-2xl dark:bg-white">
                  <div
                    className="h-3 rounded-full bg-green-500"
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MySkillsSection;
