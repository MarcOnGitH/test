import Header from "@/components/header";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        // Changed container wrap to a premium dark-grey background (#121212)
        <div className="min-h-screen bg-[#1C1C1C]">
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