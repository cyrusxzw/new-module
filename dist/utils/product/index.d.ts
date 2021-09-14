declare type Variant = {
    size?: string;
    sku?: string;
};
declare type RadioOptions = {
    label: string;
    value: string;
};

declare const getVariantRadioOptions: (variants: Variant[]) => RadioOptions[];

export { getVariantRadioOptions };
