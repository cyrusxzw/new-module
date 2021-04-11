import { isInBrowser } from '~/utils/environment';

const getPortalRoot = (id: string): HTMLElement | null => {
  let portalRoot = null;

  if (isInBrowser()) {
    portalRoot = document.getElementById(id);

    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.setAttribute('id', id);
      document.body.appendChild(portalRoot);
    }
  }

  return portalRoot;
};

export { getPortalRoot };
