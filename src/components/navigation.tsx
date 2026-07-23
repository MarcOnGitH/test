"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Search", href: "/search" },
    { name: "WatchList", href: "/watchlist" },
    { name: "News", href: "/news" },
];

export default function Navigation() {
    const pathName = usePathname();

    return (
        <nav>
            <ul className="flex items-center justify-center gap-9">
                {navLinks.map((link) => {
                    const active = link.href === "/"
                        ? pathName === "/"
                        : pathName.startsWith(link.href);

                    return (
                        <li key={link.name}>
                            <Link href={link.href}
                                className={`text-[15px] tracking-wide transition-colors duration-200 ${active
                                    ? "font-semibold text-white"
                                    : "font-medium text-zinc-400 hover:text-white"}`}>
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}