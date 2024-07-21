'use client'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { signOut } from 'next-auth/react'


const UserNav = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='relative w-10 h-10 rounded-sm'>
                    <Avatar className='w-10 h-10 rounded-sm'>
                        <AvatarImage src='https://cighcurogdylwbnusqio.supabase.co/storage/v1/object/sign/user-image/avatar.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLWltYWdlL2F2YXRhci5wbmciLCJpYXQiOjE3MjE1OTcwNDgsImV4cCI6MTc1MzEzMzA0OH0.0BGjZWOq2WeQfZQaxpGVKKev8NGYGpvhLjZX6Ut6qGo&t=2024-07-21T21%3A24%3A08.542Z' />
                        <AvatarFallback className='rounded-sm'>JD</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <div className='flex flex-col space-y-1'>
                        <p
                            className='text-sm font-semibold leading-none'
                        >
                            John Doe
                        </p>
                        <p
                            className='text-sm text-muted-foreground '
                        >
                            @johndoe
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className='cursor-pointer'
                    onClick={() => {
                        signOut()
                    }}
                >
                    Sing out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserNav
