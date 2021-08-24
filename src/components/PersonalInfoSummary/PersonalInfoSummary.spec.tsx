import React from 'react';
import { render, screen } from '@testing-library/react';
import { PersonalInfoSummary } from './PersonalInfoSummary';
import * as utils from './utils/utils';
import { PersonalInfoSummaryFixture } from './PersonalInfoSummary.fixture';

const mockPrefix = 'Dr';
const { userDetails, prefixOptions } = PersonalInfoSummaryFixture;

describe('<PersonalInfoSummary />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(utils, 'matchCodeToText').mockImplementation(() => mockPrefix);
  });

  it('should not render elements if the userDetails are missing', () => {
    render(<PersonalInfoSummary />);
    const component = screen.queryByTestId('personal-info-summary');

    expect(component).not.toBeInTheDocument();
  });

  it(`should correctly call matchCodeToText`, () => {
    render(
      <PersonalInfoSummary
        prefixOptions={prefixOptions}
        userDetails={userDetails}
      />,
    );

    expect(utils.matchCodeToText).toHaveBeenCalledWith(
      prefixOptions,
      userDetails.prefix,
    );
  });

  it(`should render all the available fields`, () => {
    const { firstName, lastName, dateOfBirth, email, suffix } = userDetails;
    render(<PersonalInfoSummary userDetails={userDetails} />);

    expect(
      screen.getByText(`${mockPrefix} ${firstName} ${lastName} ${suffix}`),
    ).toBeInTheDocument();
    expect(screen.getByText(email)).toBeInTheDocument();
    expect(screen.getByText(dateOfBirth)).toBeInTheDocument();
  });

  it(`should reverse the order of the name if shouldSwapFullNameOrder is true`, () => {
    const { firstName, lastName, suffix } = userDetails;
    render(
      <PersonalInfoSummary
        shouldSwapFullNameOrder={true}
        userDetails={userDetails}
      />,
    );

    expect(
      screen.getByText(`${mockPrefix} ${lastName}${firstName} ${suffix}`),
    ).toBeInTheDocument();
  });

  it(`should hide the prefix if shouldShowPrefix is false`, () => {
    const { firstName, lastName, suffix } = userDetails;
    render(
      <PersonalInfoSummary
        shouldShowPrefix={false}
        userDetails={userDetails}
      />,
    );

    expect(
      screen.getByText(`${firstName} ${lastName} ${suffix}`),
    ).toBeInTheDocument();
  });

  it(`should render an empty suffix if one is not provided`, () => {
    const { firstName, lastName } = userDetails;
    render(
      <PersonalInfoSummary
        userDetails={{ ...userDetails, suffix: undefined }}
      />,
    );

    expect(
      screen.getByText(`${mockPrefix} ${firstName} ${lastName}`),
    ).toBeInTheDocument();
  });
});
