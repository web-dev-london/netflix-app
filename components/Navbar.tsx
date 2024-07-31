'use client'

import Image from "next/image"
import Link from "next/link"
import Logo from "../public/netflix_logo.svg"
import { usePathname } from "next/navigation";
import links from "../helper/helper";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";
import { Session } from "next-auth";
import { useState } from "react";


const Navbar = (props: {
    session: Session
}) => {
    const pathName = usePathname()
    const [isOpen, setIsOpen] = useState(false);

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
                    <form
                        className="relative"
                    >
                        {isOpen ? (
                            <input
                                className="bg-[#2c2c2c] text-white w-[250px] rounded-lg py-[0.40rem] px-4 outline-none
                                placeholder:text-white/60"
                                type="text"
                                placeholder="Search"
                            />
                        ) : null}

                        <Search
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-5 h-5 text-white/60 cursor-pointer hover:text-white
                            absolute top-1/2 right-3 -translate-y-1/2
                            "
                        />
                    </form>
                    <Bell className="w-5 h-5 text-white/60 cursor-pointer hover:text-white transition-all" />
                    <UserNav
                        session={props.session}
                    />
                </div>
            </div>
        </>
    )
}

export default Navbar