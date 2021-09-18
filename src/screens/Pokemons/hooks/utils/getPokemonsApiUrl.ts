// Utils params
import { URL_POKEAPI } from "../../../../utils/constants";

// Types
import { ToolbarStateType } from "../../types";

export const getPokemonsApiUrl = ({
    offset,
    limit,
    search,
}: Pick<ToolbarStateType, "offset" | "limit" | "search">): string => {
    if (search) return URL_POKEAPI + search.toLowerCase();
    const url = new URL(URL_POKEAPI);
    url.search = `offset=${offset}&limit=${limit}`;

    return url.href;
};
