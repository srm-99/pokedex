import React, { useState } from "react";

// Utils

// Types
import { pokemonType, responseApiType } from "./types";

const PokemonsContainer = () => {
    // States vairables

    const [offset, setOffset] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [pokemons, setPokemons] = useState<pokemonType[]>([]);

    const fetchPokemons = async () => {
        /*
        1. Crear un Url a partir del enlace de la API.
        2. Setear en el Search del Url los valores offset & limit.
        3. Realizar el fetch a la url.
        4. Extraer del resultado la propiedad "results".
        5. Mapear "results" para añadir el ID y actualizar el url
        */
        const url = new URL("https://pokeapi.co/api/v2/pokemon/");
        url.search = `offset=${offset}&limit=${limit}`;
        const response: responseApiType = await client(url.href);
    };
    return (
        <div className="pokemon--container--grid">
            {pokemons.map((pokemon) => pokemon)}
        </div>
    );
};

export { PokemonsContainer };
