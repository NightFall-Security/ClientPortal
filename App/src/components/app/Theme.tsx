import { useTheme } from "@/context/ThemeContext";
import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";

const Theme: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className="cursor-pointer bg-[var(--bg-secondary)] flex gap-2 items-center hover:bg-white/10 !px-1 !py-2 w-full rounded-md outline-none"
            onClick={toggleTheme}
            title="Changer le thème"
        >
            {theme == 'light' ? (
                <SunIcon className="stroke-[var(--stroke-icon)]"/>
            ) : (
                <MoonIcon className="stroke-[var(--stroke-icon)]"/>
            )}
            <p className="text-sm font-semibold text-[var(--text)]">{theme.charAt(0).toUpperCase() + theme.slice(1)}</p>
        </div>
    );
};

export default Theme;
