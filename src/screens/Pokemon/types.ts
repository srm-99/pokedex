import { type } from "os";

export type PokemonUseParamsType = {
    idPokemon: string;
};
export type PokemonType = {
    id: number;
    name: string;
    urlImg: string;
    height: number;
    weight: number;
    stats: any[];
    maxStat: number;
};
export type PokemonsAPIResQueryByIdType = {
    abilities: any[];
    base_experience: number;
    forms: any[];
    game_indices: any[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any[];
    name: string;
    order: number;
    past_types: any[];
    species: any[];
    sprites: any[];
    stats: any[];
    types: any[];
    weight: number;
};

export type PokemonImagePropsType = {
    urlImg: string;
    name: string;
};

type PokemonInformationType = {
    id: number;
    name: string;
    height: number;
    weight: number;
};

export type PokemonInformationPropsType = {
    information: PokemonInformationType;
};

type Stat = {
    name: string;
    url: string;
};

type PokemonStat = {
    base_stat: number;
    effort: number;
    stat: Stat;
};

type PokemonStatsGraph = PokemonStat[];

export type PokemonStatsGraphPropsType = {
    stats: PokemonStatsGraph;
    maxStat: number;
};

export type NavigationBarPropsType = {
    id: number;
    name: string;
};

export type UsePokemonPropsType = {
    id: string;
};

export type PokemonMetaStateType = {
    status: string;
    error: string;
};
