import useToolBar from "./hooks/useToolBar";

export type PokemonType = {
    id: number;
    name: string;
    urlImg: string;
};

export type PokemonStateType = PokemonType[];

type ResultApiType = {
    name: string;
    url: string;
};

export type PokemonsAPIRestType = {
    count: number;
    next: string | null;
    previous: string | null;
    results: ResultApiType[];
};

export type PokemonsAPIResByQueryType = {
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

export type PokemonListPropsType = {
    pokemons: PokemonType[];
};

export type CountPropsType = {
    count: number;
};

export type PokemonMetaStateType = {
    status: "idle" | "loading" | "loaded";
    error: string;
};

export type ToolbarStateType = {
    search: string;
    offset: number;
    limit: number;
    sort: "ascById" | "descById" | "ascByName" | "descByName" | "random";
};

export type UsePokemonsPropsType = {
    toolbar: ToolbarStateType;
};

export type ToolbarPropsType = {
    toolbar: ToolbarStateType;
    onChange: ReturnType<typeof useToolBar>["onChange"];
};

export type PaginationPropsType = ToolbarPropsType;

export type SearchPropsType = ToolbarPropsType;
