'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

const navItems = [
  { name: 'Home', not_active_icon: "solar:home-2-broken", active_icon: "solar:home-2-bold", href: '/' },
  { name: 'About', not_active_icon: "solar:user-circle-linear", active_icon: "solar:user-circle-bold", href: '/about' },
  { name: 'Projects', not_active_icon: "solar:backpack-linear", active_icon: "solar:backpack-bold", href: '/projects' },
  { name: 'Contact', not_active_icon: "solar:mailbox-linear", active_icon: "solar:mailbox-bold", href: '/contact' },
]

export default function BottomBar() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white backdrop-blur-sm">
      <ul className="flex justify-around items-center h-20 px-4 md:px-8 max-w-3xl mx-auto">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="relative flex flex-col items-center group">
              <span className="sr-only">{item.name}</span>
              <motion.div
                className="absolute -inset-2 rounded-full z-0"
                initial={false}
                animate={{ scale: pathname === item.href ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="relative z-10"
              >
                <Icon icon={pathname === item.href ? item.active_icon.toString() : item.not_active_icon.toString()} fontSize={24}/>
                {/* <item.icon
                  className={`h-6 w-6 ${
                    pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                  } transition-colors duration-200`}
                /> */}
              </motion.div>
              <span
                className={`text-xs mt-1 ${pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                  } transition-colors duration-200`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}