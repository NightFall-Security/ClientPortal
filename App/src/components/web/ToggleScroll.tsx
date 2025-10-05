import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Scroll to top button
 * @returns 
 */
export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => setVisible(window.scrollY > 300);

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    /**
     * Go to top using smooth transition
     * @returns 
     */
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        visible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-[var(--bg-color)] text-[var(--text)] rounded-full shadow-lg !p-3 cursor-pointer hover:transform hover:scale-105 ease-in-out"
                aria-label="Scroll to top"
            >
                <ArrowUp height={18} width={18} stroke="white" />
            </button>
        )
    );
}
