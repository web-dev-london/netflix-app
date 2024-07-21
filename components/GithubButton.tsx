'use client'

import { signIn } from "next-auth/react"
import { IoLogoGithub } from "react-icons/io5"
import { Button } from "./ui/button"

const GithubButton = () => {
    return (
        <>
            <Button
                onClick={() => signIn('github')}
                variant={'outline'}
                size={'icon'}
            >
                <IoLogoGithub size={25} />
            </Button>
        </>
    )
}

export default GithubButton
