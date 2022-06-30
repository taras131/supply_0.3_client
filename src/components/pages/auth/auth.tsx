import React from 'react';
import Card from "../../atoms/card/card";
import Input from "../../molecules/input/input";
import useFormWithValidation from "../../../hooks/useFormWithValidation";
import styles from "./auth.module.scss";

const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    role: "",
    email: "",
    password: "",
}
const initialErrors = {
    firstName: "",
    middleName: "",
    lastName: "",
    role: "",
    email: "",
    password: "",
}

const Auth = () => {
    const {handleChange, isValid, errors, values, setValues, setIsValid} =
        useFormWithValidation(initialValues, initialErrors);
    const onSubmit = () => {

    }
    return (
        <div className={styles.wrapper}>
            <Card className={styles.form_wrapper}>
                <form name="accountData"
                      onSubmit={onSubmit}>
                    <h2>Регистрация</h2>
                    <Input
                        inputName="firstName"
                        labelName="Имя"
                        type="text"
                        value={values.firstName}
                        placeholder="Введите ваше имя"
                        minLength={2}
                        maxLength={15}
                        required
                        error={errors.firstName}
                        onChange={handleChange}
                    />
                    <Input
                        inputName="middleName"
                        labelName="Отчество"
                        type="text"
                        value={values.middleName}
                        placeholder="Введите ваше отчество"
                        minLength={5}
                        maxLength={15}
                        required
                        error={errors.middleName}
                        onChange={handleChange}
                    />
                    <Input
                        inputName="lastName"
                        labelName="Фамилия"
                        type="text"
                        value={values.lastName}
                        placeholder="Введите вашу фамилию"
                        minLength={2}
                        maxLength={20}
                        required
                        error={errors.lastName}
                        onChange={handleChange}
                    />
                    <Input
                        inputName="role"
                        labelName="Должность"
                        type="text"
                        value={values.role}
                        placeholder="Введите вашу должность"
                        minLength={5}
                        maxLength={15}
                        required
                        error={errors.role}
                        onChange={handleChange}
                    />
                    <Input
                        inputName="email"
                        labelName="Элетронная почта"
                        type="email"
                        value={values.email}
                        placeholder="Введите ваш email"
                        minLength={2}
                        maxLength={25}
                        required
                        error={errors.email}
                        onChange={handleChange}
                    />
                    <Input
                        inputName="password"
                        labelName="Пароль"
                        type="password"
                        value={values.password}
                        placeholder="Придумайте пароль"
                        minLength={4}
                        maxLength={15}
                        required
                        error={errors.password}
                        onChange={handleChange}
                    />
                </form>
            </Card>
        </div>
    );
};

export default Auth;