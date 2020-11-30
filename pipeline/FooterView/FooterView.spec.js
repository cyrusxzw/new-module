import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import FooterView from './FooterView';
import FooterViewFixture from './FooterView.fixture';

configure({ adapter: new Adapter() });

describe('<FooterView />', () => {
  it('should be defined', () => {
    expect(FooterView).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render
      .create(
        <FooterView
          siteNavigationPrimary={{
            links: [
              {
                text: FooterViewFixture.siteNavigationPrimary.links[0].text,
                id: FooterViewFixture.siteNavigationPrimary.links[0].id,
                url: FooterViewFixture.siteNavigationPrimary.links[0].url,
                style: FooterViewFixture.siteNavigationPrimary.links[0].style,
              },
            ],
            title: FooterViewFixture.siteNavigationPrimary.title,
          }}
          siteNavigationSecondary={{
            links: [
              {
                text: FooterViewFixture.siteNavigationSecondary.links[0].text,
                id: FooterViewFixture.siteNavigationSecondary.links[0].id,
                url: FooterViewFixture.siteNavigationSecondary.links[0].url,
                style: FooterViewFixture.siteNavigationSecondary.links[0].style,
              },
            ],
            title: FooterViewFixture.siteNavigationSecondary.title,
          }}
          siteNavigationTernary={{
            links: [
              {
                text: FooterViewFixture.siteNavigationTernary.links[0].text,
                id: FooterViewFixture.siteNavigationTernary.links[0].id,
                url: FooterViewFixture.siteNavigationTernary.links[0].url,
                style: FooterViewFixture.siteNavigationTernary.links[0].style,
              },
            ],
            title: FooterViewFixture.siteNavigationTernary.title,
          }}
        />,
      )
      .toJSON();

    expect(container).toMatchSnapshot();
  });
});
