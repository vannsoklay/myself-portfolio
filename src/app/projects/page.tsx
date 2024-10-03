'use client'

import { motion } from 'framer-motion'
import { Image } from '@nextui-org/react'
import { ExternalLink } from 'lucide-react'
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import Link from 'next/link'

const projects = [
  {
    "image": "/images/riverbase.png",
    "title": "Riverbase",
    "description": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
    live: "https://riverbase.org",
    github: "",
    tags: ['Rust', 'Nextjs-14','GraphQL', 'Restful API', "Mongo-DB"]
  },
  {
    "image": "/images/camprotec.png",
    "title": "Camtecpro",
    "description": "A full-stack e-commerce solution with Nextjs-14, Rust, and MongoDB.",
    live: "https://camprotec.riverbase.org",
    github: "",
    tags: ['Nextjs-14', 'GraphQL', 'API Intergration RVB']
  },
  {
    "image": "/images/smartcam.png",
    "title": "Smartcam Electronic Solution",
    "description": "A full-stack e-commerce solution with Nextjs-14, Rust, and MongoDB.",
    live: "https://smartcam.riverbase.org",
    github: "",
    tags: ['Nextjs-14', 'GraphQL', 'API Intergration RVB']
  },
  {
    "image": "/images/weteka.png",
    "title": "Weteka",
    "description": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
    live: "https://weteka.org",
    github: "",
    tags: ['Rust', 'GraphQL', 'Nextjs-14']
  },
  {
    "image": "",
    "title": "World Travel Booking",
    "description": "A static blog built with Nextjs14 and Markdown for plaltform portfolio.",
    live: "https://travel-platform.vercel.app/",
    github: "",
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