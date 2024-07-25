
import { Dialog, DialogHeader, DialogDescription, DialogContent, DialogTitle } from "@/components/ui/dialog";

const PlayVideoModel = (props: {
    youtubeUrl: string;
    title: string;
    state: boolean;
    overview: string;
    age: number;
    duration: number;
    release: number;
    changeState: (arg: boolean) => void
}) => {
    const { youtubeUrl, age, duration, release, title, state, overview, changeState } = props

    return (
        <>
            <Dialog open={state} onOpenChange={(state) => changeState(state)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            {title}
                        </DialogTitle>
                        <DialogDescription className="line-clamp-3">
                            {overview}
                        </DialogDescription>
                        <div className="flex gap-x-2 items-center">
                            <p>{release}</p>
                            <p className="border py-0.5 px-1 border-gray-500 rounded-md">{age}+</p>
                            <p>{duration} min</p>
                        </div>
                    </DialogHeader>
                    <iframe src={youtubeUrl} height={250} className="w-full rounded-md"></iframe>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default PlayVideoModel