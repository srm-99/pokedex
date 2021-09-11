import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Types
import {
    pokemonUseParamsType,
    responseApiIdNameType,
    pokemonType,
    abbreviationsType,
} from "./type";

// Utils - - - - - - - - - - - - - - - - - - - - - - - - -
import { client, createImageUrl, URL_POKEAPI, MAX_POKEMONS } from "../../utils";

export const Pokemon = () => {
    // Constants
    const { idPokemon }: pokemonUseParamsType = useParams();
    const [pokemon, setPokemon] = useState<pokemonType>({
        id: 0,
        name: "",
        urlImg: "",
        height: 0,
        weight: 0,
        stats: [],
        maxStat: 0,
    });

    // Functions
    const searchPokemon = async (id: string) => {
        try {
            const url = URL_POKEAPI + id;
            const response: responseApiIdNameType = await client(url);
            const searchPokemon: pokemonType = {
                id: response.id,
                name: response.name,
                urlImg: createImageUrl(response.id),
                height: response.height,
                weight: response.weight,
                stats: response.stats,
                maxStat: Math.max(
                    ...response.stats.map((stat) => stat.base_stat)
                ),
            };
            setPokemon(searchPokemon);
        } catch (error) {
            console.log(error);
        }
    };
    //  abbreviations
    const abbreviateWords = (sentence: string): string => {
        const rawWords = sentence.split("-");
        if (rawWords[0] === "special") {
            rawWords[0] = "sp";
            return rawWords.join("-");
        }
        return sentence;
    };

    // Use State
    useEffect(() => {
        searchPokemon(idPokemon);
    }, [idPokemon]);
    return (
        <>
            <div className="select-bar">
                <div className="pokemon-bar" id="pokemon-bar">
                    <Link
                        to={`/${pokemon.id - 1}`}
                        style={{
                            visibility:
                                pokemon.id - 1 > 0 ? "visible" : "hidden",
                        }}
                    >
                        &laquo; Anterior
                    </Link>
                    <div className="actual-pokemon">{`${pokemon.id} - ${pokemon.name}`}</div>
                    <Link
                        to={`/${pokemon.id + 1}`}
                        style={{
                            visibility:
                                pokemon.id + 1 < MAX_POKEMONS
                                    ? "visible"
                                    : "hidden",
                        }}
                    >
                        Siguiente &raquo;
                    </Link>
                </div>
            </div>
            <main className="container">
                <div className="pokemon--info" id="pokemon-info">
                    <div className="img-container" id="img-container">
                        <img src={pokemon.urlImg} alt={`${pokemon.name}`} />
                    </div>
                    <div
                        className="information--pokemon"
                        id="information--pokemon"
                    >
                        <div>
                            <h4>Id</h4>
                            <p> {pokemon.id}</p>{" "}
                        </div>
                        <div>
                            <h4>Name</h4> <p>{pokemon.name}</p>
                        </div>
                        <div>
                            <h4>Height</h4> <p> {pokemon.height}</p>
                        </div>
                        <div>
                            <h4>Weight</h4> <p>{pokemon.weight}</p>
                        </div>
                    </div>
                    <div
                        className="stats--pokemon"
                        id="stats--pokemon"
                        style={{
                            gridTemplateColumns: "1fr ".repeat(
                                pokemon.stats.length
                            ),
                        }}
                    >
                        {pokemon.stats.map((stat) => {
                            const randomColor = `rgb(${Math.floor(
                                Math.random() * 255
                            )}, ${Math.floor(
                                Math.random() * 255
                            )}, ${Math.floor(Math.random() * 255)})`;

                            return (
                                <div
                                    key={stat.stat.name}
                                    style={{
                                        height: `${
                                            (stat.base_stat / pokemon.maxStat) *
                                            100
                                        }%`,
                                        backgroundColor: `${randomColor}`,
                                    }}
                                >
                                    <p
                                        id="stat-value"
                                        style={{
                                            color: `${randomColor}`,
                                        }}
                                    >
                                        {stat.base_stat}
                                    </p>
                                    <p>{abbreviateWords(stat.stat.name)}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
};
