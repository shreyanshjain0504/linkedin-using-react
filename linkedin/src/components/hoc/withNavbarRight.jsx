import React, { useState, useEffect } from 'react';

export function withNavbarRight(NavbarRight) {
  return function MenuToggleWrapper() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
      setIsMenuOpen((prevState) => !prevState);
    }

    useEffect(() => {
      console.log('Menu is now', isMenuOpen ? 'open' : 'closed');
    }, [isMenuOpen]);

    return <NavbarRight isMenuOpen={isMenuOpen} 
                        toggleMenu={toggleMenu} 
            />
  };
}

export default withNavbarRight;
