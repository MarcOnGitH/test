import Header from "@/components/header";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-linear-to-br from-[#2b2a2a] via-[#1a1a1a] to-[#0e0e0e]">
            <Header />
            <main className="text-zinc-300">
                <div className="container mx-auto px-6 py-8">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default layout;