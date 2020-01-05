import React from 'react';
import cx from 'classnames';
import AuxOpenCartButton from '~/components/elements/AuxOpenCartButton';
import CartView from '~/components/views/CartView';
import CartViewFixture from '~/components/views/CartView/CartView.fixture';
import MainNavigation from './components/MainNavigation';
import NotificationBanner from '~/components/layouts/NotificationBanner';
import UserSession from './components/UserSession';
import PROP_TYPES from './HeaderView.types';
import styles from './HeaderView.module.css';

const HeaderView = ({ className }) => {
  const [isCartVisible, setIsCartVisible] = React.useState(false);
  const classSet = cx(styles.base, className);

  const hideCart = () => setIsCartVisible(false);
  const showCart = () => setIsCartVisible(true);

  return (
    <header className={classSet}>
      <NotificationBanner />
      <CartView
        copy={CartViewFixture.copy}
        handleOnClose={hideCart}
        isVisible={isCartVisible}
      />
      <div className={styles.wrapper}>
        <AuxOpenCartButton handleShow={showCart} />
        <MainNavigation />
        <UserSession
          className={styles.userSessionWrapper}
          handleOnCartClick={showCart}
        />
      </div>
    </header>
  );
};

HeaderView.propTypes = PROP_TYPES;

export default HeaderView;
