import LoadingCircle from "./LoadingCircle";

/**
 * Loading session
 * @returns 
 */
const LoadingSession:React.FC = () => {
    return(
        <div className="w-full h-full min-h-[100vh] absolute top-0 left-0 z-90 bg-[var(--bg-primary)]">
            <div className="w-full min-w-[100vw] h-full relative">
                <div className="shadow-xs shadow-white/5 absolute bottom-4 right-4 !px-6 w-fit rounded-md border-2 border-white/20 flex items-center justify-center gap-8">
                    <span className="opacity-50">
                        <LoadingCircle />
                    </span>
                    <p className="w-full text-center text-[var(--bg-white)] text-sm font-medium opacity-50 whitespace-nowrap">Checking session...</p>
                </div>
            </div>
        </div>
    )
}

export default LoadingSession;