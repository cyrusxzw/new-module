declare type UseScriptOptions = {
    async?: boolean;
    dataSet?: {
        [key: string]: string;
    };
    defer?: boolean;
    id?: string;
    onLoad?: () => void;
    shouldCheckForExisting?: boolean;
    src?: string;
};
declare type UseScriptReturn = [boolean, ErrorEvent];
declare type UseScript = (options: UseScriptOptions) => UseScriptReturn;

declare const useScript: UseScript;

export { useScript };
