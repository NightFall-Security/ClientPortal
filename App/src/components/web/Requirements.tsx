//@components
import FadeContent from "../ui/reactbits/FadeContent";
import { CenteredSection } from "../base/Wrappers";

//interfaces
import type { ISingleCardProps } from "@/interfaces/IComponents";
import SingleCard from "./reusable/Card";

//assets
import Windows from "@/assets/windows-white.svg"
import MacOs from "@/assets/apple-white.svg"
import Linux from "@/assets/linux-white.svg"

/**
 * Requirements banner.
 * @returns 
 */
const Requirements:React.FC = () => {

    /**
     * List of cards elements.
     */
    const cards:Array<ISingleCardProps> = [
        {
            "iconSVG":<img src={MacOs} height={22} width={22} className="stroke-[var(--stroke-icon)]" />,
            "title":"MacOs",
            "content":"macOS Catalina or later (x64 or ARM64)",
            "soon":true
        },
        {
            "iconSVG":<img src={Windows} height={22} width={22} className="stroke-[var(--stroke-icon)]" />,
            "title":"Windows",
            "content":"Currently supported x64 OS required (Windows 10 or later, Windows 11 or higher recommended).",
        },
        {
            "iconSVG":<img src={Linux} height={22} width={22} className="stroke-[var(--stroke-icon)]" />,
            "title":"Linux",
            "content":"x64 (x86_64) CentOS 7 or later, Ubuntu 16.04 or later. Other equivalent distributions may work but not guaranteed.",
            "soon":true
        },
    ]

    return(
        <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
            <CenteredSection id="REQUIREMENTS">
                <div className="text-center gap-2 flex flex-col" >
                    <h1 className="c-h1">NightFall server system requirements</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {cards.map((item: ISingleCardProps, index: number) => (
                        <div key={index} className="w-[400px] !max-w-[400px]">
                            <SingleCard 
                                title={item.title}
                                content={item.content}
                                iconSVG={item.iconSVG}
                                soon={item.soon}
                                nonIcon={true}
                            />
                        </div>
                    ))}
                </div>
            </CenteredSection>
        </FadeContent>
    )
}

export default Requirements;