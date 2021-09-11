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
export type ResponseApiIdNameType = {
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
