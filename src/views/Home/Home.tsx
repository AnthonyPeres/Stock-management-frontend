import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import axios from "axios";

const Home = () => {
    const [tickers, setTickers] = useState([] as string[]);

    const getTickers = async () => {
        const url = process.env.REACT_APP_BACKEND_SERVER_URL;
        const tick = await axios.get("http://127.0.0.1:8000/tickers");
        setTickers(tick.data.tickers);
    };

    useEffect(() => {
        // First loading
        getTickers();

        const interval = setInterval(async () => {
            await getTickers();
        }, 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Layout>
            <>
                <div>Home</div>
                {tickers.map((ticker, id) => (
                    <div key={id}>{ticker}</div>
                ))}
            </>
        </Layout>
    );
};

export default Home;
