import React from 'react'
import IconNavLink from '../molecules/IconNavLink';

export default function NavbarCenter({ headerLinks }) {
    return (
        <>
            <div className="navbar-center">
                <ul>
                    {headerLinks.map(item =>
                        <IconNavLink {...item} />
                    )}
                </ul>
            </div>
        </>
    )
}
