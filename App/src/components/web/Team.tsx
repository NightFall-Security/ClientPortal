import Spider from "@/assets/spider.webp"
import { ArrowRight } from "lucide-react";
import { CenteredSection } from "../base/Wrappers";

/**
 * About team
 * @returns 
 */
const Team:React.FC = () => {
    return(
        <CenteredSection id="COMPANY">
            <div className="w-full h-fit gap-10 flex items-center justify-center !py-4">
                <div className="w-[520px] h-[300px] rounded-xl overflow-hidden relative">
                    <img src={Spider} className="object-cover w-full h-full"/>
                    <span className="w-full h-full absolute top-0 left-0 bg-[var(--bg-primary)]/10 z-[999]"></span>
                </div>
                <div className="w-full h-[300px] flex flex-col justify-between !max-w-[550px] !py-1">
                    <span className="!py-1 !px-3 rounded-xl text-sm w-fit border-2 border-[var(--border-base)]/30 text-[var(--text)]/75 font-medium">About us</span>
                    <h2 className="c-h2 text-[var(--text)]">Who's behind NigthFall ?</h2>
                    <p className="text-sm text-[var(--text)]/75 font-medium">Founded in 2021 by Arsium as EagleMonitorRat, NightFall is dedicated to provide a high quality offensive tool for cybesecurity specialists. We are constantly building new features & making research to provide the best penetration testing tool available.</p>
                    <div className="w-fit h-fit !pt-8">
                        <a href="https://github.com/NightFall-Security" title="nigthfall" target="_blank">
                            <button className="c-button c-button__scale border-2 border-[var(--border)] text-[var(--bg-white)] flex gap-2 items-center bg-[var(--bg-secondary)]">
                                <p className="text-[var(--text)]">Follow us on github</p>
                                <ArrowRight height={16} width={16} className="stroke-[var(--stroke-icon)]" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </CenteredSection>
    )
}

export default Team;