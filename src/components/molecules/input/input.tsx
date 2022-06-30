import React, {FC} from 'react';
import classNames from "classnames";
import styles from "./input.module.scss";

/**
 * @description Компонент инпут с основной стилизацией (активное и неактивное состояние).
 *
 * - labelName - string - заголовок инпута, необязательный prop, не должен быть пустой строкой
 * - inputName - string - имя инпута и id
 * - type - string - тип инпута
 * - value - string - значение инпута
 * - placeholder - string - текст подсказки поля ввода
 * - error - string - текст ошибки валидации, необязательный prop
 * - disabled - bool - контроль возможности изменения инпута
 * - onChange - func - обработчик изменения значения инпута
 */

interface IInput {
    inputName: string
    labelName: string
    type: string
    value: string
    placeholder: string
    disabled?: boolean | false,
    minLength: number,
    maxLength: number,
    required: boolean,
    error: string,
    onChange: () => void
}

const Input: FC<IInput> = ({
                               labelName,
                               inputName,
                               type,
                               value,
                               placeholder,
                               disabled,
                               minLength,
                               maxLength,
                               required,
                               error,
                               onChange,
                           }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={inputName}>
                {labelName}
            </label>
            <input id={inputName}
                   name={inputName}
                   type={type}
                   value={value}
                   placeholder={placeholder}
                   disabled={disabled}
                   minLength={minLength}
                   maxLength={maxLength}
                   required={required}
                   onChange={onChange}
                   className={classNames(styles.input, {
                       [styles.input_hidden]: type === 'file',
                       [styles.input_warned]: error,
                   })}
            />
            <span className={styles.error}>{error && error.split(".")[0]}</span>
        </div>
    );
};

export default Input;