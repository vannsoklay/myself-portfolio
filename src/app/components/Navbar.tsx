"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as MyLink, Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MyNavbar = () => {
    const pathname = usePathname();
    return (
        <Navbar className="absolute backdrop-blur-sm bg-white/5">
            <NavbarBrand>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-8" justify="end">
                <NavbarItem isActive={pathname == "/"}>
                    <MyLink as={Link} href="/" className=" text-white" aria-current="page">
                        Home
                    </MyLink>
                </NavbarItem>
                <NavbarItem isActive={pathname == "/about"}>
                    <MyLink as={Link} color="foreground" className=" text-white" href="/about" >
                        About
                    </MyLink>
                </NavbarItem>
                <NavbarItem isActive={pathname == "/blog"}>
                    <MyLink as={Link} color="foreground" className=" text-white" href="/blog">
                        Blog
                    </MyLink>
                </NavbarItem>
                {/* <NavbarItem isActive={pathname == "/contact"}>
                    <MyLink as={Link} color="foreground" className=" text-white" href="/contact">
                        Contact
                    </MyLink>
                </NavbarItem> */}
                <NavbarItem>
                    <Button as={Link} href="/contact" isIconOnly radius="full" className="flex items-center">
                        <Avatar
                            src="./images/avatar-1.jpg"
                            className="object-cover cusor-painter"
                        />
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}