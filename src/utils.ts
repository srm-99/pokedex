export const URL_POKEAPI: string = "https://pokeapi.co/api/v2/pokemon/";
export const MAX_POKEMONS: number = 898;

export const debounce = (callback: Function, delay: number = 300) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: any) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => callback(...args), delay);
    };
};

// export const debounce = (callback: Function, delay: number = 300) => {
//     let timeout: ReturnType<typeof setTimeout>;
//     return (...args: any) => {
//         if (timeout) clearTimeout(timeout);
//         timeout = setTimeout(() => callback(...args), delay);
//     };
// };

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

export const convertIdToString = (id: number): string => {
    const LIMIT_ZEROS = 3;
    return `${"0".repeat(LIMIT_ZEROS - id.toString().length)}${id}`;
};

export const createImageUrl = (id: number | null): string => {
    if (!id) {
        id = 0;
    }
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${convertIdToString(
        id
    )}.png`;
};

export const client = (url: string, params: object = {}) =>
    fetch(url, params).then((response) => response.json());
