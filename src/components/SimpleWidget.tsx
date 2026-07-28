"use client";
import { useEffect } from "react";

const SimpleWidget = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;

        script.innerHTML = JSON.stringify({
            symbols: [
                ["NASDAQ 100", "US100|1D"],
                ["Apple", "AAPL|1D"],
                ["Sandisk", "SNDK|1D"],
                ["Google", "GOOGL|1D"],
                ["Microsoft", "MSFT|1D"],
                ["BitMine Immersion", "BMNR|1D"],
                ["Tesla", "TSLA|1D"],
                ["NVIDIA", "NVDA|1D"],
                ["Broadcom", "AVGO|1D"],
                ["Amazon", "AMZN|1D"],
                ["IBM", "IBM|1D"],
                ["Micron Technology", "MU|1D"],
                ["Gold", "XAUUSD|1D"],
                ["Silver", "XAGUSD|1D"],
            ],
            width: "100%",
            height: "550",
            colorTheme: "dark",
            showVolume: true,
            scalePosition: "left",
            valuesTracking: "1",
            backgroundColor: "rgba(18, 20, 20, 0)",
            lineWidth: 1.5,
            lineType: 0,
            lineColor: "rgba(200, 20, 100, 1)",
            dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
        });

        const container = document.getElementById("tv-simple-container");

        if (container) {
            container.appendChild(script);
        }

    }, []);

    return (
        <div id="tv-simple-container" className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
}

export default SimpleWidget;