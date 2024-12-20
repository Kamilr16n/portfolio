import React from 'react'
import { HashIcon, CodepenIcon, PiIcon, Database, GraduationCap, Users, Code, Sparkles } from 'lucide-react'

const techStack = [
  { name: "HTML", icon: HashIcon },
  { name: "CSS", icon: CodepenIcon },
  { name: "JavaScript", icon: CodepenIcon },
  { name: "PHP", icon: PiIcon },
  { name: "React", icon: CodepenIcon },
  { name: "Tailwind CSS", icon: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 33" fill="currentColor" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
    </svg>
  ) },
  { name: "SQL", icon: Database },
]

export default function Whoami() {
  return (
    <div className="h-full w-full overflow-y-auto p-32 pt-44 bg-black text-white shadow-lg">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">
          Hi, I&apos;m <span className="text-red-900">Nassreddine</span>
        </h1>
        <p className="text-lg mb-6">
          I&apos;m a 23-year-old web developer passionate about creating amazing web experiences and always eager to learn new technologies.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-2 gap-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2 p-3 border rounded-md bg-black hover:bg-red-900 transition-all duration-300 cursor-pointer hover:scale-105">
              <tech.icon className="w-5 h-5" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          As a web developer, I thrive on turning ideas into reality through code. My journey in web development started with a curiosity about how websites work, and it has evolved into a full-fledged passion for creating intuitive, efficient, and visually appealing web applications.
        </p>
        <p className="mb-4">
          I specialize in front-end development, with a strong focus on creating responsive and accessible user interfaces. My experience with React has allowed me to build dynamic and interactive web applications, while my knowledge of PHP enables me to work effectively on full-stack projects.
        </p>
        <p className="mb-4">
          I&apos;m always excited to take on new challenges and learn emerging technologies. Whether it&apos;s exploring new frameworks, optimizing performance, or diving into UI/UX design principles, I&apos;m committed to continuous growth and improvement in my craft.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">My Approach</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Users className="w-6 h-6 mr-2 flex-shrink-0 text-blue-600" />
            <span>User-Centric Design: I believe in creating websites that not only look great but also provide an excellent user experience.</span>
          </li>
          <li className="flex items-start">
            <Code className="w-6 h-6 mr-2 flex-shrink-0 text-blue-600" />
            <span>Clean and Maintainable Code: I strive to write code that is not only functional but also easy to read and maintain.</span>
          </li>
          <li className="flex items-start">
            <GraduationCap className="w-6 h-6 mr-2 flex-shrink-0 text-blue-600" />
            <span>Continuous Learning: The tech world is always evolving, and I&apos;m committed to staying up-to-date with the latest trends and best practices.</span>
          </li>
          <li className="flex items-start">
            <Sparkles className="w-6 h-6 mr-2 flex-shrink-0 text-blue-600" />
            <span>Collaborative Approach: I enjoy working in teams and believe that the best results come from open communication and shared ideas.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
