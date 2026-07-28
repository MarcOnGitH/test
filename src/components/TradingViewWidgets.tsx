"use client";
import { useState } from "react";
import SimpleWidget from "./SimpleWidget";
import AdvancedWidget from "./AdvancedWidget";

const TradingViewWidgets = () => {
    const [isAdvanced, setIsAdvanced] = useState(false);

    return (
        <div className="w-full rounded-lg border">
            <div className="flex justify-end p-4 border-b border-white">
                <button onClick={() => setIsAdvanced(!isAdvanced)}
                    className="rounded-md transition px-4 py-2">

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