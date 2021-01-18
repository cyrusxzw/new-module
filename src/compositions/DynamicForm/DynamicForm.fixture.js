const DynamicFormFixture = {
  auSignUp: [
    [
      {
        name: 'title',
        id: 'title',
        label: 'Title',
        type: 'Select',
        options: [
          {
            label: 'Mr',
            value: 'mr',
          },
          {
            label: 'Mrs',
            value: 'mrs',
          },
          {
            label: 'Miss',
            value: 'miss',
          },
        ],
        validation: {
          isRequired: {
            message: 'Please select your title',
          },
        },
      },
      {
        name: 'firstname',
        id: 'firstname',
        label: 'First name',
        type: 'TextField',
        validation: {
          isRequired: {
            message: 'Please enter your first name',
          },
          maxLength: {
            value: 30,
            message: 'Your first name is too long',
          },
        },
        styling: {
          flex: 3,
        },
      },
      {
        name: 'lastname',
        id: 'lastname',
        label: 'Last name',
        type: 'TextField',
        validation: {
          isRequired: {
            message: 'Please enter your Last name',
          },
          maxLength: {
            value: 30,
            message: 'Your last name is too long',
          },
        },
        styling: {
          flex: 3,
        },
      },
    ],
    [
      {
        name: 'email',
        id: 'email',
        label: 'Email address',
        type: 'TextField',
        validation: {
          isRequired: {
            message: 'Please enter your email address',
          },
          pattern: {
            value: '^bruce@batcave.com$',
            message: 'Your email must be bruce@batcave.com',
          },
        },
      },
    ],
    [
      {
        name: 'password',
        id: 'password',
        label: 'Password',
        type: 'TextField',
        subtype: 'password',
        validation: {
          isRequired: {
            message: 'Please enter your password',
          },
        },
      },
    ],
  ],
  krSignUp: [
    [
      {
        name: 'lastname',
        id: 'lastname',
        label: '성',
        type: 'TextField',
        validation: {
          isRequired: {
            message: 'Please enter your Last name',
          },
          maxLength: {
            value: 30,
            message: 'Your last name is too long',
          },
        },
      },
    ],
    [
      {
        name: 'firstname',
        id: 'firstname',
        label: '이름',
        type: 'TextField',
        validation: {
          isRequired: {
            message: 'Please enter your first name',
          },
          maxLength: {
            value: 30,
            message: 'Your first name is too long',
          },
        },
      },
    ],
    [
      {
        name: 'email',
        id: 'email',
        label: '이메일 주소',
        type: 'TextField',
        validation: {
          isRequired: {
            message: 'Please enter your email address',
          },
          pattern: {
            value: '^bruce@batcave.com$',
            message: 'Your email must be bruce@batcave.com',
          },
        },
      },
    ],
    [
      {
        name: 'ageCheck',
        id: 'ageCheck',
        label: '나는 14 세 이상입니다',
        type: 'Checkbox',
        validation: {
          isRequired: {
            message: 'Please check that you are older than 14 years old',
          },
        },
      },
    ],
  ],
  onSubmit: formData => {
    // eslint-disable-next-line no-console
    console.log(formData);
    // eslint-disable-next-line no-alert
    alert('Check the console for submitted form data');
  },
};

export { DynamicFormFixture };
