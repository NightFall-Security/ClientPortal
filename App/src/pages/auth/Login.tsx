import { useEffect, useRef, useState } from "react";
import { Input } from "@/classes/input";
import type { IAuth } from "@/interfaces/IPayloads";
import { useLogin } from "@/hooks/useAuth";

//@components
import AuthPageHandler from "@/components/auth/AuthPageHandler";
import Github from "@/components/auth/Github";
import BaseInputField from "@/components/base/BaseInputField";
import LoadingCircle from "@/components/app/loading/LoadingCircle";

/**
 * Base login page.
 * @returns 
 */
const Login:React.FC = () => {
    const [err, setError] = useState<string>("");

    const emailInput = useRef<HTMLInputElement | null>(null);
    const passwordInput = useRef<HTMLInputElement | null>(null);

    const {mutate, isPending, isSuccess, isError, error} = useLogin();

    /**
     * submit login data.
     * @param e 
     * @returns 
     */
    const submit = async(e:React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault();
        
        let password:(string | undefined) = passwordInput.current?.value;
        let email:(string | undefined) = emailInput.current?.value;

        if(typeof(password) != 'string' || typeof(email) != 'string'){
            setError("Fill each fields correctly.")
            return;
        }

        //check on password & username.
        if(Input.checkForMaliciousPayload(password, email)) {
            setError("Fill each fields correctly.")
            return;
        }

        //building payload.
        let payload:IAuth = {
            "email":Input.sanitize(email),
            "password":Input.sanitize(password)
        }

        mutate(payload);
    }

    useEffect(() => {
        if(isError)
            setError((error as Error).message);
    },[error, err])

    useEffect(() => {
        setError("");
    },[open])

     useEffect(() => {
        if(isSuccess)
            window.location.href = "/dashboard";
    },[isSuccess])

    return(
        <AuthPageHandler>
            <form onSubmit={submit} className="w-fit h-fit flex flex-col gap-8 min-w-[380px] max-w-[380px]">
                <header className="w-full flex flex-col gap-8 items-center justify-center">
                    <a href="/" title="home" target="_origin">
                        <h2 className="c-h2">NightFall.</h2>
                    </a>
                    <div className="w-full h-fit flex items-center justify-center flex-col gap-2">
                        <h4 className="c-h4">Login to your account.</h4>
                        <p className="text-sm text-[var(--text)]/75 font-medium text-center">Please enter your email address and password to access your NightFall account.</p>
                    </div>
                </header>
                <div className="w-full h-fit flex flex-col gap-6">
                    <BaseInputField fieldRef={emailInput} label={"Email address"} required type="email" placeholder="john.doe@gmail.com" />
                    <BaseInputField fieldRef={passwordInput} label={"Your password"} required type="password" placeholder="**********" />
                </div>
                <button className="c-button c-button__colored !w-full !h-[44px] flex items-center justify-center">
                    {isPending ? <LoadingCircle /> : "Sign in"}
                </button>
                <div className="flex w-full gap-2 items-center">
                    <span className="w-full h-[2px] bg-[var(--text)]/15 rounded-xl"></span>
                    <p className="text-sm w-fit font-medium text-[var(--text)]/55 min-w-30 text-center">Or signin with</p>
                    <span className="w-full h-[2px] bg-[var(--text)]/15 rounded-xl"></span>
                </div>
                <div className="w-full flex gap-4">
                    <Github />
                </div>
                <span className="text-sm font-medium text-[var(--text)]/55 text-center">Don't have an account ? <a title="login" href="/signup" className="pl-1 cursor-pointer underline text-[var(--bg-color)]">Create my account</a></span>
                <div className="h-8">
                    {err.length > 0 && <p className="text-sm font-medium text-red-400 text-center">{err}</p>}
                </div>
            </form>
        </AuthPageHandler>
    )
}

export default Login;