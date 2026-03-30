'use client'

import { motion } from 'framer-motion'
import { Avatar, Card, Chip, Image } from '@nextui-org/react'
import { Icon } from '@iconify/react/dist/iconify.js';

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
        title: 'Backend Developer',
        company: 'AIBODIA Co., Ltd.',
        period: 'Dec 25, 2025 – Present',
        description: 'AiBodia is a leading technology company dedicated to empowering businesses with innovative solutions.',
        highlights: [
            'Part of a 5-member team building a Chat SDK integrated with core services to provide real-time messaging.',
            'Developed WebSocket-based real-time chat functionality for low-latency communication.',
            'Implemented event-driven messaging with RabbitMQ for reliable asynchronous processing.',
            'Built RESTful APIs and secure authentication flows for third-party and internal service integration.',
            'Optimized database access and message persistence using MongoDB.'
        ],
        technologies: ['Node.js', 'WebSocket', 'RabbitMQ', 'MongoDB', 'REST API', 'Authentication']
    },
    {
        title: 'Backend Developer',
        company: 'Serey.IO',
        period: 'Jan 2025 – Dec 2025',
        description: 'Developed a blockchain-integrated social media platform, enabling secure, decentralized content sharing.',
        highlights: [
            'Contributed to API design, backend services, and performance optimization.',
            'Built full-stack solutions including frontend-backend integration and secure data management.'
        ],
        technologies: ['Blockchain', 'API Design', 'Backend', 'Performance', 'Full Stack']
    },
    {
        title: 'Full Stack Developer',
        company: 'KOOMPI, Co., ltd.',
        period: '2023 - 2025',
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
                    className="lg:text-3xl text-xl font-bold text-primary mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }} className='w-full text-center flex justify-center'>
                    <Card className='bg-transparent border-0 p-0' radius="none" shadow='none'>
                        <Image src='/images/certification-cs.jpeg' width={400} radius='none' />
                    </Card>
                </motion.div>

                {/* Bio */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4"
                >
                    <Card className='bg-transparent border-0' radius="none" shadow='none'>
                        <h2 className="text-2xl font-bold mb-4">Bio</h2>
                        <p className="text-gray-700">
                            I believe in building software that not only solves complex problems but also empowers users with intuitive, seamless experiences. My passion for programming lies in crafting scalable solutions that bridge the gap between functionality and simplicity
                        </p>
                    </Card>
                </motion.div> */}

                {/* Skills and Education */}
                <motion.div
                    // className="bg-white/90 rounded-lg shadow-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='w-full lg:text-center'
                >
                    <h2 className="text-2xl font-bold mb-4 flex lg:justify-center lg:items-center underline"> <Icon icon="twemoji:backpack" className='mr-4 hidden lg:block' /> Education <Icon icon="twemoji:backpack" className='ml-4' /></h2>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                            <Card className='bg-transparent border-0' radius="none" shadow='none'>
                                <div className='space-y-4'>
                                    <div className='flex lg:justify-center'>
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
                    className='w-full lg:text-center'
                >
                    <Card className='bg-transparent border-0' radius="none" shadow='none'>
                        <h2 className="text-2xl font-bold mb-4 flex lg:justify-center lg:items-center underline"><Icon icon="twemoji:beating-heart" className='mr-4 hidden lg:block'/> Experience <Icon icon="twemoji:beating-heart" className='ml-4' /></h2>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="relative mb-12 bg-gradient-to-br from-white/90 via-gray-50/80 to-gray-100/80 dark:from-gray-900/90 dark:via-gray-800/80 dark:to-gray-900/80 rounded-2xl shadow-xl p-8 text-left border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Decorative blurred background circle */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl z-0" />
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 relative z-10">
                                    <div className="flex items-center gap-4 mb-2 md:mb-0">
                                        {/* Company logo (if available) */}
                                        {exp.company === 'AIBODIA Co., Ltd.' && (
                                            <img src="/images/aibodia-logo.png" alt="AIBODIA Logo" className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 bg-white object-contain" />
                                        )}
                                        {exp.company === 'Serey.IO' && (
                                            <img src="/images/serey-logo.png" alt="Serey.IO Logo" className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 bg-white object-contain" />
                                        )}
                                        {exp.company === 'KOOMPI, Co., ltd.' && (
                                            <img src="/images/koompi-logo.png" alt="KOOMPI Logo" className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 bg-white object-contain" />
                                        )}
                                        <div>
                                            <h3 className="text-lg font-bold text-primary mb-1">{exp.title} <span className="text-gray-600 font-normal">@ {exp.company}</span></h3>
                                            <p className="text-gray-500 text-sm mb-1">{exp.period}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 dark:text-gray-200 mb-2 leading-relaxed">{exp.description}</p>
                                {exp.highlights && (
                                    <ul className="list-disc pl-5 mb-2 text-gray-700 dark:text-gray-300 space-y-1">
                                        {exp.highlights.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {exp.technologies.map((tech, i) => (
                                        <Chip key={i} color="primary" variant="flat" size="sm">{tech}</Chip>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
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