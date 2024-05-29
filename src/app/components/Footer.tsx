"use client";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export const MyFooter = () => {
    const pathname = usePathname();

    console.log("p", pathname);

    return (
        <div className="absolute backdrop-blur-sm z-40 bg-white/5 lg:px-40 px-12 bottom-0 w-full backdrop-blur-sm h-20 flex items-center justify-around text-center gap-4">
            <div>
                <Button as={Link} href="/" isIconOnly color="secondary" variant="flat" aria-label="home">
                    {pathname == "/" ? <Icon icon="solar:home-2-bold" fontSize={20} /> : <Icon icon="solar:home-2-broken" fontSize={20} />}
                </Button>
            </div>
            <div>
                <Button as={Link} href="/about" isIconOnly color="secondary" variant="flat" aria-label="about">
                    {pathname == "/about" ? <Icon icon="solar:user-id-bold" fontSize={20} /> : <Icon icon="solar:user-id-broken" fontSize={20} />}
                </Button>
            </div>
            <div>
                <Button as={Link} href="/blog" isIconOnly color="secondary" variant="flat" aria-label="blog">
                    {pathname == "/blog" ? <Icon icon="solar:pen-new-round-bold" fontSize={20} /> : <Icon icon="solar:pen-new-round-broken" fontSize={20} />}
                </Button>
            </div>
            <div>
                <Button as={Link} href="/contact" isIconOnly color="secondary" variant="flat" aria-label="contact">
                    {pathname == "/contact" ? <Icon icon="solar:call-medicine-bold" fontSize={20} /> : <Icon icon="solar:call-medicine-broken" fontSize={20} />}
                </Button>
            </div>
        </div >
    )
}