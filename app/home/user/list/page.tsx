import prisma from "@/utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import MovieCard from "@/components/MovieCard";
import Image from "next/image";

async function getData(userId: string) {

    const data = await prisma.watchList.findMany({
        where: {
            userId: userId,
        },
        select: {
            Movie: {
                select: {
                    title: true,
                    overview: true,
                    id: true,
                    imageString: true,
                    youtubeString: true,
                    release: true,
                    age: true,
                    duration: true,
                    WatchLists: true,
                },
            }

        }
    })

    return data
}

const WatchList = async () => {
    // @ts-expect-error
    const session = await getServerSession(authOptions)
    const res = await getData(session?.user?.email as string)
    return (
        <>
            <h1 className="text-3xl font-bold mt-10 ">
                Watchlist
            </h1>
            <div
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6'
            >

                {res.map((movie) => (
                    <div
                        key={movie.Movie?.id}
                        className="relative h-60"
                    >
                        <Image
                            src={movie.Movie?.imageString as string}
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
                                    src={movie.Movie?.imageString as string}
                                    alt="Movie"
                                    width={600}
                                    height={500}
                                    className="absolute w-full h-full -z-10 rounded-lg object-cover"
                                />
                                <MovieCard
                                    movieId={movie.Movie?.id as number}
                                    overview={movie.Movie?.overview as string}
                                    title={movie.Movie?.title as string}
                                    wachtListId={movie.Movie?.WatchLists[0]?.id as string}
                                    youtubeUrl={movie.Movie?.youtubeString as string}
                                    watchList={movie.Movie?.WatchLists.length as number > 0 ? true : false}
                                    key={movie.Movie?.id}
                                    age={movie.Movie?.age as number}
                                    time={movie.Movie?.duration as number}
                                    year={movie.Movie?.release as number}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default WatchList;