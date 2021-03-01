import { useState } from 'react';

const defaultValues = {
  loginAndCartTheme: 'dark',
  navigationAndLogoTheme: 'dark',
};

const useNavBarThemeStore = ({
  navigationAndLogoTheme: navigationAndLogo,
  loginAndCartTheme: loginAndCart,
}) => {
  const [loginAndCartTheme, setLoginAndCartTheme] = useState(
    loginAndCart || defaultValues.loginAndCartTheme,
  );

  const [navigationAndLogoTheme, setNavigationAndLogoTheme] = useState(
    navigationAndLogo || defaultValues.navigationAndLogoTheme,
  );

  return {
    loginAndCartTheme,
    navigationAndLogoTheme,
    setLoginAndCartTheme,
    setNavigationAndLogoTheme,
  };
};

export { useNavBarThemeStore };
