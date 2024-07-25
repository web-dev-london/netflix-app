'use client'

import { InfoIcon, PlayCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import PlayVideoModel from "./PlayVideoModel";


const MovieButtons = (props: {
    duration: number;
    releasDate: number;
    title: string;
    age: number;
    id: number;
    overview: string;
    youtubeUrl: string;
}) => {
    const { duration, releasDate, title, age, id, overview, youtubeUrl } = props
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex space-x-3 mt-5">
                <Button
                    onClick={() => setOpen(true)}
                    className="text-lg font-medium "
                >
                    <PlayCircle className=" mr-2 w-6 h-6" /> Play
                </Button>
                <Button
                    onClick={() => setOpen(true)}
                    className="text-lg font-medium bg-white/50 hover:bg-white/40 text-white">
                    <InfoIcon className="mr-2 w-6 h-6" /> Learn More
                </Button>
            </div>

            <PlayVideoModel
                youtubeUrl={youtubeUrl}
                title={title}
                overview={overview}
                age={age}
                duration={duration}
                release={releasDate}
                state={open}
                changeState={setOpen}
                key={id}
            />
        </>
    );
}

/* 
       youtubeUrl={youtubeUrl}
                title={title}
                state={open}
                overview={overview}
                age={age}
                duration={time}
                release={year}
                changeState={setOpen}
 */

export default MovieButtons;