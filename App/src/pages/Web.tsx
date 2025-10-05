//@components
import GlobalPageWrapper from "@/components/base/GlobalPageWrapper";
import Nav from "@/components/web/Nav";
import MainWebSection from "@/components/web/MainSection";
import WebCardSection from "@/components/web/CardSection";
import Team from "@/components/web/Team";
import Pricing from "@/components/web/Pricing";
import ScrollToTopButton from "@/components/web/ToggleScroll";
import Contact from "@/components/web/Contact";
import Footer from "@/components/web/Footer";
import FAQ from "@/components/web/FAQ";
import Requirements from "@/components/web/Requirements";
import SeeIt from "@/components/web/SeetIt";

/**
 * Web view => not app.
 * @returns 
 */
const Web:React.FC = () => {
    return(
        <GlobalPageWrapper>
            <Nav />
            <article className="w-full h-fit flex flex-col gap-4 !px-6 !py-5 min-w-[100vw] min-h-[100vh] bg-[var(--bg-primary)]">
                <MainWebSection />
                <WebCardSection />
                <SeeIt />
                <Pricing />
                <Requirements />
                <Team />
                <FAQ />
                <ScrollToTopButton />
                <Contact />
            </article>
            <Footer />
        </GlobalPageWrapper>
    )
}

export default Web;