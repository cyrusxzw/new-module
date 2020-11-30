import React from 'react';
import renderer from 'react-test-renderer';
import Audio from './Audio';
import AudioFixture from './Audio.fixture';

describe('<Audio />', () => {
  it('should be defined', () => {
    expect(Audio).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Audio
          artistName={AudioFixture.artistName}
          audioUrl={AudioFixture.audioUrl}
          copy={AudioFixture.copy}
          hasAutoPlay={AudioFixture.hasAutoPlay}
          id={AudioFixture.id}
          progressColor={AudioFixture.progressColor}
          trackTitle={AudioFixture.trackTitle}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
