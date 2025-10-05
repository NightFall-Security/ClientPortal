import { ArrowRight, Minus, Plus } from "lucide-react";
import { CenteredSection } from "../base/Wrappers"
import { useState } from "react";

interface IToggleQuestion {
    title:string 
    content:string
}

/**
 * FAQ.
 * @returns 
 */
const FAQ:React.FC = () => {

    //items list.
    const items:Array<IToggleQuestion> = [
        {
            "title":"Can I get NightFall Pro with a monthly subscription?",
            "content":"We offer solely yearly subscriptions."
        },
        {
            "title":"Can I purchase IDA with a perpetual license?",
            "content":"Yes !, since we're on a launching phase we're open for perpetual access for our first users. Consider contacting our team to have more informations about it."
        }
    ]

    const len:number = items.length;

    return(
        <CenteredSection>
            <span className="!py-1 !px-3 rounded-xl text-sm w-fit border-2 border-[var(--bg-white)]/30 text-[var(--text)]/75 font-medium">FAQ's</span>
            <div className="w-full h-full flex text-center flex-col gap-2">
                <h2 className="c-h2">Frequently asked questions</h2>
                <p className="text-sm text-[var(--text)]/75">You’ve got questions. We’ve got answers!</p>
            </div>
            <div className="w-full h-fit !p-5 rounded-xl border-2 border-[var(--border-base)] max-w-[800px]">
                {items.map((item:IToggleQuestion, index:number) => (
                    <ToggleAction title={item.title} key={index} content={item.content} len={len} index={index} />
                ))}
            </div>
            <button className="c-button c-button__colored c-button__scale flex gap-2 items-center animate-fade-in">
                <p>More questions?</p>
                <ArrowRight height={16} width={16} stroke="white" />
            </button>
        </CenteredSection>
    )
}

interface IToggleQuestionProps extends IToggleQuestion {
    index:number
    len:number //items tab len.
}

/**
 * Toggle interaction.
 * @param props 
 * @returns 
 */
const ToggleAction:React.FC<IToggleQuestionProps> = (props) => {
    const [display, setDisplay] = useState<boolean>(false);

    return(
        <div className={`w-full h-fit !text-start flex flex-col gap-5 !py-5 ease-in-out ${props.index == (props.len - 1) ? "" : "border-b border-white/25"}`}>
            <div className="w-full h-fit flex justify-between">
                <h4 className="text-[var(--text)] font-semibold text-md">{props.title}</h4>
                <span onClick={() => setDisplay(!display)} className="cursor-pointer">
                    {!display ? <Plus height={16} width={16} className="stroke-[var(--stroke-icon)]" /> : <Minus height={16} width={16} className="stroke-[var(--stroke-icon)]" />}
                </span>
            </div>
            {display && (
                <p className="text-sm font-medium text-[var(--text)]/75 !text-start">{props.content}</p>
            )}
        </div>
    )
}

export default FAQ;