"use client";

import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
export default function Projects() {
    const projects = [
        {
            "logo": "/images/riverbase.png",
            "name": "Riverbase",
            "title": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
            "domain": "https://riverbase.org",
            "desc": "desc",
            "thumnail": "https://img.freepik.com/free-photo/young-asian-woman-startup-small-business-freelance-sale-fashion-clothing-with-parcel-box-computer-laptop-table-sitting-isolated-pink-background-online-marketing-delivery-concept_74952-2651.jpg?t=st=1727195422~exp=1727199022~hmac=9d5a7116901fd30298eea981de194cce58a4fe3cce733a2311cff77d9ac72ca0&w=1380",
            "start_date": "1"
        },
        {
            "logo": "/images/camprotec.png",
            "name": "Camtecpro",
            "title": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
            "domain": "https://camprotec.riverbase.org",
            "desc": "desc",
            "thumnail": "https://img.freepik.com/free-photo/discount-shopping-season-with-sale_23-2150165924.jpg?t=st=1727195840~exp=1727199440~hmac=329c4306751d39d9f81fe8d01591db804cfc2dcc1883ce451a9377d78d5fa539&w=1380",
            "start_date": "1"
        },
        {
            "logo": "/images/smartcam.png",
            "name": "Smartcam Electronic Solution",
            "title": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
            "domain": "https://smartcam.riverbase.org",
            "thumnail": "https://img.freepik.com/free-photo/young-man-using-discount-coupon-his-smartphone-some-online-shopping-laptop_662251-2177.jpg?t=st=1727194094~exp=1727197694~hmac=63fd525e0194fb11f7486b617cd0c7af3a061b7d22824377cbc31b66abaf9549&w=1380",
            "desc": "desc",
            "start_date": "1"
        },
        {
            "logo": "/images/weteka.png",
            "name": "Weteka",
            "title": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
            "domain": "https://weteka.org",
            "thumnail": "https://img.freepik.com/free-photo/asia-businesswoman-using-laptop-talk-colleagues-about-plan-video-call-meeting-living-room_7861-3171.jpg?t=st=1727192622~exp=1727196222~hmac=20e57629bcf8a3a354721d6d4b1ad1e4b38485cef325ef6c0894e559fddbddc9&w=1380",
            "desc": "desc",
            "start_date": "1"
        },
        {
            "logo": "/images/weteka.png",
            "name": "World Travel Booking",
            "title": "Share your travel experiences through stunning videos and images, inspiring others to explore the world.",
            "domain": "https://travel-platform.vercel.app/",
            "thumnail": "https://img.freepik.com/free-photo/flat-lay-yellow-luggage-with-copy-space_23-2148786124.jpg?t=st=1727196795~exp=1727200395~hmac=e524b1ad405dae332f32364ecfb2fdc7162c3d3a8cc7970ccf6a28e9fc3cc334&w=1380",
            "desc": "desc",
            // "status" "Start Up",
            "start_date": "1"
        }
    ]

    return (
        <section className="relative">
            <div
                className="min-h-screen bg-cover bg-center bg-fixed group"
            >
                <div className="inset-0 min-h-screen blur-none bg-opacity-100 relative">
                    <div className="container mx-auto px-6 py-24 h-screen flex items-start">
                        <div className="grid grid-cols-1 gap-12 mb-12 w-full">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-8 lg:mb-0 flex justify-center"
                            >
                                <h1 className="text-4xl font-bold mb-4">Experience with projects</h1>
                            </motion.div>
                            <div className="lg:w-full">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-right mb-8 lg:mb-0"
                                >

                                    <div className="grid grid-cols-3 gap-12">
                                        {projects.map((project, idx: number) =>
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                                whileHover={{ scale: 1.03 }}

                                            >
                                                <Card className="flex justify-center bg-cover bg-center relative p-0" style={{
                                                    // backgroundImage: `url(${project.thumnail})`,
                                                    // filter: "blur(2px)",
                                                    // transform: "scale(1.1)"
                                                }}>
                                                    <div className="h-64 w-full">
                                                        <Image
                                                            src={project.thumnail}
                                                            alt={project.name}
                                                            className="w-full h-auto"
                                                        />
                                                    </div>
                                                    <motion.div
                                                        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-center z-20"
                                                        initial={{ opacity: 0.7 }}
                                                        whileHover={{ opacity: 1 }}
                                                    >
                                                        <Link href={project.domain} rel="_blank" className="text-2xl text-white font-bold mb-8">{project.name}</Link>

                                                    </motion.div>
                                                </Card>
                                            </motion.div>

                                        )}</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
        // <section className="relative min-h-screen grid md:grid-cols-2 gap-12 items-center justify-center">
        //     <motion.div
        //         className="flex justify-center"
        //         initial={{ opacity: 0, x: -50 }}
        //         animate={{ opacity: 1, x: 0 }}
        //         transition={{ duration: 0.8 }}>
        //         <h1>Experience to explore programming, tools to used with implement my projects</h1>
        //     </motion.div>
        // </section>
    );
}
