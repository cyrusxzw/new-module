export namespace DynamicFormFixture {
  const auSignUp: (
    | (
        | {
            name: string;
            id: string;
            label: string;
            type: string;
            testRef: string;
            options: {
              label: string;
              value: string;
            }[];
            validation: {
              isRequired: {
                message: string;
              };
              maxLength?: undefined;
            };
            styling?: undefined;
          }
        | {
            name: string;
            id: string;
            label: string;
            type: string;
            validation: {
              isRequired: {
                message: string;
              };
              maxLength: {
                value: number;
                message: string;
              };
            };
            styling: {
              flex: number;
            };
            testRef?: undefined;
            options?: undefined;
          }
      )[]
    | {
        name: string;
        id: string;
        label: string;
        type: string;
        validation: {
          isRequired: {
            message: string;
          };
          pattern: {
            value: string;
            message: string;
          };
        };
      }[]
    | {
        name: string;
        id: string;
        label: string;
        type: string;
        subtype: string;
        validation: {
          isRequired: {
            message: string;
          };
        };
      }[]
  )[];
  const krSignUp: (
    | {
        name: string;
        id: string;
        label: string;
        type: string;
        validation: {
          isRequired: {
            message: string;
          };
          maxLength: {
            value: number;
            message: string;
          };
        };
      }[]
    | {
        name: string;
        id: string;
        label: string;
        type: string;
        validation: {
          isRequired: {
            message: string;
          };
          pattern: {
            value: string;
            message: string;
          };
        };
      }[]
    | {
        name: string;
        id: string;
        label: string;
        type: string;
        validation: {
          isRequired: {
            message: string;
          };
        };
      }[]
  )[];
  function onSubmit(formData: any): void;
}
