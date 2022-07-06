import React from "react";
import { Routes as Switch, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { locations } from "./locations";
import { Home } from "../../views/Home";
import { Wallet } from "../../views/Wallet";
import { Settings } from "../../views/Settings";
import { useState } from "react";

import { TickersManagement } from "../../views/Settings/TickersManagement";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { AnalyseCours } from "../../views/Analyse/AnalyseCours";

const Routes = () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                <Router>
                    <Switch>
                        <Route path={locations.home()} element={<Home />} />
                        <Route path={locations.wallet()} element={<Wallet />} />
                        <Route path={locations.settings()} element={<Settings />} />
                        <Route path={locations.analyse_cours()} element={<AnalyseCours />} />
                        <Route
                            path={locations.settings_tickers()}
                            element={<TickersManagement />}
                        />
                    </Switch>
                </Router>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default Routes;
