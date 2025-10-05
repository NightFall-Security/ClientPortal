import { GithubIcon } from "lucide-react";

/**
 * Github auth cta
 * @returns 
 */
const Github:React.FC = () =>{
    return(
        <span className="w-full h-fit flex gap-2 items-center justify-center border-2 border-[var(--border-base)] rounded-md !py-2 cursor-pointer hover:border-[var(--bg-color)]">
           <GithubIcon height={22} width={21} className="stroke-[var(--stroke-icon)]" />
           <p className="text-[16px] font-medium text-[var(--text)]/75">Github</p>
        </span>
    )
}

export default Github;