import React from "react";
import { useParams } from "react-router-dom";

// Components
import NavigationBar from "./NavigationBar";
import PokemonImage from "./PokemonImage";
import PokemonInformation from "./PokemonInformation";
import PokemonStatsGraph from "./PokemonStatsGraph";
import Loading from "../../components/Loading";

// Hooks
import usePokemon from "./hooks/usePokemon";

// Types
import { PokemonUseParamsType } from "./types";

const Pokemon = () => {
    const { idPokemon }: PokemonUseParamsType = useParams();
    const { data, meta } = usePokemon({ id: idPokemon });

    if (meta.status === "loading") {
        return <Loading></Loading>;
    }
    return (
        <>
            <NavigationBar id={data.id} name={data.name} />
            <div className="container">
                <div className="pokemon--info" id="pokemon-info">
                    <PokemonImage urlImg={data.urlImg} name={data.name} />
                    <PokemonInformation
                        information={{
                            id: data.id,
                            name: data.name,
                            height: data.height,
                            weight: data.weight,
                        }}
                    />
                    <PokemonStatsGraph
                        stats={data.stats}
                        maxStat={data.maxStat}
                    />
                </div>
            </div>
        </>
    );
};

export default Pokemon;
