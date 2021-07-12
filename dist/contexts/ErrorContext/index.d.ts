import { ReactNode, ReactElement } from 'react';

declare type ErrorContextProps = {
    children: ReactNode;
    error?: string;
};

declare const ErrorContextProvider: ({ children, error, }: ErrorContextProps) => ReactElement;
declare const useErrorContext: () => string;

export { ErrorContextProvider, useErrorContext };
