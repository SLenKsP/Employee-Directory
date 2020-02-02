import React from "react";

// function that export header section
function Header () {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
                <h1 className="display-3">Employee Directory</h1>
                <p className="lead">Sort Employees By name By clicking on Arrows or just type name in search box </p>
            </div>
        </div>
    )
};

export default Header;