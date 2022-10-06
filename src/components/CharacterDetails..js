import React from "react";
import Character from "./Character";

const CharDetail = props => {
    const {charName} = props;

    return (
        <div className="container">
            {charName.map((name, idx) => {
                return <Character name={name} key={idx} />
            })}
        </div>
    );
}

export default CharDetail;