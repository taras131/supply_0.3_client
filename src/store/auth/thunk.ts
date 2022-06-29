import {createAsyncThunk} from "@reduxjs/toolkit";

const login = createAsyncThunk(
    'auth/login',
    // if you type your function argument here
    async (userId: number) => {
        try {

        } catch (e) {

        }
    }
)
const registration = createAsyncThunk(
    'auth/registration',
    async (userId: number) => {
        try {

        } catch (e) {

        }
    }
)
