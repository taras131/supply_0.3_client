import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import styles from "./header-link.module.scss";

interface IHeaderLink {
    path: string,
    title: string
}

const HeaderLink: FC<IHeaderLink> = ({path, title}) => {
    return (
        <NavLink to={path} className={styles.link} end>
            {title}
        </NavLink>
    );
};

export default HeaderLink;