import { ArrowRight } from "lucide-react";

import DecryptedText from "@/components/ui/reactbits/DecryptedText";
import FadeContent from "@/components/ui/reactbits/FadeContent";
import Squares from "@/components/ui/reactbits/Squares";

/**
 * Main parent section.
 * @returns 
 */
const MainWebSection:React.FC = () => {
    return(
        <section className="relative w-full h-[700px] rounded-3xl border-2 border-[var(--bg-secondary-light)] bg-[var(--bg-secondary)] shadow-md flex items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full flex flex-col gap-3 items-center justify-center !py-10">
                <h1 className="c-h1 text-[var(--text)] font-black !text-[48px] sm:text-center text-center">Infiltrate, exploit and persist with NightFall</h1>
                <DecryptedText 
                    text="We provides you high quality offensive tools for your pentesting journey." 
                    className="text-[18px] !text-[var(--text)]/75 font-light revealed text-center sm:text-center" 
                    speed={100}
                    maxIterations={15}
                    characters="ABCD1234!?"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                    animateOn="view"
                />
                <div className="w-fit flex gap-5 !pt-8">
                    <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
                        <a href="/login" title="my account">
                            <button className="c-button c-button__colored c-button__scale flex gap-2 items-center animate-fade-in">
                                <p className="text-md font-medium">Get started</p>
                                <ArrowRight height={16} width={16} stroke="white" />
                            </button>
                        </a>
                    </FadeContent>
                    <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
                        <a href="#SEEIT" title="card-link">
                            <button className="c-button c-button__scale flex gap-2 items-center bg-[var(--bg-secondary)] h-[45px]">
                                <p className="text-md font-medium text-[var(--text)]">Discover NigthFall</p>
                                <ArrowRight height={16} width={16} className="stroke-[var(--stroke-icon)]" />
                            </button>
                        </a>
                    </FadeContent>
                </div>
            </div>
            <Squares 
                speed={0.4} 
                squareSize={35}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor='#808080'
                hoverFillColor='#222'
            />
        </section>
    )
}

export default MainWebSection;