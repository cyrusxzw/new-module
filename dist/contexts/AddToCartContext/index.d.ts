import { FC } from 'react';
import { A as AddToCartContextProps } from '../../sharedChunks/AddToCartContext.types';

declare const AddToCartContextProvider: FC<AddToCartContextProps>;
declare const useAddToCartContext: () => any;

export { AddToCartContextProvider, useAddToCartContext };
