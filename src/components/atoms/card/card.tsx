import React, {FC, ReactElement} from 'react';
import styles from "./card.module.scss";
import classnames from 'classnames';

interface ICard {
    className: string
    children: ReactElement
}
const Card: FC<ICard> = ({className, children}) => {
    return (
        <div className={ classnames(styles.wrapper, className)}>
            {children}
        </div>
    );
};

export default Card;