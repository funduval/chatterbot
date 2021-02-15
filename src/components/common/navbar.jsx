import React from "react";

const NavBar = (props) => {
    return (
        <nav style={{ color: "#fff" }} className="navbar navbar-dark bg-dark">
            <span style={{width:"100%", position:"relative"}}>
                <span className="badge badge-pill badge-info m-2">
                    Add Chat
                </span>
                <span style={{ fontWeight: "bold", display: "inline", textAlign: "center", position:"absolute", left:"46%" }}>Chatterbot</span>

            </span>
        </nav >
    );
};

export default NavBar;