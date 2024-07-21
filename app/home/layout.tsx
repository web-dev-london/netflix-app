import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from "../utils/auth";
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';


interface HomeLayoutProps {
    children: React.ReactNode
}
const HomeLayout = async ({ children }: HomeLayoutProps) => {
    // @ts-expect-error
    const session = await getServerSession(authOptions)

    if (!session) {
        return redirect('/login')
    }

    return (
        <div>
            <Navbar />
            <main
                className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex"
            >
                {children}
            </main>
        </div>
    )
}

export default HomeLayout