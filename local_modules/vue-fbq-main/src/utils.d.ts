/**
 * Load script and return load status as Promise
 *
 * @param name
 * @param src
 * @param defer
 * @returns {Promise<unknown>}
 */
export declare function load(name: string, src: string, defer?: boolean, async?: boolean): Promise<unknown>;
/**
 * Doesn't make much sense, does it?!
 * @deprecated
 * @param src base url for the img's src attribute
 * @param id pid for the tracking campaign
 */
export declare function loadNoscript(src: string, id: string): void;
export declare const isObject: (item: {
    [x: string]: unknown;
}) => boolean;
export declare const isBrowser: () => boolean;
