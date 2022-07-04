import React from "react";
import { Layout } from "../../components/Layout";
import { NavLink } from "react-router-dom";
import { locations } from "../../components/Routes/locations";

const Settings = () => {
    return (
        <Layout>
            <div>
                <NavLink to={locations.settings_tickers()}>Tickers management</NavLink>
            </div>
        </Layout>
    );
};

export default Settings;
