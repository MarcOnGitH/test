"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { name: "Dashboard", href: "/" },
    { name: "Search", href: "/search" },
    { name: "WatchList", href: "/watchlist" },
    { name: "News", href: "/news" },
];

export default function Navigation() {
    const pathName = usePathname();

    return (
        <nav>
            <ul className="flex items-center justify-center gap-8">
                {NAV_LINKS.map((link) => {
                    const active =
                        link.href === "/"
                            ? pathName === "/"
                            : pathName.startsWith(link.href);

                    return (
                        <li key={link.name} className="relative py-2">
                            <Link
                                href={link.href}
                                className={`text-sm font-medium tracking-wide transition-all duration-200 ${active ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                                    }`}
                            >
                                {link.name}
                            </Link>

                            {active && (
                                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)] transition-all" />
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}