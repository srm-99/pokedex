// Types
import { PokemonsAPIRestType, PokemonsAPIResByQueryType } from "../../types";

export const isSearchQuery = (
    response: PokemonsAPIRestType | PokemonsAPIResByQueryType,
    search: string
): response is PokemonsAPIResByQueryType => !!search;
