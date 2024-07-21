'use client'
import { signIn } from 'next-auth/react'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Button } from './ui/button'

const GoogleButton = () => {
    return (
        <>
            <Button
                onClick={() => signIn('google')}
                variant={'outline'}
                size={'icon'}
            >
                <FcGoogle size={25} />
            </Button>
        </>
    )
}

export default GoogleButton