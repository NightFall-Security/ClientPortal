import GlobalPageWrapper from "../base/GlobalPageWrapper"

/**
 * Handling auth pages.
 * @param param0 
 * @returns 
 */
const AuthPageHandler:React.FC<{children?:React.ReactNode}> = ({children}) => {
    return(
        <GlobalPageWrapper>
            <section className="w-full h-[100vh] flex items-center justify-between gap-6 !p-4">
                <div className="h-full flex items-center justify-center w-full">
                    {children}
                </div>
            </section>
        </GlobalPageWrapper>
    )
}

export default AuthPageHandler;