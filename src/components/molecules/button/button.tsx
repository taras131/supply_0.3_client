import React, {FC} from 'react';
import classnames from "classnames";
import styles from "./button.module.scss";

/**
 * @description Компонент кнопки с иконкой или без.
 *
 * - text - текст кнопки
 * - view - string - внешний вид кнопки: 'primary', 'secondary', 'text'
 * - onClick - function - функция-обработчик клика
 * - disabled - boolean - флаг отключения кнопки
 * - type - string - тип кнопки: 'button', 'submit'
 */

interface IButton {
    text: string
    isDisabled?: boolean
    type?: "button" | "submit"
    view: "primary" | "secondary" | "text"
    onClick?: () => void
}

const Button: FC<IButton> = ({
                                 text,
                                 isDisabled = false,
                                 view,
                                 type,
                                 onClick
                             }) => {
    const btnClasses = classnames(
        styles.wrapper,
        styles[view ?? "primary"],
    );
    return (
        <button className={btnClasses}
                type={type === 'submit' ? 'submit' : 'button'}
                onClick={onClick}
                disabled={isDisabled}>
            {text}
        </button>
    );
};

export default Button;