import React, { useState, useEffect, ChangeEvent } from "react";

//  Components
import { PokemonsContainer } from "./components/Pokemons-section";

// Images - - - - - - - - - - - - - - - - - - - - - - - - -
import magnifier from "../../img/magnifier.svg";

// Utils - - - - - - - - - - - - - - - - - - - - - - - - -
import {
    client,
    getIdFromUrl,
    createImageUrl,
    URL_POKEAPI,
    MAX_POKEMONS,
} from "../../utils";

// Types - - - - - - - - - - - - - - - - - - - - - - - - -
import {
    pokemonType,
    responseApiOffsetLimitType,
    responseApiIdNameType,
} from "./types";

export const AllPokemons = () => {
    // States variables - - - - - - - - - - - - - - - - - - - - - - - - -
    const [offset, setOffset] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [sort, setSort] = useState<string>("lowestNumber");
    const [pokemons, setPokemons] = useState<pokemonType[]>([]);

    // Functions - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    const getCompareFunctions = (sortBy: string) => {
        switch (sortBy) {
            case "lowestNumber":
                return (a: pokemonType, b: pokemonType) => a.id - b.id;

            case "highestNumber":
                return (a: pokemonType, b: pokemonType) => b.id - a.id;

            case "asc":
                return (a: pokemonType, b: pokemonType) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                };

            case "desc":
                return (a: pokemonType, b: pokemonType) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return 1;
                    }
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                };

            case "random":
                return () => Math.floor(Math.random() * 2 - 1);

            default:
                return (a: pokemonType, b: pokemonType) => a.id - b.id;
        }
    };

    const fetchPokemons = async () => {
        /*
        1. Crear un Url a partir del enlace de la API.
        2. Setear en el Search del Url los valores offset & limit.
        3. Realizar el fetch a la url.(se utiliza client from utils)
        4. Extraer del resultado la propiedad "results".
        5. Mapear "results" para añadir el ID y actualizar el url
        6. Ordenar los pokemons de acuero al orden
        6. Setear la variable de estado
        */
        try {
            const url = new URL(URL_POKEAPI);
            url.search = `offset=${offset}&limit=${limit}`;
            const response: responseApiOffsetLimitType = await client(url.href);
            const newPokemons = response.results.map(
                ({ name, url }): pokemonType => {
                    return {
                        id: getIdFromUrl(url),
                        name,
                        urlImg: createImageUrl(getIdFromUrl(url)),
                    };
                }
            );
            const sortPokemons = newPokemons.sort(getCompareFunctions(sort));
            setPokemons(sortPokemons);
            return;
        } catch (error) {
            console.log({ error });
        }
    };

    const searchPokemon = async (event: ChangeEvent<HTMLInputElement>) => {
        /*
        1. obtener el valor del input
        2. completar url para buscarlo
        3. organizar el resultado como el array de pokemons
        4. setPokemons con el nuevo array
        */
        try {
            const url = URL_POKEAPI + event.target.value;
            const response: responseApiIdNameType = await client(url);
            const searchPokemon: pokemonType = {
                id: response.id,
                name: response.name,
                urlImg: createImageUrl(response.id),
            };
            setPokemons([searchPokemon]);
        } catch (error) {
            setPokemons([]);
            console.log(error);
        }
    };

    const searchRandomPokemon = async () => {
        /*
        0. conocer cuantos pokemons debo acumular (limit)
        1. obtener el id que voy a traer con la API
        2. hacer el fetch
        3. organizar la respuesta
        4. acumular las respuestas en un array
        5. hacer el set de pokemons
        */
        const newPokemons: pokemonType[] = [];
        for (let index = 0; index < limit; index++) {
            const id: number = Math.floor(Math.random() * MAX_POKEMONS);
            const url: string = URL_POKEAPI + id.toString();
            const response: responseApiIdNameType = await client(url);
            const pokemon: pokemonType = {
                id,
                name: response.name,
                urlImg: createImageUrl(id),
            };
            newPokemons.push(pokemon);
        }
        setPokemons(newPokemons);
    };

    const handleListOnChangeEvent = (
        event: ChangeEvent<HTMLSelectElement>,
        target: "limit" | "sort"
    ) => {
        switch (target) {
            case "limit":
                setLimit(parseInt(event.target.value));
                break;
            case "sort":
                setSort(event.target.value);
                break;
        }
    };
    // Use effect - - - - - - - - - - - - - - - - - - - - - - - - -
    /* Necesito que cada que se ejecute la funcion fetchPokemon 
    para obtener los pokemons, cuando:
    1. Se monte
    2. cambie el offset, el limit
    */
    useEffect(() => {
        fetchPokemons();
    }, [offset, limit, sort]);

    return (
        <>
            <div className="search-bar">
                <div className="search-info">
                    Search for a Pokémon by name or using its National Pokédex
                    number.
                    <p></p>
                </div>
                <div className="search-box">
                    <label>Name or Number</label>
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Type here"
                        onChange={(event) => searchPokemon(event)}
                        onBlur={(event) => {
                            event.target.value = "";
                        }}
                    />
                    <button>
                        <img src={magnifier} alt="search icon" />
                    </button>
                </div>
            </div>

            <main className="container">
                <div className="sort-section">
                    <div
                        id="surprise-me"
                        onClick={() => {
                            searchRandomPokemon();
                        }}
                    >
                        <p>Surprise me</p>
                    </div>
                    <div className="select-items">
                        <select
                            name="limit-pokemons"
                            id="limit-pokemons"
                            defaultValue="10"
                            onChange={(event) => {
                                handleListOnChangeEvent(event, "limit");
                            }}
                        >
                            <option value="10" disabled>
                                Limit
                            </option>
                            <option value="10">10</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>

                        <select
                            name="sort-pokemons"
                            id="sort-pokemons"
                            defaultValue="lowestNumber"
                            onChange={(event) =>
                                handleListOnChangeEvent(event, "sort")
                            }
                        >
                            <option value="lowestNumber">Sort by:</option>
                            <option value="lowestNumber">
                                Lowest number (first)
                            </option>
                            <option value="highestNumber">
                                Highest number (first)
                            </option>
                            <option value="asc">A-Z</option>
                            <option value="desc">Z-A</option>
                            <option value="random">Random</option>
                        </select>
                    </div>
                </div>

                <div className="pokemon-count">
                    <span>
                        Viewing: {pokemons.length} of {MAX_POKEMONS}
                    </span>
                </div>

                {/* - - - - Pokemon container - - - - */}
                <PokemonsContainer pokemons={pokemons} />
                {/* - - - - - - - - - - - - - - - - - */}

                <div className="pagination" id="pagination">
                    <button
                        id="previous-button"
                        style={{
                            display: offset - limit < 0 ? "none" : "block",
                        }}
                        onClick={() => {
                            setOffset(offset - limit < 0 ? 0 : offset - limit);
                        }}
                    >
                        &laquo;
                    </button>
                    <button
                        id="next-button"
                        style={{
                            display:
                                offset + limit >= MAX_POKEMONS
                                    ? "none"
                                    : "block",
                        }}
                        onClick={() => {
                            setOffset(offset + limit);
                        }}
                    >
                        &raquo;
                    </button>
                </div>
            </main>
        </>
    );
};
