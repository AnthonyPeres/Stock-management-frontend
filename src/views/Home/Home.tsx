import React from "react";
import { NavLink } from "react-router-dom";
import { locations } from "../../components/Routes/locations";

const Home = () => {
    return (
        <div>
            <div>Home</div>
            <NavLink to={locations.portfolio()}>Portfolio</NavLink>
        </div>
    );
};

export default Home;
