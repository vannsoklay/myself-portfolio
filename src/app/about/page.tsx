'use client'

import { motion } from 'framer-motion'
import { Avatar, Card, Chip, Image } from '@nextui-org/react'

const certificates = [
    { name: 'React Developer Certification', issuer: 'React Training', year: 2022, image: '/placeholder.svg?height=200&width=300' },
    { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: 2021, image: '/placeholder.svg?height=200&width=300' },
    { name: 'Google Cloud Professional Developer', issuer: 'Google Cloud', year: 2023, image: '/placeholder.svg?height=200&width=300' },
]

// const experiences = [
//     { title: 'Senior Frontend Developer', company: 'Tech Innovators Inc.', period: '2021 - Present', description: 'Lead developer for multiple high-traffic web applications.' },
//     { title: 'Full Stack Developer', company: 'Digital Solutions Ltd.', period: '2018 - 2021', description: 'Developed and maintained various client projects using React and Node.js.' },
//     { title: 'Junior Web Developer', company: 'StartUp Ventures', period: '2016 - 2018', description: 'Assisted in the development of responsive websites and web applications.' },
// ]

const experiences = [
    {
        title: 'Full Stack Developer',
        company: 'KOOMPI, Co., ltd.',
        period: '2023 - Present',
        description: 'Developed the backend using Rust for high-performance API services and integrated it with Next.js for the client-side. Focused on optimizing server-side rendering and API communication.',
        detail: 'Riverbase is a scalable e-commerce platform designed to offer a comprehensive online shopping experience for both customers and merchants. It provides robust functionalities to handle product listings, orders, payments, and inventory management. The platform is built to support various features tailored for smooth, secure, and efficient transactions, and integrates with third-party services to expand its capabilities',
        technologies: ['Rust', 'Next.js', 'Restful API', 'MongoDB', 'Graphql', 'SSO DID']
    },
    {
        title: 'Backend Developer',
        company: 'KOOMPI, Co., ltd.',
        period: '2022 - 2023',
        description: 'Built robust API services and managed management on for school system and e-commerce.',
        technologies: ['Node.js', 'Rust', 'API Development', 'Graphql']
    },
    {
        title: 'Internship Developer',
        company: 'Startup Company',
        period: '2020 - 2021',
        description: 'Developed on backend with laravel working on project Recruitment.',
        technologies: ['PHP', 'Vue', 'Restful API']
    }
];


const education = [
    { degree: 'Bachelor of Science in Computer Science', institution: 'Cambodia Academy of Digital Technology (CADT)', year: '2019', description: 'Specialized in Computer Science', certificate: 'https://www.cadt.edu.kh/wp-content/uploads/2021/11/NIPTICT-National-Institute-Officially-Rebranded-to-Cambodia-Academy-of-Digital-Technology-CADT-4.jpg' },
]

const skills = [
    'React', 'Next.js', 'Javascript', 'TypeScript', 'Node.js', "SolidJS", "Python", 'Git', "HTML", "CSS", "Tailwind CSS", 'Github', 'GraphQL', 'MongoDB', 'Restful API', 'Python', "Auth JWT", 'GraphQL', 'ChatGPT', 'v0.dev', 'AWS', 'Docker', 'S3', 'SSO', '3rd-party integration', "Problem-solving", "Self-motivation", "Time Management", "Creativity", "Critical Thinking"
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
            <div className="relative z-10 container mx-auto px-4 space-y-8 pb-16 pt-8 lg:pt-12">
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
                                <div className='flex items-center space-x-4'>
                                    <div>
                                        <Avatar src="/images/cadt_logo.jpg" className="h-24 w-24" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                        <p className="text-gray-600">{edu.institution} | {edu.year}</p>
                                        <p className="text-gray-700 mb-2">{edu.description}</p>
                                    </div>
                                </div>
                                {/* <Image
                                    src={edu.certificate}
                                    alt={`${edu.degree} Certificate`}
                                    width={300}
                                    height={200}
                                    className="w-full h-40 object-fit rounded-lg"
                                /> */}
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Experience */}
                <motion.div
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
                    <Card className='bg-transparent border-0 pb-8' radius="none" shadow='none'>
                        <h2 className="text-2xl font-bold mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <Chip size="lg" key={skill} className="font-medium" color="primary" variant="solid" radius="sm">
                                    {skill}
                                </Chip>
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