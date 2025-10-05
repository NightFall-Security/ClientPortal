import { Outlet } from "react-router-dom";
import { Suspense } from "react";

//@components
import { SidebarProvider, SidebarTrigger } from "@/components/ui/Sidebar"
import GlobalPageWrapper from "@/components/base/GlobalPageWrapper";
import AppNav from "@/components/app/AppNav";
import LoadingCircle from "@/components/app/loading/LoadingCircle";

/**
 * Handling layout for app pages.
 * @returns 
 */
const AppLayout:React.FC = () => {
    return(
        <Suspense fallback={<div className="absolute top-0 left-0 bg-[var(--bg-primary)] w-full h-full min-h-[100vh] flex justify-center items-center"><LoadingCircle /></div>}>
            <GlobalPageWrapper>
                <SidebarProvider>
                    <AppNav />
                    <OutletWrapper>
                        <SidebarTrigger className="text-[var(--text)] font-medium w-fit h-fit cursor-pointer" />
                        <Outlet />
                    </OutletWrapper>
                </SidebarProvider>
            </GlobalPageWrapper>
        </Suspense>
    )
}

//main wrapper for pages => outlet.
const OutletWrapper:React.FC<{children:React.ReactNode}> = ({children}) => {
    return(
        <div className="w-full h-full !p-6 bg-transparent">
            {children}
        </div>
    )
}

export default AppLayout;