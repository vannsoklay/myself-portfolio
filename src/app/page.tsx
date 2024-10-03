"use client";

import { ContectMe } from "@/components/Contect";
import { QrCode } from "@/components/QrCode";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Image, useDisclosure } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isOpen: isOpenContact, onOpen: onContactOpen, onOpenChange: onContactOpenChange } = useDisclosure();
  const [socialName, setSocialName] = useState<string | null>(null);
  return (
    <>
      <section className="relative container mx-auto px-6 min-h-screen grid md:grid-cols-2 gap-12 items-center justify-center lg:p-6 py-24">
        <motion.div initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <h1 className="lg:text-5xl text-2xl font-bold mb-4">
            HEY! I'm Soklay, <br />
            <span className="text-teal-600">Software Developer</span> <br />
            base in Cambodia
          </h1>
          <p className="text-gray-600 mb-6 lg:text-lg text-sm">
            I believe in building software that not only solves complex problems but also empowers users with intuitive, seamless experiences. My passion for programming lies in crafting scalable solutions that bridge the gap between functionality and simplicity
          </p>
          <div className="flex space-x-2 mb-6">
            <Button as={Link} href="/contact" variant="solid" color="primary" radius="full" className="px-6 font-semibold mr-4">
              Contact Me
            </Button>
            <Button as={Link} href="https://github.com/vannsokla" target="_blank" rel="noopener noreferrer" isIconOnly radius="full" className="bg-transparent" >
              <Icon icon="fa-brands:github-square" fontSize={40} />
            </Button>
            <Button as={Link} href="https://www.linkedin.com/in/vann-soklay-00a61a175/" target="_blank" rel="noopener noreferrer" isIconOnly radius="full" className="bg-transparent">
              <Icon icon="devicon:linkedin" fontSize={38} />
            </Button>
            <Button as={Link} href="https://web.facebook.com/soklay512" target="_blank" rel="noopener noreferrer" isIconOnly radius="full" className="bg-transparent">
              <Icon icon="devicon:facebook" fontSize={38}/>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-end">
          <Image
            src="/images/p-1.jpg"
            alt="Soklay - Developer"
            width={400}
            height={400}
            className="rounded-full"
          />
          <motion.div
            className="absolute top-0 right-0 w-4 h-4 bg-purple-500 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-0 lg:left-48 w-3 h-3 bg-teal-500 rounded-full"
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/4 left-0 lg:left-48 w-2 h-2 bg-yellow-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          />
        </motion.div>
      </section>
      <QrCode qr_name={socialName} isOpen={isOpen} onOpenChange={onOpenChange} />
      <ContectMe isOpen={isOpenContact} name="Contact Me" onOpenChange={onContactOpenChange}/>
    </>
  );
}
