import React from "react";

function Container (props) {
    return (
        <div class = {`container${props.fluid ? "-fluid" : ""}`} {...props}/>    
    )
};

export default Container;