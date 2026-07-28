"use client";
import { useEffect } from "react";

const AdvancedWidget = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;

        script.innerHTML = JSON.stringify({
            autosize: true,
            symbol: "NASDAQ:NDX",
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

        const container = document.getElementById("tv-advanced-container");

        if (container) {
            container.appendChild(script);
        }

    }, [])

    return (
        <div id="tv-advanced-container" className="tradingview-widget-container w-full h-137.5">
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
};

export default AdvancedWidget;