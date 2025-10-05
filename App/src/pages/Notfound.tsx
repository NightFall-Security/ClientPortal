import GlobalPageWrapper from "@/components/base/GlobalPageWrapper"
import { useNavigate } from "react-router-dom";

/**
 * Not found page.
 * @returns 
 */
const Notfound:React.FC = () => {
    const navigate = useNavigate();

    return(
        <GlobalPageWrapper>
            <section className="w-full h-full flex justify-center flex-col gap-3 items-center min-h-[100vh]">
                <h2 className="c-h4 !font-black !text-[var(--text)]">NightFall</h2>
                <p className="text-sm text-[var(--text)]/50">This page was not found.</p>
                <button className="c-button c-button__colored c-button__scale !mt-4" onClick={() => navigate("/dashboard")}>Back home</button>
            </section>
        </GlobalPageWrapper>
    )
}

export default Notfound;