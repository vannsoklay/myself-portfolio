// import { Button, Input, Textarea, Image } from "@nextui-org/react";

// export default function Contact() {
//   return (
//     <section className="h-screen flex items-center justify-center text-white w-full">
//       <div className="grid grid-cols-2 gap-32 w-full flex items-center text-center max-w-[1024px]">
//         <div className="col-span-1">
//           <div className="w-full text-start pb-6">
//             <h1 className="text-3xl font-bold pb-2">Contact Us</h1>
//             <p className="text-sm">Email, call or completed the form to learn how Snappy can solve your message problem.</p>
//           </div>
//           <div className="grid gap-3">
// <Input
//   isRequired
//   type="email"
//   label="Email"
//   className="max-w-full"
//   radius="sm"
// />
//             <Input
//               type="number"
//               label="Phone Number"
//               className="max-w-full"
//               radius="sm"
//             />
//             <Textarea
//               radius="sm"
//               isRequired
//               label="Write something"
//               className="max-w-full"
//             />
//             <Button radius="sm" type="submit" size="lg" variant="shadow" color="secondary">Submit</Button>
//           </div>
//         </div>
//         <div className="h-full flex items-end justify-end">
//           <Image isBlurred src="/images/programmer.png" className="h-96" />
//         </div>
//       </div>
//     </section>
//   );
// }

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { Button, Input, Textarea } from '@nextui-org/react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-10 py-12 relative">
      {/* Background image with blur effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/top-view-arrangement-with-construction-items_23-2148269416.jpg?t=st=1727940811~exp=1727944411~hmac=d03645eba2d031c510364ab2a7ef896e0d43ae564e399e2d83dbef6684bb5ca2&w=900')",
          filter: "blur(4px)"
        }}
      ></div>

      {/* Content */}
      <motion.div
        className="bg-background/80 backdrop-blur-sm p-8 rounded-xl max-w-md w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <Input
              isRequired
              type="text"
              className="max-w-full"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              size="lg"
              variant="bordered"
              radius="sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input
              isRequired
              type="email"
              className="max-w-full"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              size="lg"
              variant="bordered"
              radius="sm"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <Input
              isRequired
              type="text"
              className="max-w-full"
              placeholder="Project Inquiry"
              value={formData.subject}
              onChange={handleChange}
              required
              size="lg"
              variant="bordered"
              radius="sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <Textarea
              isRequired
              className="max-w-full"
              placeholder="Hello, I'm interested in discussing a potential project..."
              value={formData.message}
              onChange={handleChange}
              required
              size="lg"
              variant="bordered"
              radius="sm"
            />
          </div>
          <Button type="submit" className="w-full" variant="solid" color="primary" size="lg" radius="sm">
            Send Message
            {/* <Send className="ml-2 h-4 w-4" /> */}
          </Button>
        </form>
      </motion.div>
    </div>
  )
}
