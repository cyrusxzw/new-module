/// <reference types="react" />
export declare const AccordionFixture: {
  id: string;
  items: (
    | {
        id: string;
        heading: string;
        content: string;
      }
    | {
        id: string;
        heading: string;
        content: JSX.Element;
      }
  )[];
};
