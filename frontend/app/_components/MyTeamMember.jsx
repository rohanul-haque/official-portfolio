import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { teamMembers } from "../data/TeamMembers";
import SectionHeader from "./SectionHeader";

const MyTeamMember = () => {
  return (
    <section className="bg-white py-20 dark:bg-[#001205]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title={"My Team Member"} />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center rounded-lg border border-green-500/20 bg-green-50 p-6 text-center backdrop-blur-sm transition-all transition-transform duration-500 hover:scale-105 dark:bg-transparent"
            >
              {/* Avatar */}
              <Image
                className="mb-4 h-24 w-24 rounded-full border-4 border-green-500 object-cover shadow-md"
                src={member.img}
                alt={member.name}
                width={100}
                height={100}
              />
              {/* Name + Role */}
              <h1 className="text-lg font-semibold uppercase">
                {member.name}.
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {member.role}
              </p>

              {/* Social Icons */}
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 transition-all duration-300 hover:bg-blue-500 hover:text-white dark:bg-gray-700 hover:dark:bg-blue-500"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={member.socials.github}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 transition-all duration-300 hover:bg-blue-500 hover:text-white dark:bg-gray-700 hover:dark:bg-blue-500"
                >
                  <Github size={18} />
                </a>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 transition-all duration-300 hover:bg-blue-500 hover:text-white dark:bg-gray-700 hover:dark:bg-blue-500"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyTeamMember;
