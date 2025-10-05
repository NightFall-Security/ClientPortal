import { useNavigate } from "react-router-dom";

/**
 * handling Account component
 * @returns 
 */
const Account:React.FC = () => {
    const navigate = useNavigate();

    return(
        <article>
            <button onClick={() => navigate("/login")} className="text-[var(--text)]">test</button>
        </article>
    )
}

export default Account;