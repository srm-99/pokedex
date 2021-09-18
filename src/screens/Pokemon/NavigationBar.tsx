import React, { FC } from "react";
import { Link } from "react-router-dom";

// Utils Params
import { MAX_POKEMONS } from "../../utils/constants";

// Types
import { NavigationBarPropsType } from "./types";

const NavigationBar: FC<NavigationBarPropsType> = ({ id, name }) => {
    return (
        <div className="select-bar">
            <div className="pokemon-bar" id="pokemon-bar">
                <Link
                    to={`/pokemon/${id - 1}`}
                    style={{
                        visibility: id - 1 > 0 ? "visible" : "hidden",
                    }}
                >
                    &laquo; Anterior
                </Link>
                <div className="actual-pokemon">{`${id} - ${name}`}</div>
                <Link
                    to={`/pokemon/${id + 1}`}
                    style={{
                        visibility:
                            id + 1 < MAX_POKEMONS ? "visible" : "hidden",
                    }}
                >
                    Siguiente &raquo;
                </Link>
            </div>
        </div>
    );
};

export default NavigationBar;
