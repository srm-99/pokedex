import React from "react";
import { Link } from "react-router-dom";

// Types - - - - - - - - - - - - - - - - - - - - - - - - -
import { propsPokemonContainerType } from "../types";

export const PokemonsContainer = ({ pokemons }: propsPokemonContainerType) => {
    if (pokemons.length && pokemons[0].id) {
        return (
            <div className="pokemon--container--grid">
                {pokemons.map(({ name, id, urlImg }) => (
                    <Link
                        key={id}
                        to={`/${id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <div className="card--grid">
                            <p>{id}</p>
                            <h6></h6>
                            <img src={urlImg} alt={`${name}`} />
                            <div className="card--info">
                                <h5>{name}</h5>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        );
    } else {
        return (
            <div className="without--pokemons">
                <h1>😢</h1>
                <h2>Sorry!</h2>
                <p>the pokemon has not been found.</p>
            </div>
        );
    }
};
