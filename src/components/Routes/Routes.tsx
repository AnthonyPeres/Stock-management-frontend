import React from "react";
import { Routes as Switch, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { locations } from "./locations";
import { Home } from "../../views/Home";
import { Portfolio } from "../../views/Portfolio";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={locations.home()} element={<Home />} />
                <Route path={locations.portfolio()} element={<Portfolio />} />
            </Switch>
        </Router>
    );
};

export default Routes;
