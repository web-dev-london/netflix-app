import GithubButton from "@/components/GithubButton";
import GoogleButton from "@/components/GoogleButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const Login = async () => {
    // @ts-expect-error
    const session = await getServerSession(authOptions)

    if (session) {
        return redirect('/home')
    }

    return (
        <>
            <div className="mt-24 rounded-xl bg-black/70 py-10 px-6 md:mt-0 md:max-w-sm md:px-14 "
            >

                <form method="POST" action="/api/auth/signin">
                    <h1
                        className="text-2xl font-semibold text-white"
                    >
                        Log in
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
                            Log in
                        </Button>
                    </div>
                </form>

                <div
                    className="mt-4 text-center text-sm text-[#737373]"
                >
                    New to Netflix?{' '}
                    <Link
                        className="text-white hover:underline"
                        href="/signup"
                    >
                        Sign up
                    </Link>
                </div>

                <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                    <GithubButton />

                    <GoogleButton />
                </div>
            </div>
        </>
    );
}

export default Login;