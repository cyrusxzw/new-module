/* istanbul ignore file */
import React from 'react';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import { Hyperlink } from '~/components/Hyperlink';

const {
  EXTERNAL_NO_ICON_TEXT_LINK,
  EXTERNAL_NO_ICON_BUTTON_LINK,
} = HYPERLINK_STYLE_TYPES;

const BodyCopyFixture = {
  eyebrow: 'Nullam id erat est',
  heading: 'Lorem ipsum dolor sit amet',
  subHeading: 'Nunc dignissim quis arcu a',
  theme: 'dark',
  linkButtonGroup: {
    textAlign: 'left',
    children: (
      <>
        <Hyperlink style={EXTERNAL_NO_ICON_BUTTON_LINK} url="/">
          Proin vulputate dignissim
        </Hyperlink>
        <Hyperlink style={EXTERNAL_NO_ICON_BUTTON_LINK} url="Quisque lacus">
          Quisque lacus dolor
        </Hyperlink>
      </>
    ),
  },
  links: {
    links: [
      {
        id: 'Morbi-id-nulla',
        style: EXTERNAL_NO_ICON_TEXT_LINK,
        children: 'Morbi id nulla',
        url: 'https://aesop.com/',
      },
      {
        id: 'Nullam-ultrices',
        style: EXTERNAL_NO_ICON_TEXT_LINK,
        children: 'Nullam ultrices',
        url: 'https://aesop.com/',
      },
    ],
  },

  copy:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id erat est. Ut convallis, neque id semper fermentum, urna risus gravida nibh, vel molestie sapien leo ac tortor. Nunc dignissim quis arcu a lobortis. Phasellus tempus consequat erat, at egestas elit pulvinar lacinia. Nullam pretium, risus a dictum rhoncus, ex libero cursus erat, dignissim malesuada tortor justo quis enim.',
};

export { BodyCopyFixture };
