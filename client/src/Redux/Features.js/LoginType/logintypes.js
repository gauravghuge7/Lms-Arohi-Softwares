import { createSlice } from "@reduxjs/toolkit";

const loginType = {
    userLogin: null,
}


export const loginTypeSlice = createSlice({

    name: 'loginType',
    initialState: loginType,
})