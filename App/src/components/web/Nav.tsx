import Spider from "@/assets/vectorized-spider.webp"
import FadeContent from "../ui/reactbits/FadeContent";

interface INavItem {
    content:string 
    link:string
}

/**
 * Website nav.
 * @returns 
 */
const Nav:React.FC = () => {

    //naigation items.
    const navItems:Array<INavItem> = [
        {
            "content":"Products",
            "link":"#PRICING"
        },
        {
            "content":"Pricing",
            "link":"#PRICING"
        },
        {
            "content":"Company",
            "link":"#COMPANY"
        }
    ]

    return (
        <nav className="w-full h-fit flex fixed items-center justify-center !p-10 z-90 bg-transparent">
            <FadeContent className="w-full flex items-center justify-center !backdrop-blur-xl" blur={true} duration={500} easing="ease-out" initialOpacity={0}>
                <div className="w-full h-[70px] !backdrop-blur-sm test bg-[var(--bg-white)]/45 max-w-[80vw] shadow-md !p-2 rounded-2xl flex justify-between">
                    <div className="!w-[250px] h-full overflow-hidden flex items-center justify-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <img src={Spider} className="!w-10 !h-10" alt="nightfall-icon" title="main-logo" />
                        <h2 className="c-h4 !font-black !text-black">NightFall</h2>
                    </div>
                    <div className="w-full h-full flex items-center gap-2 justify-center">
                        {navItems.map((item:INavItem, index:number) => (
                            <div key={index} className="hover:bg-[var(--bg-gray)]/70 !px-5 !py-3 rounded-xl cursor-p transition-colors duration-300">
                                <a href={item.link} title={item.content} className="text-[16px] text-gray-900 font-semibold">{item.content}</a>
                            </div>
                        ))}
                    </div>
                    <a className="w-[140px] !min-w-[140px] !h-fit] flex gap-2 items-center justify-center !rounded-xl" href="/login" title="my account">
                        <button className="c-button !min-w-[140px]  bg-[var(--bg-color-darker)] text-white h-full !font-semibold w-fit !py-3 !rounded-xl transition-colors duration-300 hover:bg-[var(--bg-color)]">My Account</button>
                    </a>
                </div>
            </FadeContent>
        </nav>
    )
}


export default Nav;