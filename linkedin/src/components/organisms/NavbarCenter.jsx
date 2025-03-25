import React from 'react';
import IconNavLink from '../molecules/IconNavLink';
import _ from 'lodash'; 

export default function NavbarCenter({ headerLinks }) {
    return (
        <>
            <div className="navbar-center">
                <ul>
                    {_.map(headerLinks, (item) => (
                        <IconNavLink key={item.to} {...item} />
                    ))}
                </ul>
            </div>
        </>
    );
}
