import React from 'react';
import styles from './header.module.scss';
import {Link} from "react-router-dom";
import {routes} from "../../../utils/constants";
import HeaderLink from "../../molecules/header-link/header-link";

const Header = () => {
    const links = [routes.request, routes.users, routes.profile, routes.registration]
    const headerLinks = links.map(link => {
        return (
            <li key={link.path}>
                <HeaderLink {...link}/>
            </li>
        )
    })
    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <Link to={routes.invoice.path} className={styles.link}>
                    <h1>{routes.invoice.title}</h1>
                </Link>
                <nav>
                    <ul className={styles.menu}>
                        {headerLinks}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;