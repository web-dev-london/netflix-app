import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
    // @ts-expect-error
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/login')
    } else {
        redirect('/home')
    }

}