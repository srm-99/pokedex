export const api = <R = any>(url: string, params: object = {}): Promise<R> =>
    fetch(url, params).then((response) => response.json());
