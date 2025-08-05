import React from "react";

function Pedicure(props) {
    return (
        <div className="gallery-content ped-margin">
            <div className="gallery-box">
                <img src={props.image} alt="" />
            </div>
        </div>
    )
}

export default Pedicure;