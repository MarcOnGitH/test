"use client";

import { useEffect } from "react";

const TradingViewWidget = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;

        script.innerHTML = JSON.stringify({
            symbols: [
                ["Apple", "AAPL|1D"],
                ["Google", "GOOGL|1D"],
                ["Microsoft", "MSFT|1D"],
                ["Tesla", "TSLA|1D"],
                ["NVIDIA", "NVDA|1D"],
                ["Broadcom", "AVGO|1D"],
            ],
            width: "100%",
            height: "550",
            colorTheme: "dark",
            showVolume: true,
            scalePosition: "left",
            valuesTracking: "1",
            backgroundColor: "rgba(18, 20, 20, 0)",
            lineWidth: 2,
            lineType: 0,
            lineColor: "rgba(0, 0, 0, 1)",
            dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
        });

        const container = document.getElementById("tv-widget-container");

        if (container) {
            container.appendChild(script);
        }
    }, []);

    return (
        <div className="w-full rounded-lg border">
            <div id="tv-widget-container" className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
    );
};

export default TradingViewWidget;