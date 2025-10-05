import { Paperclip, ShoppingCart, KeyRound, ChevronUp, User, LogOutIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem} from "@/components/ui/Sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLogout } from "@/hooks/useAuth";
import Theme from "./Theme";

/**
 * Main nav
 * @returns 
 */
const AppNav:React.FC = () => {
    const navigate = useNavigate();
    const {mutate} = useLogout();

    const items = [
        {
            title: "Licenses",
            url: "/dashboard",
            icon: KeyRound,
        },
        {
            title: "Invoices",
            url: "/dashboard/invoices",
            icon: Paperclip,
        },
        {
            title: "Shop",
            url: "/dashboard/shop",
            icon: ShoppingCart,
        },
    ]

    const dropdown = [
        {
            title: "Account",
            url: "/dashboard/account",
            icon: User,
        },
    ]

    return(
        <Sidebar>
            <SidebarContent className="bg-[var(--bg-primary)] !p-6">
                <SidebarGroup className="gap-6">
                    <SidebarGroupLabel className="c-h4 !font-black !text-[var(--text)]">NightFall</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-2">
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild className="hover:bg-[var(--bg-secondary)] !px-1 bg-[var(--bg-primary)] active:bg-[var(--bg-secondary)] focus:bg-[var(--bg-secondary)]">
                                    <div className="cursor-pointer bg-[var(--bg-primary)]" onClick={() => navigate(item.url)}>
                                        <item.icon className="stroke-[var(--stroke-icon)]" />
                                        <span className="text-[var(--text)] font-semibold">{item.title}</span>
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* SIDEBAR FOOTER */}
            <SidebarFooter>
                <SidebarMenu className="bg-[var(--bg-primary)]">
                    <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <SidebarMenuButton className="w-full flex justify-between !px-6 cursor-pointer !py-6 bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] active:bg-[var(--bg-secondary)] !focus:unset">
                            <span className="text-[var(--text)] font-semibold">Username</span>
                            <ChevronUp className="ml-auto stroke-[var(--stroke-icon)]" />
                        </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side="top"
                            className="bg-[var(--bg-secondary)] !w-54 !p-4 flex flex-col gap-2"
                            >
                            {dropdown.map((item, index:number) => (
                                <DropdownMenuItem className="flex gap-2 items-center hover:bg-[var(--bg-secondary)]" key={index}>
                                    <div className="cursor-pointer bg-[var(--bg-secondary)] flex gap-2 items-center hover:bg-white/10 !px-1 !py-2 w-full rounded-md" onClick={() => navigate(item.url)}>
                                        <item.icon className="stroke-[var(--stroke-icon)]" />
                                        <span className="text-[var(--text)] font-semibold">{item.title}</span>
                                    </div>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuItem className="flex gap-2 items-center hover:bg-[var(--bg-secondary)]">
                                <div className="cursor-pointer bg-[var(--bg-secondary)] flex gap-2 items-center hover:bg-white/10 !px-1 !py-2 w-full rounded-md outline-none" onClick={() => mutate()}>
                                    <LogOutIcon className="stroke-[var(--stroke-icon)]" />
                                    <span className="text-[var(--text)] font-semibold">Logout</span>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-2 items-center hover:bg-[var(--bg-secondary)]">
                                <Theme />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppNav;