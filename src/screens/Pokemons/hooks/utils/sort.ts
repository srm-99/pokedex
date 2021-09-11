// Type
import { PokemonType, ToolbarStateType } from "../../types";

const ascById = (a: PokemonType, b: PokemonType) => a.id - b.id;

const descById = (a: PokemonType, b: PokemonType) => b.id - a.id;

const ascByName = (a: PokemonType, b: PokemonType) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    }
    return 0;
};

const descByName = (a: PokemonType, b: PokemonType) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
    }
    return 0;
};

const random = () => Math.floor(Math.random() * 2 - 1);

const sortFilter = {
    ascById,
    descById,
    ascByName,
    descByName,
    random,
};
export default (sortBy: ToolbarStateType["sort"]) => {
    const sort = sortFilter[sortBy];

    return sort || sortFilter.ascByName;
};
