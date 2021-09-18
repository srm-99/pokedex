import { useEffect, useState } from "react";

// Utils
import { getPokemonAPIUrl } from "./utils/getPokemonAPIUrl";
import { getPokemonAPIData } from "./utils/getPokemonAPIData";
import { api } from "../../../utils/api";

// Types
import {
    PokemonType,
    PokemonsAPIResQueryByIdType,
    UsePokemonPropsType,
    PokemonMetaStateType,
} from "../types";

const usePokemon = ({ id }: UsePokemonPropsType) => {
    const [pokemon, setPokemon] = useState<PokemonType>({
        id: 0,
        name: "",
        urlImg: "",
        height: 0,
        weight: 0,
        stats: [],
        maxStat: 0,
    });
    const [meta, setMeta] = useState<PokemonMetaStateType>({
        status: "idle",
        error: "",
    });

    useEffect(() => {
        let isMounted = true;
        setMeta({ status: "loading", error: "" });
        api<PokemonsAPIResQueryByIdType>(getPokemonAPIUrl(id))
            .then((response) => {
                if (!isMounted) return;
                setPokemon(getPokemonAPIData(response));
                setMeta({ status: "loaded", error: "" });
            })
            .catch((error) => {
                console.log(error);
                setPokemon({
                    id: 0,
                    name: "",
                    urlImg: "",
                    height: 0,
                    weight: 0,
                    stats: [],
                    maxStat: 0,
                });
                setMeta({
                    status: "loaded",
                    error: "an error occurred getting the pokemon data",
                });
            });
        return () => {
            isMounted = false;
        };
    }, [id]);

    return { data: pokemon, meta };
};

export default usePokemon;
