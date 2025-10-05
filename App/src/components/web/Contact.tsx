import { ArrowRight } from "lucide-react";
import { CenteredSection } from "../base/Wrappers"

/**
 * Contact section.
 * @returns 
 */
const Contact:React.FC = () => {
    return(
        <CenteredSection>
            <div className="w-full h-full !p-4 flex items-center justify-center">
                <div className="w-full max-w-[800px] h-full rounded-xl border-2 border-white/25 !p-6 bg-[var(--bg-secondary)] flex flex-col gap-4 items-center justify-center">
                    <h3 className="c-h3">Still have questions ? </h3>
                    <p className="text-[var(--text)]/75 text-sm font-medium">Do you need advice in selecting the right plan or managing your account?</p>
                    <div className="flex gap-5 !pt-4">
                        <button className="c-button c-button__colored c-button__scale flex gap-2 items-center animate-fade-in">
                            <p>Contact Us</p>
                            <ArrowRight height={16} width={16} stroke="white" />
                        </button>
                        <a href="#PRICING" target="_top" title="compare plans">
                            <button className="c-button bg-[var(--bg-white)] c-button__scale flex gap-2 items-center animate-fade-in">
                                <p>Compare plans</p>
                                <ArrowRight height={16} width={16} stroke="black" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </CenteredSection>
    )
}

export default Contact;