import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './TwoColumnLayout.module.css';

const TwoColumnLayout = ({
  childrenClassNames,
  className,
  content,
  hasRightPadding,
  id,
  isReversed,
  sidebar,
  theme,
}) => {
  const classSet = cx(
    styles.base,
    { [styles.reverse]: isReversed },
    { [styles.contentOnly]: !sidebar },
    styles[theme],
    className,
  );
  const contentClassSet = cx(
    styles.content,
    { [styles.fullWidth]: !hasRightPadding },
    childrenClassNames.content,
  );
  const sidebarClassSet = cx(styles.sidebar, childrenClassNames.sidebar);

  return (
    <div className={classSet} id={id}>
      <div className={contentClassSet} id="mainColumn">
        {content}
      </div>
      {sidebar && (
        <aside className={sidebarClassSet} id="sidebarColum">
          {sidebar}
        </aside>
      )}
    </div>
  );
};

TwoColumnLayout.propTypes = {
  childrenClassNames: PropTypes.shape({
    sidebar: PropTypes.string,
    content: PropTypes.string,
  }),
  className: PropTypes.string,
  content: PropTypes.any.isRequired,
  hasRightPadding: PropTypes.bool,
  id: PropTypes.string,
  isReversed: PropTypes.bool,
  sidebar: PropTypes.any,
  theme: PropTypes.oneOf(['dark', 'light']),
};

TwoColumnLayout.defaultProps = {
  childrenClassNames: { sidebar: undefined, content: undefined },
  className: undefined,
  content: undefined,
  hasRightPadding: true,
  id: undefined,
  isReversed: true,
  sidebar: undefined,
  theme: 'dark',
};

export default TwoColumnLayout;
