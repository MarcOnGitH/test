"use client";
import { useState } from "react";
import SimpleWidget from "./SimpleWidget";
import AdvancedWidget from "./AdvancedWidget";

const TradingViewWidgets = () => {
    const [isAdvanced, setIsAdvanced] = useState(false);

    return (
        <div className="w-full rounded-lg bg-transparent">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white">
                        Market Overview
                    </h1>
                    <p className="text-sm text-zinc-400 mt-1">
                        Real-time stock market data
                    </p>
                </div>

                <button
                    onClick={() => setIsAdvanced(!isAdvanced)}
                    className="px-5 py-2 text-sm font-medium text-neutral-400 transition-all duration-250 border border-neutral-600 rounded-md hover:text-[#c81464] hover:border-[#c81464] hover:bg-[#c81464]/10"
                >
                    {isAdvanced ? "Toggle simple view" : "Toggle advanced view (candles)"}
                </button>
            </div>

            <div className="w-full">
                {isAdvanced ? <AdvancedWidget /> : <SimpleWidget />}
            </div>
        </div>
    );
};

export default TradingViewWidgets;