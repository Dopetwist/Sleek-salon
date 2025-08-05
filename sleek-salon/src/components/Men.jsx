import React from "react";

function Men(props) {
    return (
        <div className="gallery-content">
            <div className="gallery-box">
                <img src={props.image} alt="" />
            </div>
        </div>
    )
}

export default Men;