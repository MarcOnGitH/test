import Link from "next/link";

export default function Navigation() {
    const navLinks = [
        { name: "Search", href: "/search" },
        { name: "WatchList", href: "/watchlist" },
        { name: "News", href: "/news" },
        { name: "Dashboard", href: "/dashboard" },
    ];

    return (
        <nav className="flex justify-center gap-8">
            {navLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    // Cleaned up the broken hover property and completely stripped the white drop-shadow glow
                    className="text-[15px] font-medium tracking-wide text-zinc-400 hover:text-white transition-colors duration-200"
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}