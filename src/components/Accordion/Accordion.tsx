import React, { forwardRef } from 'react';
import cx from 'classnames';
import {
  Accordion as AccessibleAccordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Collapse } from 'react-collapse';
import { Icon } from '~/components/Icon';
import { isObjectPopulatedArray } from '~/utils/objects';
import type { AccordionProps } from './Accordion.types';
import styles from './Accordion.module.css';

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, id, items, theme = 'dark', wrapperClass }, ref) => {
    const [activeNodes, setIsActiveNodes] = React.useState([]);

    if (!isObjectPopulatedArray(items)) {
      return null;
    }

    const classSet = cx(styles.base, styles[theme], className);
    /** handleOnChange gets passed to the AccessibleAccordion dependency */
    /* istanbul ignore next */
    const handleOnChange = nodes => setIsActiveNodes(nodes);
    const checkIsActive = (id: string) => activeNodes.includes(id);

    return (
      <div
        className={cx(wrapperClass)}
        data-testid="data-testid-Accordion"
        id={id}
        ref={ref}
      >
        <AccessibleAccordion
          allowMultipleExpanded={true}
          allowZeroExpanded={true}
          className={classSet}
          onChange={handleOnChange}
        >
          {items.map(({ content, heading, id }) => (
            <AccordionItem className={styles.item} key={id} uuid={id}>
              <AccordionItemHeading className={styles[theme]}>
                <AccordionItemButton className={styles.button}>
                  <span className={styles.headingCopy}>{heading}</span>
                  <Icon
                    className={styles.icon}
                    height={16}
                    name="downArrow"
                    theme={theme}
                    width={16}
                  />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.panel}>
                <Collapse
                  isOpened={checkIsActive(id)}
                  theme={{ collapse: styles.collapse }}
                >
                  <div className={cx(styles.content, styles[theme])}>
                    {content}
                  </div>
                </Collapse>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </AccessibleAccordion>
      </div>
    );
  },
);

export { Accordion };
