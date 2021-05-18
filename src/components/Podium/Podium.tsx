import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useThemeContext, ThemeContextProvider } from '~/contexts';
import { Transition } from '~/components/Transition';
import type { PodiumProps } from './Podium.types';
import styles from './Podium.module.css';

const Podium = forwardRef<HTMLDivElement, PodiumProps>(function PodiumRef(
  {
    backgroundColor,
    children,
    className,
    'data-test-ref': dataTestRef,
    horizontalPadding = 'none',
    id,
    isActive = true,
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
    verticalPadding = 'none',
  },
  ref,
) {
  const currentTheme = useThemeContext(theme, 'dark');
  const style = backgroundColor ? { backgroundColor } : undefined;
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

  return (
    <ThemeContextProvider theme={currentTheme}>
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

export { Podium };
