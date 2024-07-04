export interface Options {
    bootstrap: boolean;
    onReady(args?: unknown[]): unknown;
    onError(err: Error): void;
    customResourceURL: string;
    customNoscriptURL: string;
    deferScriptLoad: boolean;
    enabled: boolean;
    disableScriptLoad: boolean;
    appName: string;
    globalObjectName: "fbq";
    config: {
        id: string;
    };
}
export declare const getDefaultOptions: () => Options;
export declare const setOptions: (_options: Partial<Options>) => void;
export declare const getOptions: () => Options;
