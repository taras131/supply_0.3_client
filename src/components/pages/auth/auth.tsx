import React from 'react';
import Card from "../../atoms/card/card";
import Input from "../../molecules/input/input";
import styles from "./auth.module.scss";

const Auth = () => {
    const onInputChange = () => {

    }
    return (
        <Card className={styles.auth_wrapper}>
            <form>
                hello
                <Input
                    inputName="firstMame"
                    labelName="Имя"
                    type="text"
                    value={"jhgi"}
                    placeholder="Введите ваше имя"
                    minLength={2}
                    maxLength={15}
                    required
                    error=""
                    onChange={onInputChange}
                />
                <Input
                    inputName="firstMame"
                    labelName="Имя"
                    type="text"
                    value="jhgi"
                    placeholder="Введите ваше имя"
                    minLength={2}
                    maxLength={15}
                    required
                    error="error"
                    onChange={onInputChange}
                />
            </form>
        </Card>
    );
};

export default Auth;