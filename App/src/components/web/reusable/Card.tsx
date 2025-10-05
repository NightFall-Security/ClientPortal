import type { ISingleCardProps } from "@/interfaces/IComponents";

/**
 * Single card.
 * @returns 
 */
const SingleCard:React.FC<ISingleCardProps> = (props) => {
    return(
        <div className="shadow-sm overflow-hidden relative rounded-xl bg-[var(--bg-secondary)] !max-w-[480px] !px-8 !py-12 border-2 border-gray-400/10 hover:border-[var(--bg-color)] flex flex-col gap-6 w-full h-full cursor-pointer hover:scale-102 hover:transition-all hover:duration-300 hover:ease-in-out">
            <div className="w-full flex justify-start">
                <span className={`w-fit h-fit !p-3 ${props.nonIcon == true ? "bg-black" : "bg-[var(--bg-primary)]"} rounded-xl flex items-center justify-center`}>
                    {props.iconSVG}
                </span>
            </div>
            <div className="w-full flex flex-col gap-2">
                <h4 className="c-h4 text-[var(--text)] w-full">{props.title}</h4>
                <p className="text-sm w-full text-[var(--text)]/55">{props.content}</p>
            </div>
            {props.soon && (
                <div className="absolute top-0 left-0 w-full h-full z-90 bg-[var(--bg-primary)]/50 flex items-center justify-center">
                    <p className="text-sm font-semibold text-[var(--text)]">Soon...</p>
                </div>
            )}
        </div>
    )
}

export default SingleCard;