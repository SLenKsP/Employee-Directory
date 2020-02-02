import React from "react";

// function that contains container Div
function Container (props) {
    return (
        <div class = {`container${props.fluid ? "-fluid" : ""}`} {...props}/>    
    )
};

export default Container;