import { useNavigate } from "react-router-dom";

/**
 * handling Shop component
 * @returns 
 */
const Shop:React.FC = () => {
    const navigate = useNavigate();

    return(
        <article>
            <button onClick={() => navigate("/login")} className="text-[var(--text)]">test</button>
        </article>
    )
}

export default Shop;