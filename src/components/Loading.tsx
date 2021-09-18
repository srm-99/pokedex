import React from "react";

// Images
import logo from "../assets/img/logo.png";

const Loading = () => {
    return (
        <div className="loading">
            <hr />
            <p>Loading...</p>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Loading;
