import React, { useState } from "react";

// Utils
import { client, getIdFromUrl, createImageUrl } from "../../utils";
// Types
import {
    pokemonType,
    responseApiType,
    propsPokemonContainerType,
} from "./types";

const PokemonsContainer = ({ offset, limit }: propsPokemonContainerType) => {
    // States variables
    const [pokemons, setPokemons] = useState<pokemonType[]>([]);

    const fetchPokemons = async () => {
        /*
        1. Crear un Url a partir del enlace de la API.
        2. Setear en el Search del Url los valores offset & limit.
        3. Realizar el fetch a la url.(se utiliza client from utils)
        4. Extraer del resultado la propiedad "results".
        5. Mapear "results" para añadir el ID y actualizar el url
        6. Setear la variable de estado
        */
        const url = new URL("https://pokeapi.co/api/v2/pokemon/");
        url.search = `offset=${offset}&limit=${limit}`;
        const response: responseApiType = await client(url.href);
        const newPokemons = response.results.map(
            ({ name, url }): pokemonType => {
                return {
                    id: getIdFromUrl(url),
                    name,
                    urlImg: createImageUrl(getIdFromUrl(url)),
                };
            }
        );
        setPokemons(newPokemons);
    };

    fetchPokemons();
    return (
        <div className="pokemon--container--grid">
            {pokemons.map(({ name, id, urlImg }) => (
                <div>
                    name: {name}
                    id: {id}
                    url: {urlImg}
                </div>
            ))}
        </div>
    );
};

export { PokemonsContainer };
