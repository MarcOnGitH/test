import TradingViewWidget from "@/components/TradingViewWidgets";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full max-w-7xl mx-auto px-6 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Market Overview
          </h1>
          <p className="text-sm text-zinc-400">
            Real-time stock market data
          </p>
        </div>
      </div>

      <TradingViewWidget />
    </main>
  );
}