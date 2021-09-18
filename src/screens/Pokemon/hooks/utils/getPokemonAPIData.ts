// Utils
import { getImagePokemonUrl } from "../../../../utils/url";

// Types
import { PokemonsAPIResQueryByIdType, PokemonType } from "../../types";

export const getPokemonAPIData = (
    response: PokemonsAPIResQueryByIdType
): PokemonType => {
    return {
        id: response.id,
        name: response.name,
        urlImg: getImagePokemonUrl(response.id),
        height: response.height,
        weight: response.weight,
        stats: response.stats,
        maxStat: Math.max(...response.stats.map((stat) => stat.base_stat)),
    };
};
