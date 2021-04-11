import React from 'react';
import { render, screen } from '@testing-library/react';
import { TextOverFullWidthAsset } from './TextOverFullWidthAsset';
import { TextOverFullWidthAssetFixture } from './TextOverFullWidthAsset.fixture';

describe('<TextOverFullWidthAsset />', () => {
  it('should be defined', () => {
    expect(TextOverFullWidthAsset).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <TextOverFullWidthAsset
        backgroundImage={TextOverFullWidthAssetFixture.backgroundImage}
        backgroundVideo={TextOverFullWidthAssetFixture.backgroundVideo}
        className={TextOverFullWidthAssetFixture.className}
        content={TextOverFullWidthAssetFixture.content}
        copyHeight={TextOverFullWidthAssetFixture.copyHeight}
        copySide={TextOverFullWidthAssetFixture.copySide}
        mediaType={TextOverFullWidthAssetFixture.mediaType}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render a given image if the mediaType is Image', () => {
    render(
      <TextOverFullWidthAsset
        backgroundImage={TextOverFullWidthAssetFixture.backgroundImage}
        content=""
        mediaType="Image"
      />,
    );

    const child = screen.getByRole('img', {
      name: /textoverfullwidthasset-backgroundimage-alttext/i,
    });

    expect(child).toBeInTheDocument();
  });

  /**
   * Known issue in testing output: https://github.com/testing-library/react-testing-library/issues/470
   */
  it('should render a given video if the mediaType is Video', () => {
    render(
      <TextOverFullWidthAsset
        backgroundVideo={TextOverFullWidthAssetFixture.backgroundVideo}
        content=""
        mediaType="Video"
      />,
    );

    const child = screen.getByTestId(/data-testid-VideoPlayer/i);

    expect(child).toBeInTheDocument();
  });
});

describe('<TextOverFullWidthAsset /> required props', () => {
  beforeAll(() => {
    jest.spyOn(global.console, 'error').mockImplementation(() => undefined);
  });

  afterAll(() => {
    global.console.error.mockRestore();
  });

  it('should not render anything and throw console error if content and mediaType are not valid', () => {
    render(<TextOverFullWidthAsset content="" mediaType="Audio" />);

    const child = screen.queryByTestId(/data-testid-TextOverFullWidthAsset/i);

    expect(child).not.toBeInTheDocument();
    expect(console.error).toHaveBeenCalledTimes(1); // eslint-disable-line no-console
  });
});
