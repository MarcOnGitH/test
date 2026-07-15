import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="sticky top-0 bg-white border-b border-gray-100">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Clicking the Logo always takes you to the home page - this will be to enter a new ticker (PAGE 2)*/}
                <Link href="/">
                    <Image src="/HeaderLogo.png" alt="Header logo" width={150} height={40} priority />
                </Link>
            </div>
        </header>
    )
}