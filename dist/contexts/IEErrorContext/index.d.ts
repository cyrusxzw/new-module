import { ReactNode, ReactElement } from 'react';

declare type IEErrorContextProps = {
    children: ReactNode;
    error?: string | undefined;
};

declare const IEErrorContextProvider: ({ children, error, }: IEErrorContextProps) => ReactElement;
declare const useIEErrorContext: () => string;

export { IEErrorContextProvider, useIEErrorContext };
