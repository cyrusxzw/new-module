import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  Accordion as AccessibleAccordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Collapse } from 'react-collapse';
import Icon from '~/components/Icon';
import { isObjectPopulatedArray } from '~/utils/objects';
import styles from './Accordion.module.css';

const Accordion = forwardRef(
  ({ className, id, items, theme, wrapperClass }, ref) => {
    const [activeNodes, setIsActiveNodes] = React.useState([]);

    if (!isObjectPopulatedArray(items)) {
      return null;
    }

    const classSet = cx(styles.base, styles[theme], className);
    /** handleOnChange gets passed to the AccessibleAccordion dependency */
    /* istanbul ignore next */
    const handleOnChange = nodes => setIsActiveNodes(nodes);
    const checkIsActive = id => activeNodes.includes(id);

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
              <AccordionItemHeading
                className={cx(styles.heading, styles[theme])}
              >
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

Accordion.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      heading: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  theme: PropTypes.oneOf(['dark', 'light']),
  wrapperClass: PropTypes.string,
};

Accordion.defaultProps = {
  className: undefined,
  id: undefined,
  items: undefined,
  theme: 'dark',
  wrapperClass: undefined,
};

export default Accordion;
