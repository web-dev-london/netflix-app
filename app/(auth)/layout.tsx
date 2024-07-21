import React from 'react'
import BackgroundImage from '../../public/login_background.jpg';
import Image from 'next/image';
import Logo from '../../public/netflix_logo.svg';
import NextAuthProvider from '@/components/NextAuthProvider';

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <>
            <div className="relative flex h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent"
            >

                <Image
                    src={BackgroundImage}
                    alt="background"
                    className="hidden sm:flex sm:object-cover -z-10 brightness-50"
                    priority
                    fill
                />
                <Image
                    src={Logo}
                    alt="logo"
                    className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
                    width={120}
                    height={120}
                    priority
                />
                <NextAuthProvider>
                    {children}
                </NextAuthProvider>
            </div>
        </>
    )
}

export default AuthLayout;