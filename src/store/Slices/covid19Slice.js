import { createSlice } from "@reduxjs/toolkit";



export const covid19Slice = createSlice({
    name: "covid19",
    initialState: {
        data:[],
    },
    reducers: {
        setCovid19: (state, action) => {
            state.covid19 = action.payload;
        },
    },
})