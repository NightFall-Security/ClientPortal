import { CenteredSection } from "../base/Wrappers";

/**
 * Demo => assets of presentation for the product.
 * @returns 
 */
const SeeIt:React.FC = () => {
    return(
        <CenteredSection id="SEEIT">
            <div className="text-center" >
                <h1 className="c-h1">See it in action</h1>
                <p className="text-sm font-medium text-[var(--text)]/75">Explore Nightfall's intuitive interface and powerful capabilities.</p>
            </div>
        </CenteredSection>
    )
}

export default SeeIt;