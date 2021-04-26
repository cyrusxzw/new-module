/// <reference types="react" />
declare const useNavBarThemeStore: ({
  navigationAndLogoTheme: navigationAndLogo,
  loginAndCartTheme: loginAndCart,
}: {
  navigationAndLogoTheme: any;
  loginAndCartTheme: any;
}) => {
  loginAndCartTheme: any;
  navigationAndLogoTheme: any;
  setLoginAndCartTheme: import('react').Dispatch<any>;
  setNavigationAndLogoTheme: import('react').Dispatch<any>;
};
export { useNavBarThemeStore };
