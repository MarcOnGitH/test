import TradingViewWidget from "@/components/TradingViewWidgets";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full max-w-7xl mx-auto px-6 py-8 space-y-6">
      <TradingViewWidget />
    </main>
  );
}