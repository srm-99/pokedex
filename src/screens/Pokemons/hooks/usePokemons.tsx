import { useState, useEffect } from "react";

// Utils
import { getPokemonsApiUrl } from "./utils/getPokemonsApiUrl";
import { api } from "../../../utils/api";
import sortFilter from "./utils/sort";
import * as urlUtils from "../../../utils/url";
import { isSearchQuery } from "./utils/isSearchQuery";

// Types
import {
    PokemonStateType,
    PokemonMetaStateType,
    UsePokemonsPropsType,
    PokemonsAPIRestType,
    PokemonsAPIResByQueryType,
} from "../types";

const usePokemons = ({ toolbar }: UsePokemonsPropsType) => {
    const [pokemons, setPokemons] = useState<PokemonStateType>([]);
    const [meta, setMeta] = useState<PokemonMetaStateType>({
        status: "idle",
        error: "",
    });

    useEffect(() => {
        let mounted = true;
        setMeta({ status: "loading", error: "" });
        const pokemonUrl = getPokemonsApiUrl({
            limit: toolbar.limit,
            offset: toolbar.offset,
            search: toolbar.search,
        });
        api<PokemonsAPIRestType | PokemonsAPIResByQueryType>(pokemonUrl)
            .then((response) => {
                if (!mounted) return;

                if (isSearchQuery(response, toolbar.search)) {
                    if (response) {
                        setPokemons([
                            {
                                id: response.id,
                                name: response.name,
                                urlImg: urlUtils.getImagePokemonUrl(
                                    response.id
                                ),
                            },
                        ]);
                    } else {
                        setPokemons([]);
                    }
                } else {
                    const pokemons: PokemonStateType = response.results
                        .map(({ name, url }) => {
                            const id = urlUtils.getIdFromUrl(url);
                            return {
                                id,
                                name,
                                urlImg: urlUtils.getImagePokemonUrl(id),
                            };
                        })
                        .sort(sortFilter(toolbar.sort));
                    setPokemons(pokemons);
                }
                setMeta({ status: "loaded", error: "" });
            })
            .catch((error) => {
                console.log({ error });
                setPokemons([]);
                if (!toolbar.search) {
                    setMeta({
                        error:
                            error.message ||
                            "an error occurred getting the pokemons",
                        status: "loaded",
                    });
                } else {
                    setMeta({
                        error: "Pokemon not found",
                        status: "loaded",
                    });
                }
            });
        return () => {
            mounted = false;
        };
    }, [toolbar.limit, toolbar.offset, toolbar.sort, toolbar.search]);

    return {
        data: pokemons,
        meta,
    };
};
export default usePokemons;
