import React from "react";
import { Routes as Switch, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { locations } from "./locations";
import { Home } from "../../views/Home";
import { Wallet } from "../../views/Wallet";
import { Settings } from "../../views/Settings";
import { TickersManagement } from "../../views/Settings/TickersManagement";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={locations.home()} element={<Home />} />
                <Route path={locations.wallet()} element={<Wallet />} />
                <Route path={locations.settings()} element={<Settings />} />
                <Route path={locations.settings_tickers()} element={<TickersManagement />} />
            </Switch>
        </Router>
    );
};

export default Routes;
