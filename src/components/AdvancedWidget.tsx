"use client";
import { useEffect } from "react";

const AdvancedWidget = () => {
    useEffect(() => {
        const container = document.getElementById("tv-advanced-container");
        if (!container) return;

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;

        script.innerHTML = JSON.stringify({
            autosize: true,
            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            enable_publishing: false,
            backgroundColor: "rgba(18, 20, 20, 0)",
            hide_top_toolbar: false,
            hide_legend: false,
            save_image: false,
            allow_symbol_change: true,
        });

        container.appendChild(script);
        return () => {
            container.innerHTML = "";
        };
    }, []);

    return (
        <div id="tv-advanced-container" className="w-full h-150">
            <div className="tradingview-widget-container__widget w-full h-full"></div>
        </div>
    );
};

export default AdvancedWidget;