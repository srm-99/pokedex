import React, { FC } from "react";

// Types
import { PokemonImagePropsType } from "./types";

const PokemonImage: FC<PokemonImagePropsType> = ({ urlImg, name }) => {
    return (
        <div className="img-container" id="img-container">
            <img src={urlImg} alt={`${name}`} />
        </div>
    );
};

export default PokemonImage;
