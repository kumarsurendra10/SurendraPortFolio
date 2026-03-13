import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["ReactJS","Javascript",  "Redux Toolkit", "TailwindCSS", "SCSS"];
  const backendSkills = ["Node.js", "ExpressJs", "MongoDB"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate full-stack developer with a strong foundation in the MERN stack, data structures, and algorithms, dedicated to building optimized and scalable web applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Computer Science</strong> - Bennett University (2022-2026)
                </li>
                <li>CGPA: 8.4/10 (6th Sem)</li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/12OsM3Q_QsrUoeYjQo51W6Vso9S7SUv1K/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Resume
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://github.com/hardik4603"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.linkedin.com/in/hardik-sp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    LinkedIn
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://leetcode.com/u/hardikparmar4603/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    LeetCode
                  </a>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Skills</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Languages:</h4>
                  <p>C++ | JavaScript | Python</p>
                </div>

                <div>
                  <h4 className="font-semibold">Development Tools:</h4>
                  <p>Git | GitHub | Vercel | Render</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};