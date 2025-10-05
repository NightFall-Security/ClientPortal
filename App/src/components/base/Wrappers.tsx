interface IBaseWrapperProps {
    children?:React.ReactNode 
}

interface ICenterSection extends IBaseWrapperProps, React.HTMLAttributes<HTMLDivElement> {

}

export const CenteredSection:React.FC<ICenterSection> = (props) => {
    const {children, ...rest} = props;

    return(
        <section className="w-full h-fit flex items-center justify-center flex-col gap-8 !py-25" {...rest}>
            {children}
        </section>
    )
}