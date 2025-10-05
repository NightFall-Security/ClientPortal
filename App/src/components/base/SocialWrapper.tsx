import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/Tooltip";

/**
 * Base wrapper around social icons.
 * @param props 
 * @returns 
 */
const SocialWrapper:React.FC<{children?:React.ReactNode, content:string}> = (props) => {
    const {children, content} = props;

    return(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <span className="rounded-full w-8 h-8 flex items-center justify-center !p-2 bg-[var(--bg-gray)]/70 cursor-pointer hover:transform hover:scale-105 ease-in-out hover:duration-150">
                        {children}
                    </span>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default SocialWrapper;