import { useEffect, useState } from "react";
import "./style.scss"

interface ILoadingCircleProps {
    isFinite?:boolean
}

/**
 * Loading circle animation.
 * @param param0 
 * @returns 
 */
const LoadingCircle:React.FC<ILoadingCircleProps> = ({isFinite = true}) =>{
    const [stop, setStop] = useState<boolean>(false);

    useEffect(() => {
        if(!isFinite){
            setTimeout(() => {
                setStop(true);
            },1500)
        }
    })

    return (
        <>{!stop && <div className="animation-container"><div className="loader"></div></div>}</>
    )
}

export default LoadingCircle;