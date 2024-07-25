import MovieView from "@/components/MovieView";
import RecentlyAdded from "@/components/RecentlyAdded";


const HomePage = () => {

    return (
        <>
            <div
                className="p-5 lg:p-0"
            >
                <MovieView />
                <h1 className="text-3xl font-bold mt-10 ">
                    Recently Added
                </h1>
                <RecentlyAdded />
            </div>
        </>
    )
}

export default HomePage;