export type pokemonType = {
    id: number;
    name: string;
    url: string;
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
