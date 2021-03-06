import React from 'react';
import { Heading } from '~/components/Heading';
import { Hidden } from '~/components/Hidden';
import { Hyperlink } from '~/components/Hyperlink';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import cx from 'classnames';
import type { FooterBlockType } from './FooterBlock.types';
import styles from './FooterBlock.css';

const {
  EXTERNAL_TEXT_LINK,
  INTERNAL_NO_ICON_TEXT_LINK,
} = HYPERLINK_STYLE_TYPES;

const FooterBlock: FooterBlockType = ({
  className,
  copy,
  heading,
  headingClassName,
  isVisibleOnTabletAndMobile = true,
  links,
  listClassName,
  listItemClassName,
  theme = 'dark',
}) => {
  const baseClassSet = cx(styles.base, styles[theme], className);
  const copyClassSet = cx(styles.listItem, styles.copy);
  const dividerClassSet = cx(styles.divider, styles[theme]);
  const headingClassSet = cx(styles.heading, headingClassName);
  const listClassSet = cx(styles.list, listClassName);
  const listItemClassSet = cx(styles.listItem, listItemClassName);

  return (
    <Hidden when={isVisibleOnTabletAndMobile ? [] : ['sm', 'md']}>
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
            {links.map((link) => (
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

export { FooterBlock };
