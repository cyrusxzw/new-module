import type {
  GetCollectionLists,
  Link,
  NestedCollection,
  NotableNestedCollection,
  StickyNavScrollType,
} from './GlobalNavigation.types';

/** Sticky Banner State Handlers
 * 1. Sticky Nav is managed using the IntersectionObserver API, a buffer div & offset handlers
 * 2. Each Nav view has a boolean (i.e. isCompletelyOnScreen) which is true when buffer div is in full view
 * 3. handleOffsetTopState: updates OffsetTop of nav as above elements (i.e. banners) render in
 * 4. handleStickyBelowThreshold: Resets Nav to default state
 * 5. handleStickyPastThreshold: Sticky state management for nav
 *   - At this point, buffer div is completely off screen (i.e. isCompletelyOnScreen=false)
 *   - Applies isInvisibleStickyNav class if isFixed=true & isHidden=true
 *   - Applies isVisibleStickyNav class if isFixed=false & isHidden=true
 */
const handleOffsetTopState = ({
  currentOffset,
  stickyNavProps,
  setStickyNavProps,
}: StickyNavScrollType) => {
  if (currentOffset !== stickyNavProps.offsetTop) {
    setStickyNavProps({ ...stickyNavProps, offsetTop: currentOffset });
  }
};

const handleStickyBeforeThreshold = ({
  stickyNavProps,
  setStickyNavProps,
}: StickyNavScrollType) => {
  if (window.scrollY <= stickyNavProps.offsetTop && stickyNavProps.isFixed) {
    setStickyNavProps({
      ...stickyNavProps,
      isFixed: false,
      isHidden: false,
    });
  }
};

const handleStickyAfterThreshold = ({
  prevScrollY,
  stickyNavRef,
  stickyNavProps,
  setStickyNavProps,
}: StickyNavScrollType) => {
  const navHeight = stickyNavRef.current.offsetHeight;
  const heightBeforeSticky = navHeight + stickyNavProps.offsetTop;
  if (window.scrollY > heightBeforeSticky) {
    if (window.scrollY < prevScrollY.current && stickyNavProps.isHidden) {
      setStickyNavProps({
        ...stickyNavProps,
        isFixed: true,
        isHidden: false,
      });
    } else if (
      window.scrollY > prevScrollY.current &&
      !stickyNavProps.isHidden
    ) {
      setStickyNavProps({
        ...stickyNavProps,
        isFixed: true,
        isHidden: true,
      });
    }
  }
};

const stickyScrollHandler = ({
  stickyNavRef,
  stickyNavProps,
  setStickyNavProps,
  prevScrollY,
}: StickyNavScrollType): void => {
  if (stickyNavRef?.current) {
    const currentOffset = (stickyNavRef.current.offsetParent as HTMLDivElement)
      .offsetTop;

    handleOffsetTopState({ currentOffset, stickyNavProps, setStickyNavProps });
    handleStickyBeforeThreshold({ stickyNavProps, setStickyNavProps });
    handleStickyAfterThreshold({
      prevScrollY,
      stickyNavRef,
      stickyNavProps,
      setStickyNavProps,
    });

    prevScrollY.current = window.scrollY;
  }
};

const getCollectionLists: GetCollectionLists = (items) => {
  const topLevelCollections: Link[] = [];
  const nestedCollections: NestedCollection[] = [];
  const notableNestedCollections: NotableNestedCollection[] = [];
  /** @todo
   * Future-proof edge case items
   */
  let taxonomyOfDesignElement = null;

  /** @todo
   * Refactor into individual functions?
   */
  items.forEach((item) => {
    if (item.type === 'link') {
      if (item.id === 'taxonomy-of-design') {
        taxonomyOfDesignElement = item;
      } else {
        topLevelCollections.push(item);
      }
    } else if (item.type === 'nested-collection') {
      nestedCollections.push(item);
    } else if (item.type === 'notable-nested-collection') {
      notableNestedCollections.push(item);
    }
  });

  return {
    nestedCollections,
    notableNestedCollections,
    taxonomyOfDesignElement,
    topLevelCollections,
  };
};

export { getCollectionLists, stickyScrollHandler };
