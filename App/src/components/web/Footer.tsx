import { Github } from "lucide-react";

/**
 * Web footer.
 * @returns 
 */
const Footer:React.FC = () => {
    return(
        <footer className="w-full h-full flex justify-between items-center !px-10 bg-[var(--bg-primary)] !pb-10">
            <h2 className="c-h4 !font-black !text-[var(--text)] w-[185px]">NightFall</h2>
            <div className="flex gap-3 items-center w-full justify-center">
                <p className="text-sm font-medium text-[var(--text)]/75">connect with the community on</p>
                <a title="github-link" target="_blank" href="https://github.com/NightFall-Security">
                    <Github height={18} width={18} className="stroke-[var(--stroke-icon)]"/>
                </a>
            </div>
            <p className="text-sm font-medium text-[var(--text)]/75 text-nowrap">© 2025 Copyright NightFall</p>
        </footer>
    )
}

export default Footer;