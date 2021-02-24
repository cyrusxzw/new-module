import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '~/components/Heading';
import { Hidden } from '~/components/Hidden';
import { Hyperlink } from '~/components/Hyperlink';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import cx from 'classnames';
import styles from './FooterBlock.css';

const {
  EXTERNAL_TEXT_LINK,
  INTERNAL_NO_ICON_TEXT_LINK,
} = HYPERLINK_STYLE_TYPES;

const FooterBlock = ({
  className,
  copy,
  heading,
  headingClassName,
  isVisibleOnTabletAndMobile,
  links,
  listClassName,
  listItemClassName,
  theme,
}) => {
  const baseClassSet = cx(styles.base, styles[theme], className);
  const copyClassSet = cx(styles.listItem, styles.copy);
  const dividerClassSet = cx(styles.divider, styles[theme]);
  const headingClassSet = cx(styles.heading, headingClassName);
  const listClassSet = cx(styles.list, listClassName);
  const listItemClassSet = cx(styles.listItem, listItemClassName);

  return (
    <Hidden
      isMedium={!isVisibleOnTabletAndMobile}
      isSmall={!isVisibleOnTabletAndMobile}
    >
      <section className={baseClassSet}>
        {heading && (
          <Heading
            className={headingClassSet}
            hasMediumWeightFont={true}
            level="3"
            size="xXSmall"
            theme="light"
          >
            {heading}
          </Heading>
        )}
        <div className={dividerClassSet} />
        {links?.length && (
          <ul className={listClassSet}>
            {links.map(link => (
              <li key={link.id}>
                <Hyperlink
                  className={listItemClassSet}
                  dataTestRef="FOOTER_LINK"
                  hasTargetInNewWindow={link.openInANewWindow}
                  style={
                    link.openInANewWindow
                      ? EXTERNAL_TEXT_LINK
                      : INTERNAL_NO_ICON_TEXT_LINK
                  }
                  theme={theme}
                  title={link.text}
                  url={link.url}
                >
                  {link.text}
                </Hyperlink>
              </li>
            ))}
          </ul>
        )}
        {copy && <div className={copyClassSet}>{copy}</div>}
      </section>
    </Hidden>
  );
};

FooterBlock.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.node,
  heading: PropTypes.string,
  headingClassName: PropTypes.string,
  isVisibleOnTabletAndMobile: PropTypes.bool,
  links: PropTypes.array,
  listClassName: PropTypes.string,
  listItemClassName: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

FooterBlock.defaultProps = {
  className: undefined,
  copy: undefined,
  heading: undefined,
  headingClassName: undefined,
  isVisibleOnTabletAndMobile: true,
  links: undefined,
  listClassName: undefined,
  listItemClassName: undefined,
  theme: 'dark',
};

export { FooterBlock };
