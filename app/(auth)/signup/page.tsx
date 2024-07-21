import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/auth";


const Signup = async () => {
    // @ts-expect-error
    const session = await getServerSession(authOptions)

    if (session) {
        redirect('/home')
    }

    return (
        <>
            <div className="mt-24 rounded-xl bg-black/70 py-10 px-6 md:mt-0 md:max-w-sm md:px-14 "
            >
                <form method="POST" action="/api/auth/signup">
                    <h1
                        className="text-2xl font-semibold text-white"
                    >
                        Signup

                    </h1>

                    <div
                        className="space-y-4 mt-5"
                    >
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="bg-[#2c2c2c] text-white w-full inline-block"
                        />
                        <Button
                            type="submit"
                            variant={'destructive'}
                            className="w-full inline-block bg-[#e50924] hover:bg-[#ff0000] text-white"
                        >
                            Signup
                        </Button>
                    </div>
                </form>

                <div
                    className="mt-4 text-center text-sm text-[#737373]"
                >
                    Already have an account?{' '}
                    <Link
                        className="text-white hover:underline"
                        href="/login"
                    >
                        Login now
                    </Link>
                </div>

                <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                    <Button
                        variant={'outline'}
                        size={'icon'}
                    >
                        <IoLogoGithub size={25} />
                    </Button>

                    <Button
                        variant={'outline'}
                        size={'icon'}
                    >
                        <FcGoogle size={25} />
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Signup;