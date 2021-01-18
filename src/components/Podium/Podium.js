import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ThemeContextProvider } from '~/contexts';
import { Transition } from '~/components/Transition';
import styles from './Podium.module.css';

const Podium = forwardRef(function PodiumRef(
  {
    backgroundColor,
    children,
    className,
    'data-test-ref': dataTestRef,
    horizontalPadding,
    id,
    isActive,
    isActiveOnMount,
    isHorizontalFlushOnLarge,
    isHorizontalFlushOnMedium,
    isHorizontalFlushOnSmall,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    theme,
    transition,
    verticalPadding,
  },
  ref,
) {
  const classSet = cx(
    styles.base,
    styles[`${paddingBottom ? paddingBottom : verticalPadding}PaddingBottom`],
    styles[`${paddingLeft ? paddingLeft : horizontalPadding}PaddingLeft`],
    styles[`${paddingRight ? paddingRight : horizontalPadding}PaddingRight`],
    styles[`${paddingTop ? paddingTop : verticalPadding}PaddingTop`],
    { [styles.horizontalFlushOnSmall]: isHorizontalFlushOnSmall },
    { [styles.horizontalFlushOnMedium]: isHorizontalFlushOnMedium },
    { [styles.horizontalFlushOnLarge]: isHorizontalFlushOnLarge },
    className,
  );

  const style = backgroundColor ? { backgroundColor } : undefined;

  return (
    <ThemeContextProvider theme={theme}>
      <Transition isActiveOnMount={true} type={transition}>
        <section
          className={classSet}
          data-test-ref={dataTestRef}
          id={id}
          style={style}
        >
          <Transition
            isActive={isActive}
            isActiveOnMount={isActiveOnMount}
            type={transition}
          >
            <div ref={ref}>{children}</div>
          </Transition>
        </section>
      </Transition>
    </ThemeContextProvider>
  );
});

Podium.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  'data-test-ref': PropTypes.string,
  horizontalPadding: PropTypes.oneOf(['none', 'small']),
  id: PropTypes.string,
  isActive: PropTypes.bool,
  isActiveOnMount: PropTypes.bool,
  isHorizontalFlushOnLarge: PropTypes.bool,
  isHorizontalFlushOnMedium: PropTypes.bool,
  isHorizontalFlushOnSmall: PropTypes.bool,
  paddingBottom: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  paddingLeft: PropTypes.oneOf(['none', 'small']),
  paddingRight: PropTypes.oneOf(['none', 'small']),
  paddingTop: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  theme: PropTypes.oneOf(['dark', 'light']),
  transition: PropTypes.oneOf([
    'fade',
    'shiftInDown',
    'shiftInLeft',
    'slideDown',
    'slideRight',
    'slowFade',
    'zoom',
  ]),
  verticalPadding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
};

Podium.defaultProps = {
  backgroundColor: undefined,
  children: undefined,
  className: undefined,
  'data-test-ref': undefined,
  horizontalPadding: 'none',
  id: undefined,
  isActive: true,
  isActiveOnMount: undefined,
  isHorizontalFlushOnLarge: undefined,
  isHorizontalFlushOnMedium: undefined,
  isHorizontalFlushOnSmall: undefined,
  paddingBottom: undefined,
  paddingLeft: undefined,
  paddingRight: undefined,
  paddingTop: undefined,
  theme: undefined,
  transition: undefined,
  verticalPadding: 'none',
};

export { Podium };
