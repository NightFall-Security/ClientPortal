import LoadingSession from "@/components/app/loading/LoadingSession";
import { EAuthType } from "@/enum/EAuth";
import { useCheckSession } from "@/hooks/useAuth";
import { createContext, useContext, useEffect, useState } from "react"

interface IAuthContext {
    token:EAuthType
    isAuthResolved:boolean
}

const AuthContext = createContext<IAuthContext>({
    token: EAuthType.DISCONNECTED,
    isAuthResolved:false,
});

export const useAuth = () => useContext(AuthContext);

/**
 * Auth provider for authenticated user.
 * @param param
 */
export const AuthProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
    const [token, setToken] = useState<EAuthType>(EAuthType.DISCONNECTED);
    const [isAuthResolved, setIsAuthResolved] = useState(false);

    ///calling api.
    const {data, isLoading, isError, isFetching} = useCheckSession();

    useEffect(() => {
        if (data?.data != null)
            setToken(EAuthType.AUTHENTICATED)

        if(!isLoading)
            setIsAuthResolved(true);
        
    }, [data, isLoading]);

    if(isLoading || isFetching)
        return <LoadingSession />

    if(isError){
        if(!isLoading)
            setIsAuthResolved(true);
        
        return null;
    }

    if(!isAuthResolved || isLoading || isFetching)
        return <LoadingSession />

    return(
        <AuthContext.Provider value={{token, isAuthResolved}}>
            {children}
        </AuthContext.Provider>
    )
}