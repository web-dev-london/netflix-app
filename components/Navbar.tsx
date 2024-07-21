'use client'

import Image from "next/image"
import Link from "next/link"
import Logo from "../public/netflix_logo.svg"
import { usePathname } from "next/navigation";
import links from "../app/helper/helper";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";


const Navbar = () => {
    const pathName = usePathname()

    const navLinks = links.map((link, i) => (
        <div key={i}>
            {pathName === link.href ? (
                <li>
                    <Link
                        href={link.href}
                        className="text-white font-semibold underline-offset-4 underline"
                    >
                        {link.name}
                    </Link>
                </li>
            ) : (
                <li>
                    <Link
                        href={link.href}
                        className="text-white/60 hover:text-white font-semibold transition-all"
                    >
                        {link.name}
                    </Link>
                </li>
            )}
        </div>
    ))

    return (
        <>
            <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
                <div className="flex items-center">
                    <Link href="/home" className="w-32">
                        <Image
                            src={Logo}
                            alt="logo"
                            className="cursor-pointer"
                            width={120}
                            height={120}
                            priority
                        />
                    </Link>
                    <ul
                        className="lg:flex gap-x-4 ml-14 hidden"
                    >
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-x-8">
                    <Search className="w-5 h-5 text-white/60 cursor-pointer hover:text-white transition-all" />
                    <Bell className="w-5 h-5 text-white/60 cursor-pointer hover:text-white transition-all" />
                    <UserNav />
                </div>
            </div>
        </>
    )
}

export default Navbar