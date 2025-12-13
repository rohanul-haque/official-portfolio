import { CircleUser } from "lucide-react";
import {
  FaCertificate,
  FaGraduationCap,
  FaSchool,
  FaTrophy,
} from "react-icons/fa";

export const EducationsAndQualifications = [
  // ===== Education =====
  {
    id: 1,
    degree: "High School",
    institution: "Example High School",
    year: "2016 - 2021",
    description: (
      <>
        Completed <strong>High School 🎓</strong> with a focus on{" "}
        <strong>Mathematics ➗</strong>, <strong>English 📖</strong>, and{" "}
        <strong>Science 🔬</strong>, building a strong foundation for{" "}
        <strong>technology studies 💻</strong>.
      </>
    ),
    icon: <FaSchool className="text-2xl text-green-500" />,
  },
  {
    id: 2,
    degree: "Diploma in Computer Science & Technology",
    institution: "Institute of Example",
    year: "Running",
    description: (
      <>
        Currently pursuing a{" "}
        <strong>Diploma in Computer Science & Technology 💻</strong> with a
        focus on <strong>software development 🖥️</strong>,{" "}
        <strong>algorithms 🔢</strong>, and <strong>data structures 📂</strong>.
      </>
    ),
    icon: <FaGraduationCap className="text-2xl text-green-500" />,
  },

  // ===== Courses / Certifications =====
  {
    id: 3,
    degree: "Certification in Full-Stack Development",
    institution: "Ostad Platform",
    year: "2024 - 2025",
    description: (
      <>
        Completed a <strong>Full-Stack Development 💻</strong> course covering{" "}
        <strong>React.js ⚛️</strong>, <strong>Node.js 🟢</strong>,{" "}
        <strong>Express.js 🚀</strong>, and <strong>MongoDB 🍃</strong>. Gained
        hands-on experience building <strong>responsive 📱</strong> and{" "}
        <strong>scalable applications ⚡</strong>.
      </>
    ),
    icon: <FaCertificate className="text-2xl text-green-500" />,
  },
  {
    id: 4,
    degree: "Certification in Reactive Accelerator",
    institution: "Learn With Sumit - LWS",
    year: "2025",
    description: (
      <>
        Completed an advanced <strong>Full-Stack program 💻</strong> covering{" "}
        <strong>React.js ⚛️</strong>, <strong>Next.js ⏭️</strong>,{" "}
        <strong>component architecture 🧩</strong>,{" "}
        <strong>state management 🗃️</strong>, <strong>hooks 🔗</strong>, and{" "}
        <strong>documentation best practices 📄</strong>. Gained experience with{" "}
        <strong>Node.js 🟢</strong>, <strong>Express.js 🚀</strong>,{" "}
        <strong>Prisma 🔧</strong>, <strong>MongoDB 🍃</strong>,{" "}
        <strong>Docker 🐳</strong>, <strong>GraphQL 📊</strong>,{" "}
        <strong>testing & debugging 🐞</strong>, and{" "}
        <strong>deployment workflows 🚀</strong>.
      </>
    ),
    icon: <FaCertificate className="text-2xl text-green-500" />,
  },

  // ===== Experience / Club Activities =====
  {
    id: 5,
    degree: "TPI CPC Programming Club - Executive Team Member",
    institution: "Thakurgaon Polytechnic Institute",
    year: "2023 - 2025",
    description: (
      <>
        Served as an <strong>Executive Team Member 👥</strong>, collaborating on{" "}
        <strong>coding projects 💻</strong>, managing <strong>tasks 📝</strong>,
        and solving <strong>problems efficiently ✅</strong> with peers. Gained{" "}
        <strong>teamwork 🤝</strong> and{" "}
        <strong>project management experience 📋</strong>.
      </>
    ),
    icon: <CircleUser className="text-2xl text-green-500" />,
  },
  {
    id: 6,
    degree: "TPI CPC Programming Club - General Secretary",
    institution: "Thakurgaon Polytechnic Institute",
    year: "2025 - Present",
    description: (
      <>
        As <strong>General Secretary 🏆</strong>, coordinated{" "}
        <strong>club activities 📅</strong>, organized{" "}
        <strong>coding competitions 💻🏁</strong>
        and <strong>workshops 🛠️</strong>, managed{" "}
        <strong>member communication 📬</strong>, maintained{" "}
        <strong>records 📂</strong>, and mentored{" "}
        <strong>junior members 👨‍💻</strong>. Developed{" "}
        <strong>leadership 🧑‍✈️</strong>, <strong>team management 🤝</strong>, and
        <strong>problem-solving skills 💡</strong> while ensuring{" "}
        <strong>smooth execution ✅</strong> of club initiatives.
      </>
    ),
    icon: <CircleUser className="text-2xl text-green-500" />,
  },

  // ===== Competitions / Achievements =====
  {
    id: 7,
    degree:
      "Thakurgaon Polytechnic Institute ASSET Skills & Innovation Competition",
    institution: "Thakurgaon Polytechnic Institute",
    year: "2025",
    description: (
      <>
        Participated in the{" "}
        <strong>ASSET Skills & Innovation Competition 🏆</strong>
        as a team member along with <strong>Rohan 👨‍💻</strong>,{" "}
        <strong>Masuk 👨‍💻</strong>, and <strong>Salim 👨‍💻</strong>. Developed two
        projects: <strong>'Fair Price 💰'</strong> and{" "}
        <strong>'Virtual Business Chat Application 💬'</strong>. Both projects
        were built using the <strong>MERN stack 💻🟢</strong> (
        <strong>MongoDB 🍃</strong>, <strong>Express.js 🚀</strong>,{" "}
        <strong>React.js ⚛️</strong>, <strong>Node.js 🟢</strong>). 'Fair Price'
        focused on <strong>market price transparency 💹</strong>, while the
        'Virtual Business Chat Application' utilized <strong>n8n ⚡</strong> for{" "}
        <strong>automation 🤖</strong> and{" "}
        <strong>real-time communication 💬</strong>. Gained hands-on experience
        in <strong>full-stack development 💻</strong>,{" "}
        <strong>teamwork 🤝</strong>, <strong>project management 📋</strong>,
        and deploying <strong>practical solutions 🚀</strong>.
      </>
    ),
    icon: <FaTrophy className="text-2xl text-yellow-500" />,
  },
];
