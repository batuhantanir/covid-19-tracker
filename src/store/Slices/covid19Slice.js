import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const covid19Selector = (state) => state.covid19.data;
export const isLoadingSelector = (state) => state.covid19.isLoading;
export const errorSelector = (state) => state.covid19.error;
export const countrySelector = (state) => state.covid19.country;

export const fetchCovid19 = createAsyncThunk(
  "covid19/fetchCovid19",
  async ({ country }) => {
    const option = {
      method: "GET",
      headers: {
        authorization: import.meta.env.VITE_COVID_TRACKER_API_KEY,
        "content-type": "application/json",
      },
    };
    const response = await axios.request(
      `https://api.collectapi.com/corona/countriesData?country=${country}`,
      option
    );
    const data = response.data;
    return data.result;
  }
);

export const covid19Slice = createSlice({
  name: "covid19",
  initialState: {
    data: [],
    isLoading: true,
    error: null,
    country: "China",
  },
  reducers: {
    setCountry: (state, { payload }) => {
      payload != "" && (state.country = payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCovid19.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCovid19.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCovid19.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setCountry } = covid19Slice.actions;
export default covid19Slice.reducer;
