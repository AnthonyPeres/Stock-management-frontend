import React from "react";
import { Routes as Switch, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { locations } from "./locations";
import { Home } from "../../views/Home";
import { Wallet } from "../../views/Wallet";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={locations.home()} element={<Home />} />
                <Route path={locations.wallet()} element={<Wallet />} />
            </Switch>
        </Router>
    );
};

export default Routes;
