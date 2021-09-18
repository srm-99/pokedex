import React, { FC } from "react";

// Types
import { PokemonInformationPropsType } from "./types";

const PokemonInformation: FC<PokemonInformationPropsType> = ({
    information,
}) => {
    return (
        <div className="information--pokemon" id="information--pokemon">
            <div>
                <h4>Id</h4>
                <p> {information.id}</p>{" "}
            </div>
            <div>
                <h4>Name</h4> <p>{information.name}</p>
            </div>
            <div>
                <h4>Height</h4> <p> {information.height}</p>
            </div>
            <div>
                <h4>Weight</h4> <p>{information.weight}</p>
            </div>
        </div>
    );
};

export default PokemonInformation;
