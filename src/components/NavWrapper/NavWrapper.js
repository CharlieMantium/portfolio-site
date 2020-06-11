import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';
import NavBar from 'components/NavBar/NavBar';

const NavWrapper = () => {
  const [isNavActive, setNavActive] = useState(false);
  const navActiveToggle = () => setNavActive(!isNavActive);
  NavWrapper.handleClickOutside = () => setNavActive(false);
  return (
    <div>
      <HamburgerMenu
        isNavActive={isNavActive}
        navActiveToggle={navActiveToggle}
      />
      <NavBar isNavActive={isNavActive} />
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => NavWrapper.handleClickOutside,
};

export default onClickOutside(NavWrapper, clickOutsideConfig);
