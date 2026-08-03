"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "./navigation";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#191919] shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            <div className="container mx-auto grid grid-cols-3 items-center px-6 py-1.5">
                {/* LL */}
                <div className="flex justify-start">
                    <Link href="/" className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
                        <Image
                            src="/HeaderLogo.png"
                            alt="QueryBull Logo"
                            width={80}
                            height={26}
                            priority
                            className="object-contain"
                        />
                    </Link>
                </div>

                <Navigation />

                {/* RR */}
                <div className="flex justify-center">
                    <Link href="/login" className="px-3 py-1 rounded-lg bg-pink-600 text-m font-bold ">
                        Login
                    </Link>
                </div>

            </div>
        </header>
    );
}