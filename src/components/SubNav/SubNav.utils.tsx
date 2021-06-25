import React from 'react';
import { Hyperlink } from '~/components/Hyperlink';
import type { ChangeEvent } from 'react';
import type { GetLinkItems, GetSelectOption } from './SubNav.types';
import styles from './SubNav.module.css';

const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
  window.location.href = event.target.value;
};

const getLinkItems: GetLinkItems = (links, theme) =>
  links.map(({ children, id, hasTargetInNewWindow, style, url, onClick }) => ({
    content: (
      <Hyperlink
        className={styles.link}
        hasTargetInNewWindow={hasTargetInNewWindow}
        onClick={onClick}
        style={style}
        theme={theme}
        url={url}
      >
        {children}
      </Hyperlink>
    ),
    id,
  }));

const getSelectOptions: GetSelectOption = (links) =>
  links.map(({ children, id, url }) => ({
    id,
    label: children,
    value: url,
  }));

export { getLinkItems, getSelectOptions, handleOnChange };
