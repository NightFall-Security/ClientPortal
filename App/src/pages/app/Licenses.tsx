import { useNavigate } from "react-router-dom";

/**
 * handling licenses component
 * @returns 
 */
const Licenses:React.FC = () => {
    const navigate = useNavigate();

    return(
        <article>
            <button onClick={() => navigate("/login")} className="text-[var(--text)]">test</button>
        </article>
    )
}

export default Licenses;