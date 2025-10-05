import { DotIcon } from "lucide-react";
import { CenteredSection } from "../base/Wrappers";
import FadeContent from "../ui/reactbits/FadeContent";
import GradientText from "../ui/reactbits/GradientText";
import { useNavigate } from "react-router-dom";

/**
 * Pricing section.
 * @returns 
 */
const Pricing:React.FC = () => {
    const navigate = useNavigate();

    /**
     * Contains base text for base features.
     */
    const base_features:Array<string> = [
        "TLS 1.3 for each communication channel",
        "Embedded local shellcodes",
        "Settings system",
        "PE modifications & custom builder",
        "Persistence",
        "Remote shell",
        "Full process management",
        "Remote file manager",
        "System tricker"
    ];

    return(
        <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0} className="w-full min-h-[1050px] !max-h-[1500px]">
            <CenteredSection id="PRICING" className="!max-h-unset !py-8">
                <div className="text-center !pt-8 !py-18" >
                    <h1 className="c-h1">NightFall Pricing</h1>
                    <p className="text-sm font-medium text-[var(--text)]/75">All the features you need. No hidden fees, no surprises.</p>
                </div>
                <div className="w-full flex items-start gap-8 justify-center !py-4 h-[500px]">
                    <div className="flex flex-col justify-between border-2 h-fit border-[var(--border-base)] !p-9 rounded-xl w-[500px] min-h-[550px] cursor-pointer">
                        <div className="w-full h-full flex-col gap-8">
                            <div className="text-center flex flex-col gap-2">
                                <h4 className="c-h4">NightFall Free</h4>
                                <p className="text-sm font-medium text-[var(--text)]/75">Explore our solution, providing you with essential tools and features completely free of charge.</p>
                            </div>
                            <p className="text-center w-full !pt-4"><span className="text-[34px] font-bold text-[var(--text)]">0€</span><span className="text-[var(--text)]/75 font-medium !pl-1 text-sm">/year</span></p>
                        </div>
                        <div className="w-full h-fit flex flex-col gap-2 !pb-8 !pt-10">
                            {base_features.map((item:string, index:number) => (
                                <div className="w-full flex items-center gap-2" key={index}>
                                    <DotIcon fill="white" className="stroke-[var(--stroke-icon)]" />
                                    <p className="text-sm font-medium text-[var(--text)]">{item}</p>
                                </div>
                            ))}
                        </div>
                        <button className="c-button c-button__colored c-button__scale !w-full !mt-6 !hover:bg-[var(--bg-color-darker)]" onClick={() => navigate("/login")}>Get started</button>
                    </div>
                    <div className="relative flex flex-col justify-between border-2 h-fit border-[var(--bg-color)] !p-9 rounded-xl w-[500px] min-h-[550px] cursor-pointer">
                        <div className="w-full h-full flex-col gap-8">
                            <div className="text-center flex flex-col gap-2">
                                <h4 className="c-h4 flex gap-1 text-center justify-center w-full">
                                    NightFall 
                                    <GradientText
                                        colors={["#A066FF", "#B980FF", "#9340FF", "#CFA6FF", "#A066FF"]}
                                        animationSpeed={5}
                                        showBorder={false}
                                        >
                                        PRO
                                    </GradientText>
                                </h4>
                                <p className="text-sm font-medium text-[var(--text)]/75">Unleash all NightFall potential. Maximum control, advanced features and expert-level performance.</p>
                            </div>
                            <div className="absolute h-fit left-0 -top-7 w-full flex items-center justify-center z-50">
                                <span className="w-fit h-full bg-[var(--bg-color)] !px-6 !py-3 rounded-xl">
                                    <p className="text-sm font-semibold">RECOMMENDED</p>
                                </span>
                            </div>
                            <p className="text-center w-full !pt-4"><span className="text-[34px] font-bold text-[var(--text)]">899,99€</span><span className="text-[var(--text)]/75 text-sm font-medium !pl-1">/year per license</span></p>
                        </div>
                        <div className="w-full h-fit flex flex-col gap-2 !pb-8 !pt-10">
                            {[...base_features, "Remote syscalls [Client, Server]", "Advanced persistence", "Socks 5 & proxies", "Inner assembly editor", "And a lot more"].map((item:string, index:number) => (
                                <div className="w-full flex items-center gap-2" key={index}>
                                    <DotIcon fill="white" className="stroke-[var(--stroke-icon)]" />
                                    <p className="text-sm font-medium text-[var(--text)]">{item}</p>
                                </div>
                            ))}
                        </div>
                        <button className="c-button c-button__colored c-button__scale !w-full !mt-6 !hover:bg-[var(--bg-color-darker)]" onClick={() => navigate("/login")}>Get started</button>
                    </div>
                    <div className="flex flex-col justify-between border-2 h-fit border-[var(--border-base)] !p-9 rounded-xl w-[500px] cursor-pointer">
                        <div className="w-full h-full flex-col gap-8">
                            <div className="text-center flex flex-col gap-2">
                                <h4 className="c-h4 flex gap-1 text-center justify-center w-full">
                                    NightFall 
                                    <GradientText
                                        colors={["#A066FF", "#B980FF", "#9340FF", "#CFA6FF", "#A066FF"]}
                                        animationSpeed={5}
                                        showBorder={false}
                                        >
                                        Enterprise
                                    </GradientText>
                                </h4>
                                <p className="text-sm font-medium text-[var(--text)]/75">Unleash all NightFall potential. Maximum control, advanced features and expert-level performance for enterprises.</p>
                            </div>
                            <p className="text-center w-full !h-[67px] !pt-6 flex items-center justify-center"><span className="text-[var(--text)]/75 text-sm font-medium !pl-1">Tailor made price</span></p>
                        </div>
                        <div className="w-full h-fit flex flex-col gap-2 !pb-8 !pt-4 justify-start">
                            {["All free & pro plans features", "On demand features", "For enterprises."].map((item:string, index:number) => (
                                <div className="w-full flex items-center gap-2" key={index}>
                                    <DotIcon fill="white" className="stroke-[var(--stroke-icon)]" />
                                    <p className="text-sm font-medium text-[var(--text)]">{item}</p>
                                </div>
                            ))}
                        </div>
                        <button className="c-button c-button__colored c-button__scale !w-full !mt-6 !hover:bg-[var(--bg-color-darker)]">Contact us</button>
                    </div>
                </div>
            </CenteredSection>
        </FadeContent>
    )
}

export default Pricing;