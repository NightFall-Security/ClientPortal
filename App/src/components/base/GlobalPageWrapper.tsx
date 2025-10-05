interface IGlobalPageWrapperProps extends React.HTMLAttributes<HTMLElement> {
    children?:React.ReactNode;
}

/**
 * Base wrapper component for app pages.
 * @param props 
 * @returns 
 */
const GlobalPageWrapper:React.FC<IGlobalPageWrapperProps> = (props) => {
    const {children, ...rest} = props;

    return(
        <main className="w-full h-fit relative min-w-[100vw] min-h-[100vh] bg-[var(--bg-primary)]" {...rest}>
            {children}
        </main>
    )
}

export default GlobalPageWrapper;