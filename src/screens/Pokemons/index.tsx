import React from "react";

//  Components
import PokemonsList from "./PokemonList";
import SearchBar from "./SearchBar";
import ToolBar from "./ToolBar";
import Count from "./Count";
import Pagination from "./Pagination";
import Loading from "../../components/Loading";

// Hooks
import usePokemons from "./hooks/usePokemons";
import useToolBar from "./hooks/useToolBar";

const Pokemons = () => {
    const toolbar = useToolBar();
    const pokemons = usePokemons({
        toolbar: toolbar.data,
    });

    if (pokemons.meta.status === "loading") {
        return <Loading></Loading>;
    }
    return (
        <>
            <SearchBar toolbar={toolbar.data} onChange={toolbar.onChange} />
            <div className="container">
                <ToolBar toolbar={toolbar.data} onChange={toolbar.onChange} />
                <Count count={pokemons.data.length} />
                <PokemonsList pokemons={pokemons.data} />
                <Pagination
                    toolbar={toolbar.data}
                    onChange={toolbar.onChange}
                />
            </div>
        </>
    );
};

export default Pokemons;
