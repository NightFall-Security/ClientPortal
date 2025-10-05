import { Bug, Code, Codesandbox, Cog, ShieldHalf, UserRoundSearch } from "lucide-react"
import SingleCard from "./reusable/Card"
import FadeContent from "../ui/reactbits/FadeContent"
import type { ISingleCardProps } from "@/interfaces/IComponents"

/**
 * Main sub section => contains cards.
 * @returns 
 */
const WebCardSection:React.FC = () => {

    /**
     * List of cards elements.
     */
    const cards:Array<ISingleCardProps> = [
        {
            iconSVG:<Cog height={22} width={22} className="stroke-[var(--stroke-icon)]" />,
            "title":"Command an Control",
            "content":"Establish covert communication channels between the target and the operator. Use flexible listeners and encrypted traffic to maintain persistence and evade detection."
        },
        {
            iconSVG:<Codesandbox height={22} width={22} className="stroke-[var(--stroke-icon)]" />,
            "title":"Beacons",
            "content":"Deploy lightweight agents on target systems to maintain access, execute commands, and communicate through multiple channels, even under restrictive network conditions."
        },
        {
            iconSVG:<Bug height={22} width={22} className="stroke-[var(--stroke-icon)]" />,
            "title":"Post-Exploitation",
            "content":"Execute privilege escalation, credential harvesting, lateral movement, and data exfiltration using built-in tools tailored for stealth and control over compromised networks."
        },
        {
            iconSVG:<UserRoundSearch height={22} width={22} className="stroke-[var(--stroke-icon)]" />,
            "title":"Social Engineering",
            "content":"Use spear-phishing campaigns and maldoc generation features to deliver payloads with high success rates. Simulate real-world threats to test user awareness and security controls."
        },
        {
            iconSVG:<ShieldHalf height={22} width={22} className="stroke-[var(--stroke-icon)]" />,
            "title":"Team Collaboration",
            "content":"Enable multiple operators to work together within the same campaign. Share sessions, actions, and intelligence to ensure unified and effective offensive operations."
        },
        {
            iconSVG:<Code height={22} width={22} className="stroke-[var(--stroke-icon)]" />,
            "title":"Command Automation",
            "content":"Use Aggressor Script to define repeatable playbooks, respond to events, and extend the core functionality of the tool for tailored engagements."
        },
    ]

    return(
        <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0} className="w-full h-fit flex items-center justify-center">
            <section className="w-full max-w-[1400px] h-fit min-h-[450px] bg-transparent flex flex-col justify-end overflow-visible relative !pb-10 !-mt-38 !px-8">
                <div className="w-full h-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {cards.map((item:ISingleCardProps, index:number) => (
                        <SingleCard title={item.title} content={item.content} iconSVG={item.iconSVG} key={index} />
                    ))}
                </div>
            </section>
        </FadeContent>
    )
}

export default WebCardSection;