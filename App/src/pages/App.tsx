//@deps
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

//@pages
import Web from "./Web";
import Notfound from "./Notfound";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { EAuthType } from "@/enum/EAuth";

const AppLayout = lazy(() => import("@/pages/app/AppLayout"));
const Licenses = lazy(() => import("./app/Licenses"));
const Invoices = lazy(() => import("@/pages/app/Invoices"));
const Shop = lazy(() => import("@/pages/app/Shop"));
const Account = lazy(() => import("@/pages/app/Account"));

/**
 * Router handler.
 * @returns 
 */
const App:React.FC = () => {
    const {token} = useAuth();

    return(
        <Routes>
            <Route path="/" element={<Web />} />
            <Route path="/login" element={token != EAuthType.AUTHENTICATED ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="/signup" element={token != EAuthType.AUTHENTICATED ? <Signup /> : <Navigate to="/dashboard" />} />
            <Route path="*" element={<Notfound />} />

            <Route path="/dashboard" element={token == EAuthType.AUTHENTICATED ? <AppLayout /> : <Navigate to="/login" />}>
                <Route index element={<Licenses />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="shop" element={<Shop />} />
                <Route path="account" element={<Account />} />
            </Route>
        </Routes>
    )
}

export default App;