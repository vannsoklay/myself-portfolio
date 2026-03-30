
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaDocker, FaLinux, FaJava, FaCubes } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiTailwindcss, SiDjango, SiFlask, SiCplusplus, SiSharp, SiMongodb, SiMysql, SiRust, SiGo, SiNestjs, SiSolidity } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-700 dark:text-gray-200' },
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
  { name: 'Django', icon: SiDjango, color: 'text-green-900' },
  { name: 'Flask', icon: SiFlask, color: 'text-gray-800 dark:text-gray-200' },
  { name: 'C++', icon: SiCplusplus, color: 'text-blue-700' },
  { name: 'C#', icon: SiSharp, color: 'text-purple-700' },
  { name: 'Java', icon: FaJava, color: 'text-orange-700' },
  { name: 'Rust', icon: SiRust, color: 'text-orange-900' },
  { name: 'Go', icon: SiGo, color: 'text-sky-700' },
  { name: 'NestJS', icon: SiNestjs, color: 'text-red-600' },
  { name: 'OOP', icon: FaCubes, color: 'text-indigo-600' },
  { name: 'SOLID', icon: SiSolidity, color: 'text-gray-700 dark:text-gray-200' },
  { name: 'SQL', icon: SiMysql, color: 'text-blue-600' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-700' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
  { name: 'Linux', icon: FaLinux, color: 'text-black dark:text-white' },
];

export default function SkillPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center">My Programming Skills</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.li
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center text-lg font-semibold border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center gap-3 hover:scale-105 hover:shadow-xl transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <span className={`text-4xl mb-2 ${skill.color}`}><Icon /></span>
              <span className="tracking-wide">{skill.name}</span>
            </motion.li>
          );
        })}
      </ul>
    </main>
  );
}
