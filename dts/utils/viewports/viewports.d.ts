export namespace CONSTRAINT_KEYS {
  const MIN_WIDTH: string;
  const VIEWPORT: string;
}
export const constraints: {
  [x: string]: string | number;
}[];
export const constraintsByViewport: {};
export function getViewportForWidth(width: any): string | number;
export function ascertainIsSmallOnlyViewport(): boolean;
export function ascertainIsSmallOrMediumOnlyViewport(): boolean;
export function ascertainIsMediumViewport(): boolean;
export function ascertainIsMediumOnlyViewport(): boolean;
export function ascertainIsLargeViewport(): boolean;
export function ascertainIsLargeOnlyViewport(): boolean;
export function ascertainIsLargeOrXLargeOnlyViewport(): boolean;
export function ascertainIsXLargeViewport(): boolean;
export function ascertainIsSmallToXLargeViewport(): boolean;
export function ascertainIsXLargeOnlyViewport(): boolean;
export function ascertainIsXXLargeViewport(): boolean;
