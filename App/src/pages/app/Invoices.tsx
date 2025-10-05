import { useNavigate } from "react-router-dom";

/**
 * handling invoices component
 * @returns 
 */
const Invoices:React.FC = () => {
    const navigate = useNavigate();

    return(
        <article>
            <button onClick={() => navigate("/login")} className="text-[var(--text)]">test</button>
        </article>
    )
}

export default Invoices;