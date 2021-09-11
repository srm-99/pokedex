export type pokemonType = {
    id: number;
    name: string;
    urlImg: string;
};
type resultApiType = {
    name: string;
    url: string;
};
export type responseApiOffsetLimitType = {
    count: number;
    next: string | null;
    previous: string | null;
    results: resultApiType[];
};
export type responseApiIdNameType = {
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
export type propsPokemonContainerType = {
    pokemons: pokemonType[];
};
