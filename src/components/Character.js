import React, {useState, useEffect} from "react";


// Write your Character component here

const Character = (props) => {
    return (
    <div className="container">
        <p>{props.charDetail.name}</p>
        <p>{props.charDetail.height}</p>
        <p>{props.charDetail.gender}</p>
    </div>
    );

};

export default Character;