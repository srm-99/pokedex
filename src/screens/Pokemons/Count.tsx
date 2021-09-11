import React, { FC } from "react";

// Utils
import { MAX_POKEMONS } from "../../utils/constants";

// Types
import { CountPropsType } from "./types";

const Count: FC<CountPropsType> = ({ count }) => {
    return (
        <div className="pokemon-count">
            <span>
                Viewing: {count} of {MAX_POKEMONS}
            </span>
        </div>
    );
};

export default Count;
