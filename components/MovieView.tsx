import prisma from '../utils/db'
import MovieButtons from './MovieButtons'


async function getMovie() {
    const movie = await prisma.movie.findFirst({
        select: {
            title: true,
            overview: true,
            id: true,
            imageString: true,
            release: true,
            age: true,
            duration: true,
            videoSource: true,
            youtubeString: true,
        }
    })

    return movie
}

const validateMovie = (body: unknown) => {
    if (body == null) {
        throw new Error('Invalid movie data')
    }
    if (typeof body !== 'object' || body === null) {
        throw new Error('Invalid response ')
    }
    if (!('title' in body)) {
        throw new Error('Title is required')
    }
    if (typeof body.title !== 'string') {
        throw new Error('Invalid type of title')
    }
    if (!('overview' in body)) {
        throw new Error('Overview is required')
    }
    if (typeof body.overview !== 'string') {
        throw new Error('Invalid type of overview')
    }
    if (!('id' in body)) {
        throw new Error('Id is required')
    }
    if (typeof body.id !== 'number') {
        throw new Error('Invalid type of id')
    }
    if (!('imageString' in body)) {
        throw new Error('ImageString is required')
    }
    if (typeof body.imageString !== 'string') {
        throw new Error('Invalid type of imageString')
    }
    if (!('release' in body)) {
        throw new Error('Release is required')
    }
    if (typeof body.release !== 'number') {
        throw new Error('Invalid type of release')
    }
    if (!('age' in body)) {
        throw new Error('Age is required')
    }
    if (typeof body.age !== 'number') {
        throw new Error('Invalid type of age')
    }
    if (!('duration' in body)) {
        throw new Error('Duration is required')
    }
    if (typeof body.duration !== 'number') {
        throw new Error('Invalid type of duration')
    }
    if (!('videoSource' in body)) {
        throw new Error('VideoSource is required')
    }
    if (typeof body.videoSource !== 'string') {
        throw new Error('Invalid type of videoSource')
    }
    const { title, overview, id, imageString, release, age, duration, videoSource } = body

    return { title, overview, id, imageString, release, age, duration, videoSource }

}


const MovieView = async () => {
    const res = await getMovie()
    const validatedRes = validateMovie(res)

    return (
        <>
            <div
                className='h-[55vh] lg:h-[60vh] w-full flex justify-start items-center'
            >
                <video
                    poster={validatedRes?.imageString}
                    autoPlay
                    muted
                    loop
                    src={validatedRes?.videoSource}
                    className="w-full h-[70vh] object-cover top-0 left-0 absolute -z-10
                    brightness-[60%]"
                >
                </video>

                <div
                    className="absolute w-[90%]
                    lg:w-[40%] mx-auto">

                    <h1
                        className="text-3xl lg:text-4xl font-bold text-white"
                    >
                        {validatedRes?.title}
                    </h1>

                    <p
                        className="text-white text-lg mt-5 line-clamp-3"
                    >
                        {validatedRes?.overview}
                    </p>
                    <MovieButtons
                        duration={validatedRes?.duration}
                        releasDate={validatedRes?.release}
                        title={validatedRes?.title}
                        age={validatedRes?.age}
                        id={validatedRes?.id}
                        overview={validatedRes?.overview}
                        youtubeUrl={validatedRes?.videoSource}
                        key={validatedRes?.id}
                    />
                </div>
            </div>
        </>
    )
}

export default MovieView
