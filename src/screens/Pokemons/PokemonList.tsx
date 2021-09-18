import React, { FC } from "react";
import { Link } from "react-router-dom";

// Types
import { PokemonListPropsType } from "./types";

const PokemonsList: FC<PokemonListPropsType> = ({ pokemons }) => {
    if (pokemons.length) {
        return (
            <div className="pokemon--container--grid">
                {pokemons.map(({ name, id, urlImg }) => (
                    <Link
                        key={id}
                        to={`/pokemon/${id}`}
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
    }
    return (
        <div className="without--pokemons">
            <h1>😢</h1>
            <h2>Sorry!</h2>
            <p>the pokemon has not been found.</p>
        </div>
    );
};

export default PokemonsList;
