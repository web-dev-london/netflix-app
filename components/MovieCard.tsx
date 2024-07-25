'use client'

import { Heart, PlayCircle } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import PlayVideoModel from './PlayVideoModel'
import { addToWatchList, removeFromWatchList } from '../helper/action'
import { usePathname } from 'next/navigation'

const MovieCard = (props: {
    title: string,
    overview: string,
    movieId: number,
    wachtListId: string,
    youtubeUrl: string,
    watchList: boolean,
    age: number,
    time: number,
    year: number

}) => {
    const { title, overview, movieId, wachtListId, youtubeUrl, watchList, age, time, year } = props
    const [open, setOpen] = useState(false);
    const pathName = usePathname();

    return (
        <>
            <button
                className='w-full h-full flex justify-center items-center'
                onClick={() => setOpen(true)}
            >
                <PlayCircle className='w-[30px] h-[30px]' />
            </button>

            <div
                className='right-5 top-5 absolute z-10'>
                {watchList ? (
                    <form action={removeFromWatchList}>
                        <input type="hidden" name="wachtListId" value={wachtListId} />
                        <input type="hidden" name='pathName' value={pathName} />
                        <Button
                            variant={'outline'} size={'icon'}
                            className='rounded-full'
                        >
                            <Heart className='w-4 h-4 text-red-500' />
                        </Button>
                    </form>
                ) : (
                    <form action={addToWatchList}>
                        <input type="hidden" name="movieId" value={movieId} />
                        <input type="hidden" name='pathName' value={pathName} />
                        <Button
                            variant={'ghost'} size={'icon'}
                            className='rounded-full'
                        >
                            <Heart className='w-4 h-4' />
                        </Button>
                    </form>
                )}
            </div>

            <div
                className='p-5 absolute bottom-0 left-0 top-[50%]'
            >
                <h1
                    className="font-bold text-white text-lg line-clamp-1"
                >
                    {title}
                </h1>
                <div
                    className='flex gap-x-2 items-center'
                >
                    <p
                        className='text-sm font-normal'
                    >
                        {year}
                    </p>
                    <p
                        className='text-sm font-normal border py-0.5 px-1 border-gray-200 rounded'
                    >
                        {age}+
                    </p>
                    <p
                        className='font-normal text-sm'
                    >
                        {time} min
                    </p>
                </div>
                <p
                    className='font-light text-sm line-clamp-1 text-gray-300 mt-3'
                >
                    {overview.length > 100 ? overview.slice(0, 100) + '...' : overview}
                </p>
            </div>
            <PlayVideoModel
                youtubeUrl={youtubeUrl}
                title={title}
                state={open}
                overview={overview}
                age={age}
                duration={time}
                release={year}
                changeState={setOpen}
            />
        </>
    )
}
export default MovieCard