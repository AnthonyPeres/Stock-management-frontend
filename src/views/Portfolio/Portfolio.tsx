import React from "react";
import { NavLink } from "react-router-dom";
import { locations } from "../../components/Routes/locations";

const Portfolio = () => {
    return (
        <div>
            <div>Portfolio</div>
            <NavLink to={locations.home()}>Home</NavLink>
        </div>
    );
};

export default Portfolio;
