"use client";

import { Navbar as MyNavbar, NavbarContent, NavbarItem, Link, Button, useDisclosure } from "@nextui-org/react";
import { ContectMe } from "./Contect";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const pathname = usePathname();
    return (
        <>
            <MyNavbar maxWidth="2xl" className="bg-transparent absolute drop-shadow-none backdrop-blur-none backdrop-saturate-150 h-20">

                <NavbarContent className="hidden sm:flex gap-8 font-semibold" justify="center">
                    <NavbarItem isActive={pathname == "/"}>
                        <Link color="foreground" href="/" className={`text-black ${ pathname == "/" && 'font-semibold text-gray-500' }`}>
                            Home
                        </Link>
                    </NavbarItem>
                        <NavbarItem isActive={pathname == "/projects"}>
                            <Link color="foreground" href="/projects" className={`text-black ${ pathname == "/projects" && 'font-semibold text-gray-500' }`}>
                            Projects
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button onPress={() => onOpen()} color="primary" href="#" radius="full" className="w-24 font-semibold text-white" variant="solid">
                            Hire Me!
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </MyNavbar>
            <ContectMe isOpen={isOpen} name="Hire Me" onOpenChange={onOpenChange} />
        </>
    )
}