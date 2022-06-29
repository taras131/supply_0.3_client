import {createSlice} from "@reduxjs/toolkit";

interface IAuthState {
    isAuth: boolean,
    isLoading: boolean,
    errorMessage: string
}

const initialState: IAuthState = {
    isAuth: false,
    isLoading: false,
    errorMessage: ''
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {}
})

export default authSlice.reducer;




