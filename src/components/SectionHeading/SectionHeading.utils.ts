import type { HeadingLevels } from '~/components/Heading/Heading.types';

const getEyebrowLevel = (
  heading: string,
  isPageHeading = false,
): HeadingLevels =>
  heading ? (isPageHeading ? '2' : '3') : isPageHeading ? '1' : '2';

const getSubHeadingLevel = (
  eyebrow: string,
  heading: string,
  isPageHeading = false,
): HeadingLevels => {
  if (eyebrow) {
    if (heading) {
      return isPageHeading ? '3' : '4';
    }

    return isPageHeading ? '2' : '3';
  }

  if (heading) {
    return isPageHeading ? '2' : '3';
  }

  return isPageHeading ? '1' : '2';
};

export { getEyebrowLevel, getSubHeadingLevel };
