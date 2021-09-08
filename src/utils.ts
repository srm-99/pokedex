export const getIdFromUrl = (url: string): number | null => {
    const stringId = url
        .substring(0, url.length - 1)
        .split("/")
        .pop();
    if (stringId) {
        return parseInt(stringId);
    } else {
        return null;
    }
};

export const createImageUrl = (id: number): string =>
    `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

export const convertIdToString = (id: number): string => {
    const LIMIT_ZEROS = 3;
    return `${"0".repeat(LIMIT_ZEROS - id.toString().length)}${id}`;
};

export const client = (url: string, params: object = {}) =>
    fetch(url, params).then((response) => response.json());
