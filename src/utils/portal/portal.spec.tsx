import { getPortalRoot } from './portal';
import { isInBrowser } from '../environment/environment';

jest.mock('../environment/environment', () => ({
  isInBrowser: jest.fn().mockReturnValue(true),
}));

describe(`portal`, () => {
  beforeEach(() => {
    jest.spyOn(document, 'getElementById');
    jest.spyOn(document, 'createElement');
    jest.spyOn(document.body, 'appendChild').mockImplementation(); // don't want the original function to execute
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe(`when rendered in the browser`, () => {
    const rootId = '01110010011011110110111101110100';

    it(`should return the element with the specified id if it's found`, () => {
      const mockElement = 'element';
      (document.getElementById as jest.Mock).mockReturnValue(mockElement);

      const portalRoot = getPortalRoot(rootId);

      expect(document.getElementById).toHaveBeenCalledWith(rootId);
      expect(portalRoot).toBe(mockElement);
    });

    it(`should create an element and return it if it an existing one is not found`, () => {
      const mockCreatedElement = {
        setAttribute: jest.fn(),
      };
      (document.getElementById as jest.Mock).mockReturnValue(undefined);
      (document.createElement as jest.Mock).mockReturnValue(mockCreatedElement);

      const portalRoot = getPortalRoot(rootId);

      expect(document.createElement).toHaveBeenCalledWith('div');
      expect(mockCreatedElement.setAttribute).toHaveBeenCalledWith(
        'id',
        rootId,
      );
      expect(document.body.appendChild).toHaveBeenCalledWith(
        mockCreatedElement,
      );
      expect(portalRoot).toBe(mockCreatedElement);
    });
  });

  describe(`when rendered in the server`, () => {
    beforeEach(() => {
      (isInBrowser as jest.Mock).mockReturnValue(false);
    });

    it(`should return null`, () => {
      expect(getPortalRoot('')).toBeNull();
    });

    it(`should not call the document methods`, () => {
      getPortalRoot('');

      expect(document.getElementById).not.toHaveBeenCalled();
      expect(document.createElement).not.toHaveBeenCalled();
    });
  });
});
