'use client'

import { motion } from 'framer-motion'
import { Card, Chip, Image } from '@nextui-org/react'

const certificates = [
    { name: 'React Developer Certification', issuer: 'React Training', year: 2022, image: '/placeholder.svg?height=200&width=300' },
    { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: 2021, image: '/placeholder.svg?height=200&width=300' },
    { name: 'Google Cloud Professional Developer', issuer: 'Google Cloud', year: 2023, image: '/placeholder.svg?height=200&width=300' },
]

const experiences = [
    { title: 'Senior Frontend Developer', company: 'Tech Innovators Inc.', period: '2021 - Present', description: 'Lead developer for multiple high-traffic web applications.' },
    { title: 'Full Stack Developer', company: 'Digital Solutions Ltd.', period: '2018 - 2021', description: 'Developed and maintained various client projects using React and Node.js.' },
    { title: 'Junior Web Developer', company: 'StartUp Ventures', period: '2016 - 2018', description: 'Assisted in the development of responsive websites and web applications.' },
]

const education = [
    { degree: 'Master of Science in Computer Science', institution: 'Tech University', year: '2020', description: 'Specialized in Artificial Intelligence and Machine Learning', certificate: 'https://www.cadt.edu.kh/wp-content/uploads/2021/11/NIPTICT-National-Institute-Officially-Rebranded-to-Cambodia-Academy-of-Digital-Technology-CADT-4.jpg' },
]

const skills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker', 'CI/CD', 'Jest', 'Cypress'
]

export default function About() {
    return (
        <div className="min-h-screen w-full relative pb-10">
            {/* Background image with blur */}
            <div className="fixed inset-0 z-0 max-w-full">
                <Image
                    src="https://img.freepik.com/free-photo/top-view-arrangement-with-construction-items_23-2148269416.jpg?t=st=1727940811~exp=1727944411~hmac=d03645eba2d031c510364ab2a7ef896e0d43ae564e399e2d83dbef6684bb5ca2&w=900"
                    alt="background"
                    className="object-cover filter blur-sm w-screen h-screen"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 space-y-8 py-16">
                <motion.h1
                    className="text-4xl font-bold text-primary mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h1>

                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className='bg-transparent border-0' radius="none" shadow='none'>
                        <h2 className="text-2xl font-bold mb-4">Bio</h2>
                        <p className="text-gray-700">
                            I believe in building software that not only solves complex problems but also empowers users with intuitive, seamless experiences. My passion for programming lies in crafting scalable solutions that bridge the gap between functionality and simplicity
                        </p>
                    </Card>
                </motion.div>

                {/* Skills and Education */}
                <motion.div
                    // className="bg-white/90 rounded-lg shadow-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Education</h2>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                            <Card className='bg-transparent border-0' radius="none" shadow='none'>
                                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                <p className="text-gray-600">{edu.institution} | {edu.year}</p>
                                <p className="text-gray-700 mb-2">{edu.description}</p>
                                <Image
                                    src={edu.certificate}
                                    alt={`${edu.degree} Certificate`}
                                    width={300}
                                    height={200}
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Experience */}
                <motion.div
                    // className="bg-white/90 rounded-lg shadow-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Card className='bg-transparent border-0' radius="none" shadow='none'>
                        <h2 className="text-2xl font-bold mb-4">Experience</h2>
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-xl font-semibold">{exp.title}</h3>
                                <p className="text-gray-600">{exp.company} | {exp.period}</p>
                                <p className="text-gray-700">{exp.description}</p>
                            </div>
                        ))}
                    </Card>
                </motion.div>
                {/* Skill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Card className='bg-transparent border-0' radius="none" shadow='none'>
                        <h2 className="text-2xl font-bold mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span key={skill} className="bg-transparent pl-0 pr-4 font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Card>
                </motion.div>

                {/* Certificates */}
                {/* <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">Professional Certificates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/90 rounded-lg shadow-lg overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image
                                    src={cert.image}
                                    alt={cert.name}
                                    width={300}
                                    height={200}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-1">{cert.name}</h3>
                                    <p className="text-gray-600">{cert.issuer}</p>
                                    <p className="text-gray-500 text-sm">{cert.year}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div> */}
            </div>
        </div>
    )
}