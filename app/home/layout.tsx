import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from "../../utils/auth";
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
            <Navbar
                session={session}
            />
            <main
                className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8 "
            >
                {children}
            </main>
        </div>
    )
}

export default HomeLayout