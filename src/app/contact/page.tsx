'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button, Input, Textarea } from '@nextui-org/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import toast from 'react-hot-toast'

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    e.preventDefault();
    const from = formData.email;
    const to = "soklayvann5@gmail.com";
    const subject = `I'm ${formData.name} ${formData.subject}`;
    const text = formData.message;
    const body = JSON.stringify({ from: from, to: to, subject: subject, text: text });

    console.log("mail body", body);
    
    await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from: from, to: to, subject: subject, text: text }),
    }).then((res: any) => {
      if (res.status == 401) {
        return toast.error("Error to send mail");
      }
      if (res.status == 500) {
        return toast.error("Error to send mail");
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success("Send mail successfully");
    }).catch((e) => {
      toast.error(e.message);
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center lg:pb-10 pb-20 relative">
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
        className="bg-background/80 backdrop-blur-sm p-8 mb-0.5 lg:mb-0 rounded-xl max-w-md w-full relative z-10"
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
              name="name"
              className="max-w-full"
              placeholder="John Doe"
              defaultValue={formData.name}
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
              name="email"
              className="max-w-full"
              placeholder="john@example.com"
              defaultValue={formData.email}
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
              name="subject"
              className="max-w-full"
              placeholder="Project Inquiry"
              defaultValue={formData.subject}
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
              name="message"
              className="max-w-full"
              placeholder="Hello, I'm interested in discussing a potential project..."
              defaultValue={formData.message}
              onChange={handleChange}
              required
              size="lg"
              variant="bordered"
              radius="sm"
            />
          </div>
          <Button type="submit" className="w-full" variant="solid" color="primary" size="lg" radius="sm">
            Send Message
            <Icon icon="lets-icons:send-fill" fontSize={28} />
          </Button>
        </form>
      </motion.div>
    </div>
  )
}
