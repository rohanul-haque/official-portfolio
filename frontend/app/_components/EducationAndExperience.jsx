import { EducationsAndQualifications } from "../data/EducationsAndQualifications";
import SectionHeader from "./SectionHeader";

const EducationAndExperience = () => {
  return (
    <section className="bg-white py-20 dark:bg-[#001205]">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader title="Education, Experience & Achievement" />
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 left-[19px] h-full w-0.5 bg-green-500"></div>

          {EducationsAndQualifications.map((edu) => (
            <div key={edu.id} className="relative mb-8 pl-12">
              {/* Timeline Dot */}
              <div className="absolute top-6 left-3 h-4 w-4 rounded-full bg-green-500"></div>

              {/* Education Card */}
              <div className="rounded-lg border border-green-500/20 bg-green-50 p-6 backdrop-blur-sm transition-all transition-transform duration-500 hover:scale-105 dark:bg-transparent">
                <div className="mb-4 flex items-center space-x-4">
                  <span>{edu.icon}</span>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                </div>
                <p className="mb-2 font-medium">
                  {edu.institution} | {edu.year}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationAndExperience;
