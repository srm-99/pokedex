export type pokemonType = {
    id: number;
    name: string;
    urlImg: string;
};
type resultApiType = {
    name: string;
    url: string;
};
export type responseApiType = {
    count: number;
    next: string | null;
    previous: string | null;
    results: resultApiType[];
};
export type propsPokemonContainerType = {
    offset: number;
    limit: number;
};
