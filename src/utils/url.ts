import { convertIdToString } from "./normalize";

export const getImagePokemonUrl = (id: number | null): string => {
    if (!id) {
        id = 0;
    }
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${convertIdToString(
        id
    )}.png`;
};

export const getIdFromUrl = (url: string): number => {
    const stringId = url
        .substring(0, url.length - 1)
        .split("/")
        .pop();
    if (stringId) {
        return parseInt(stringId);
    } else {
        return 0;
    }
};
