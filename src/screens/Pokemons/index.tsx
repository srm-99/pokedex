import React, { useState, useEffect, ChangeEvent } from "react";

//  Components
import PokemonsList from "./PokemonList";
import SearchBar from "./SearchBar";
import ToolBar from "./ToolBar";
import Count from "./Count";
import Pagination from "./Pagination";

// Hooks
import usePokemons from "./hooks/usePokemons";
import useToolBar from "./hooks/useToolBar";

const Pokemons = () => {
    const toolbar = useToolBar();
    const pokemons = usePokemons({
        toolbar: toolbar.data,
    });

    return (
        <>
            <SearchBar toolbar={toolbar.data} onChange={toolbar.onChange} />
            <main className="container">
                <ToolBar toolbar={toolbar.data} onChange={toolbar.onChange} />
                <Count count={pokemons.data.length} />
                <PokemonsList pokemons={pokemons.data} />
                <Pagination
                    toolbar={toolbar.data}
                    onChange={toolbar.onChange}
                />
            </main>
        </>
    );
};

export default Pokemons;
