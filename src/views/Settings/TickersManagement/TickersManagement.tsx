import React, { useEffect, useState } from "react";
import { Layout } from "../../../components/Layout";
import { NavLink } from "react-router-dom";
import { locations } from "../../../components/Routes/locations";
import axios from "axios";
import { Table } from "@mantine/core";
import { Input, Badge } from "@mantine/core";
import { Button, TextInput } from "@mantine/core";

import "./TickersManagement.scss";

const TickersManagement = () => {
    const [tickers, setTickers] = useState([] as string[]);
    const [tickerSelection, setTickerSelection] = useState("");
    const [newTicker, setNewTicker] = useState("");

    const getTickers = async () => {
        const url = process.env.REACT_APP_BACKEND_SERVER_URL;
        const tick = await axios.get(`${url}/api/tickers`);
        setTickers(tick.data.tickers);
    };

    const removeTicker = async () => {
        const idSelected = tickers.indexOf(tickerSelection);

        await axios.delete(
            `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/tickers/${tickerSelection}`
        );

        getTickers();

        if (tickers[idSelected + 1]) {
            setTickerSelection(tickers[idSelected + 1]);
        } else if (tickers[idSelected - 1]) {
            setTickerSelection(tickers[idSelected - 1]);
        }
    };

    const addTicker = async () => {
        await axios.post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/tickers/${newTicker}`);
        getTickers();
    };

    useEffect(() => {
        // First loading
        getTickers();

        const interval = setInterval(async () => {
            await getTickers();
        }, 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const rows = tickers.map((ticker, id) => (
        <tr
            key={ticker}
            style={{
                cursor: "pointer",
                backgroundColor: ticker === tickerSelection ? "lightgray" : "",
            }}
            onClick={() => setTickerSelection(ticker)}
        >
            <td>{id}</td>
            <td>{ticker}</td>
        </tr>
    ));

    return (
        <Layout>
            <div className="tickers-management">
                <div className="table">
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Ticker</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>
                </div>

                <div className="form">
                    <div className="form-add">
                        <TextInput
                            label="Add a ticker"
                            placeholder="Ticker"
                            rightSectionWidth={70}
                            styles={{ rightSection: { pointerEvents: "none" } }}
                            onChange={(e: any) => {
                                setNewTicker(e.target.value);
                            }}
                            rightSection={<Badge color="blue">new</Badge>}
                        />
                        <Button
                            variant="light"
                            color="teal"
                            uppercase
                            onClick={() => {
                                addTicker();
                            }}
                        >
                            Add
                        </Button>
                    </div>

                    <div className="form-remove">
                        <TextInput
                            //   icon={<At />}
                            label="Remove a ticker"
                            placeholder="Selected ticker"
                            value={tickerSelection}
                            disabled
                        />
                        <Button variant="light" color="red" onClick={() => removeTicker()}>
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TickersManagement;
