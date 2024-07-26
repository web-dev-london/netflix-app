'use server'
import prisma from "@/utils/db"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import  {authOptions}  from "../utils/auth"; 

export async function addToWatchList(formData: FormData) {
    'use server'
    // @ts-expect-error
    const session = await getServerSession(authOptions)
    const movieId = formData.get('movieId')
    const pathName =  formData.get('pathName') as string
    const userId = session?.user?.email as string;
    const existing = await prisma.watchList.findFirst({
        where: {
            userId,
            movieId: Number(movieId),
        }
    })
    if(existing) {
      return;
    }
    
    const createData = await prisma.watchList.create({
        data: {
            userId,
            movieId: Number(movieId),
        }
    })

    revalidatePath(pathName)
}

export async function removeFromWatchList(formData: FormData) {
    'use server'
    const wachtListId = formData.get('wachtListId') as string
    const pathName =  formData.get('pathName') as string
    
    const deleteData = await prisma.watchList.delete({
        where: {
          id: wachtListId,
        }
    })
    revalidatePath(pathName)
}