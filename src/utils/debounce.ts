export const debounce = (callback: Function, delay: number = 300) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: any) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => callback(...args), delay);
    };
};
