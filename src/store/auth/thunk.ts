import {createAsyncThunk} from "@reduxjs/toolkit";

const login = createAsyncThunk(
    'auth/login',
    // if you type your function argument here
    async (userId: number) => {
        const response = await fetch(`https://reqres.in/api/users/${userId}`)
        return (await response.json()) as Returned
    }
)
const registration = createAsyncThunk(
    'auth/registration',
    // if you type your function argument here
    async (userId: number) => {
        const response = await fetch(`https://reqres.in/api/users/${userId}`)
        return (await response.json()) as Returned
    }
)
