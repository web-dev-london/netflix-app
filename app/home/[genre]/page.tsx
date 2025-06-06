import prisma from "@/utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import Image from "next/image";
import MovieCard from "@/components/MovieCard";


async function getData(category: string, userId: string) {
    switch (category) {
        case 'shows': {
            const data = await prisma.movie.findMany({
                where: {
                    category: 'show',
                },
                select: {
                    title: true,
                    overview: true,
                    id: true,
                    imageString: true,
                    youtubeString: true,
                    release: true,
                    age: true,
                    duration: true,
                    WatchLists: {
                        where: {
                            userId: userId
                        }
                    },
                },
            })
            return data
        }
        case 'movies': {
            const data = await prisma.movie.findMany({
                where: {
                    category: 'movie',
                },
                select: {
                    title: true,
                    overview: true,
                    id: true,
                    imageString: true,
                    youtubeString: true,
                    release: true,
                    age: true,
                    duration: true,
                    WatchLists: {
                        where: {
                            userId: userId
                        }
                    },
                },
            })
            return data
        }
        case "recently": {
            const data = await prisma.movie.findMany({
                where: {
                    category: 'movie',
                },
                select: {
                    title: true,
                    overview: true,
                    id: true,
                    imageString: true,
                    youtubeString: true,
                    release: true,
                    age: true,
                    duration: true,
                    WatchLists: {
                        where: {
                            userId: userId
                        }
                    },
                },
            })
            return data
        }
        default: {
            throw new Error('Invalid category')
        }
    }
}

interface CategoryViewProps {
    params: {
        genre: string
    }
}

const CategoryView = async (params: CategoryViewProps) => {
    // @ts-expect-error
    const session = await getServerSession(authOptions)
    if (!session) {
        throw new Error('Invalid session')
    }
    const data = await getData(params.params.genre, session.user.id)
    return (
        <>
            <div
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6'
            >

                {data.map((movie) => (
                    <div
                        key={movie.id}
                        className="relative h-60"
                    >
                        <Image
                            src={movie.imageString}
                            alt="Movie"
                            width={500}
                            height={400}
                            className="rounded-sm absolute w-full h-full object-cover"
                        />
                        <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100"
                        >
                            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border"
                            >
                                <Image
                                    src={movie.imageString}
                                    alt="Movie"
                                    width={600}
                                    height={500}
                                    className="absolute w-full h-full -z-10 rounded-lg object-cover"
                                />
                                <MovieCard
                                    movieId={movie.id}
                                    overview={movie.overview}
                                    title={movie.title}
                                    wachtListId={movie.WatchLists[0]?.id}
                                    youtubeUrl={movie.youtubeString}
                                    watchList={movie.WatchLists.length > 0 ? true : false}
                                    key={movie.id}
                                    age={movie.age}
                                    time={movie.duration}
                                    year={movie.release}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CategoryView;