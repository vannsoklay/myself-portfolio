// "use client";

// import { motion } from "framer-motion";
// import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
// export default function Projects() {
// const projects = [
//     {
//         "image": "/images/riverbase.png",
//         "name": "Riverbase",
//         "title": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
//         live: "https://riverbase.org",
//     
//         "thumnail": "https://img.freepik.com/free-photo/young-asian-woman-startup-small-business-freelance-sale-fashion-clothing-with-parcel-box-computer-laptop-table-sitting-isolated-pink-background-online-marketing-delivery-concept_74952-2651.jpg?t=st=1727195422~exp=1727199022~hmac=9d5a7116901fd30298eea981de194cce58a4fe3cce733a2311cff77d9ac72ca0&w=1380",
//         "start_date": "1"
//     },
//     {
//         "logo": "/images/camprotec.png",
//         "name": "Camtecpro",
//         "title": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
//         live: "https://camprotec.riverbase.org",
//     
//         "thumnail": "https://img.freepik.com/free-photo/discount-shopping-season-with-sale_23-2150165924.jpg?t=st=1727195840~exp=1727199440~hmac=329c4306751d39d9f81fe8d01591db804cfc2dcc1883ce451a9377d78d5fa539&w=1380",
//         "start_date": "1"
//     },
//     {
//         "logo": "/images/smartcam.png",
//         "name": "Smartcam Electronic Solution",
//         "title": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
//         live: "https://smartcam.riverbase.org",
//         "thumnail": "https://img.freepik.com/free-photo/young-man-using-discount-coupon-his-smartphone-some-online-shopping-laptop_662251-2177.jpg?t=st=1727194094~exp=1727197694~hmac=63fd525e0194fb11f7486b617cd0c7af3a061b7d22824377cbc31b66abaf9549&w=1380",
//     
//         "start_date": "1"
//     },
//     {
//         "logo": "/images/weteka.png",
//         "name": "Weteka",
//         "title": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
//         live: "https://weteka.org",
//         "thumnail": "https://img.freepik.com/free-photo/asia-businesswoman-using-laptop-talk-colleagues-about-plan-video-call-meeting-living-room_7861-3171.jpg?t=st=1727192622~exp=1727196222~hmac=20e57629bcf8a3a354721d6d4b1ad1e4b38485cef325ef6c0894e559fddbddc9&w=1380",
//     
//         "start_date": "1"
//     },
//     {
//         "logo": "/images/weteka.png",
//         "name": "World Travel Booking",
//         "title": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
//         live: "https://travel-platform.vercel.app/",
//         "thumnail": "https://img.freepik.com/free-photo/flat-lay-yellow-luggage-with-copy-space_23-2148786124.jpg?t=st=1727196795~exp=1727200395~hmac=e524b1ad405dae332f32364ecfb2fdc7162c3d3a8cc7970ccf6a28e9fc3cc334&w=1380",
//     
//         // "status" "Start Up",
//         "start_date": "1"
//     }
// ]

//     return (
//         <section className="relative">
//             <div
//                 className="min-h-screen bg-cover bg-center bg-fixed group"
//             >
//                 <div className="inset-0 min-h-screen blur-none bg-opacity-100 relative">
//                     <div className="container mx-auto px-6 py-24 h-screen flex items-start">
//                         <div className="grid grid-cols-1 gap-12 mb-12 w-full">
//                             <motion.div
//                                 initial={{ opacity: 0, x: -50 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.5 }}
//                                 className="mb-8 lg:mb-0 flex justify-center"
//                             >
//                                 <h1 className="text-4xl font-bold mb-4">Experience with projects</h1>
//                             </motion.div>
//                             <div className="lg:w-full">
//                                 <motion.div
//                                     initial={{ opacity: 0, x: -50 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     transition={{ duration: 0.5 }}
//                                     className="text-right mb-8 lg:mb-0"
//                                 >

//                                     <div className="grid grid-cols-3 gap-12">
//                                         {projects.map((project, idx: number) =>
//                                             <motion.div
//                                                 key={idx}
//                                                 initial={{ opacity: 0, x: -50 }}
//                                                 animate={{ opacity: 1, x: 0 }}
//                                                 transition={{ type: "spring", stiffness: 300, damping: 10 }}
//                                                 whileHover={{ scale: 1.03 }}

//                                             >
//                                                 <Card className="flex justify-center bg-cover bg-center relative p-0" style={{
//                                                     // backgroundImage: `url(${project.thumnail})`,
//                                                     // filter: "blur(2px)",
//                                                     // transform: "scale(1.1)"
//                                                 }}>
//                                                     <div className="h-64 lg:h-44 w-full">
//                                                         <Image
//                                                             src={project.thumnail}
//                                                             alt={project.name}
//                                                             className="w-full h-auto"
//                                                         />
//                                                     </div>
//                                                     <motion.div
//                                                         className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-center z-20"
//                                                         initial={{ opacity: 0.7 }}
//                                                         whileHover={{ opacity: 1 }}
//                                                     >
//                                                         <Link href={projectlive rel="_blank" className="text-2xl text-white font-bold mb-8">{project.name}</Link>

//                                                     </motion.div>
//                                                 </Card>
//                                             </motion.div>

//                                         )}</div>
//                                 </motion.div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </section >
//     );
// }


'use client'

import { motion } from 'framer-motion'
import { Image } from '@nextui-org/react'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'
import { Button, Card, CardBody, CardFooter, CardHeader, Chip } from '@nextui-org/react'
import Link from 'next/link'

// const projects = [
//   {
//     title: 'E-commerce Platform',
//     description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
//     image: '/placeholder.svg?height=300&width=400',
//     github: 'https://github.com/yourusername/ecommerce-platform',
//     live: 'https://ecommerce-platform-demo.vercel.app',
//     tags: ['React', 'Node.js', 'MongoDB', 'Express']
//   },
//   {
//     title: 'Weather Dashboard',
//     description: 'Real-time weather application using OpenWeatherMap API and React.',
//     image: '/placeholder.svg?height=300&width=400',
//     github: 'https://github.com/yourusername/weather-dashboard',
//     live: 'https://weather-dashboard-demo.vercel.app',
//     tags: ['React', 'API Integration', 'Tailwind CSS']
//   },
//   {
//     title: 'Task Management System',
//     description: 'A Kanban-style task management app built with Next.js and Firebase.',
//     image: '/placeholder.svg?height=300&width=400',
//     github: 'https://github.com/yourusername/task-management',
//     live: 'https://task-management-demo.vercel.app',
//     tags: ['Next.js', 'Firebase', 'React DnD']
//   },
//   {
//     title: 'Personal Blog',
//     description: 'A static blog built with Gatsby and Markdown for content management.',
//     image: '/placeholder.svg?height=300&width=400',
//     github: 'https://github.com/yourusername/personal-blog',
//     live: 'https://personal-blog-demo.netlify.app',
//     tags: ['Gatsby', 'GraphQL', 'Markdown']
//   }
// ]

const projects = [
  {
    "image": "/images/riverbase.png",
    "title": "Riverbase",
    "description": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
    live: "https://riverbase.org",
    github: "",
    // "thumnail": "https://img.freepik.com/free-photo/young-asian-woman-startup-small-business-freelance-sale-fashion-clothing-with-parcel-box-computer-laptop-table-sitting-isolated-pink-background-online-marketing-delivery-concept_74952-2651.jpg?t=st=1727195422~exp=1727199022~hmac=9d5a7116901fd30298eea981de194cce58a4fe3cce733a2311cff77d9ac72ca0&w=1380",
    tags: ['Rust', 'Nextjs-14','GraphQL', 'Restful API', "Mongo-DB"]
  },
  {
    "image": "/images/camprotec.png",
    "title": "Camtecpro",
    "description": "A full-stack e-commerce solution with Nextjs-14, Rust, and MongoDB.",
    live: "https://camprotec.riverbase.org",
    github: "",
    // "thumnail": "https://img.freepik.com/free-photo/discount-shopping-season-with-sale_23-2150165924.jpg?t=st=1727195840~exp=1727199440~hmac=329c4306751d39d9f81fe8d01591db804cfc2dcc1883ce451a9377d78d5fa539&w=1380",
    tags: ['Nextjs-14', 'GraphQL', 'API Intergration RVB']
  },
  {
    "image": "/images/smartcam.png",
    "title": "Smartcam Electronic Solution",
    "description": "A full-stack e-commerce solution with Nextjs-14, Rust, and MongoDB.",
    live: "https://smartcam.riverbase.org",
    github: "",
    // "thumnail": "https://img.freepik.com/free-photo/young-man-using-discount-coupon-his-smartphone-some-online-shopping-laptop_662251-2177.jpg?t=st=1727194094~exp=1727197694~hmac=63fd525e0194fb11f7486b617cd0c7af3a061b7d22824377cbc31b66abaf9549&w=1380",
    tags: ['Nextjs-14', 'GraphQL', 'API Intergration RVB']
  },
  {
    "image": "/images/weteka.png",
    "title": "Weteka",
    "description": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
    live: "https://weteka.org",
    github: "",
    // "thumnail": "https://img.freepik.com/free-photo/asia-businesswoman-using-laptop-talk-colleagues-about-plan-video-call-meeting-living-room_7861-3171.jpg?t=st=1727192622~exp=1727196222~hmac=20e57629bcf8a3a354721d6d4b1ad1e4b38485cef325ef6c0894e559fddbddc9&w=1380",
    tags: ['Rust', 'GraphQL', 'Nextjs-14']
  },
  {
    "image": "",
    "title": "World Travel Booking",
    "description": "A static blog built with Nextjs14 and Markdown for plaltform portfolio.",
    live: "https://travel-platform.vercel.app/",
    github: "",
    // "thumnail": "https://img.freepik.com/free-photo/flat-lay-yellow-luggage-with-copy-space_23-2148786124.jpg?t=st=1727196795~exp=1727200395~hmac=e524b1ad405dae332f32364ecfb2fdc7162c3d3a8cc7970ccf6a28e9fc3cc334&w=1380",
    tags: ['Nextjs-14']
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen relative pb-10">
      {/* Background image with blur */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://img.freepik.com/free-photo/top-view-arrangement-with-construction-items_23-2148269416.jpg?t=st=1727940811~exp=1727944411~hmac=d03645eba2d031c510364ab2a7ef896e0d43ae564e399e2d83dbef6684bb5ca2&w=900"
          alt="Background"
          className="object-cover filter blur-sm w-screen h-screen"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold text-primary mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col" shadow="none">
                <CardHeader>
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={100}
                    className="h-48 object-contain p-12 rounded-t-lg w-screen"
                  />
                </CardHeader>
                <CardBody className="flex-grow py-0">
                  <CardHeader className="py-0 mt-4 font-semibold text-xl">{project.title}</CardHeader>
                  <CardBody>{project.description}
                    {/* <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => (
                        <Chip key={tag} color="primary" size="lg" className="font-semibold" radius="sm">{tag}</Chip>
                      ))}
                    </div> */}
                  </CardBody>
                </CardBody>
                <CardFooter className="flex justify-between">
                  {/* <Button variant="solid" size="md" color="primary">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button> */}
                  <div></div>
                  <Button variant="solid" size="md" color="default" className="bg-transparent">
                    <Link href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-secondary font-bold">
                      <ExternalLink strokeWidth={3} className="w-4 h-4 mr-2 mb-0.5" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}