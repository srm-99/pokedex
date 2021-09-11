export const convertIdToString = (id: number): string => {
    const LIMIT_ZEROS = 3;
    return `${"0".repeat(LIMIT_ZEROS - id.toString().length)}${id}`;
};
