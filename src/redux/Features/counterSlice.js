import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  increamentnumber: 0,
  loading: false,
  value: 0,
  error: "",
};

export const fetchUserByID = createAsyncThunk("user/fetchUserData", () => {
 return false
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.increamentnumber += 1;
    },
    decrement: (state) => {
      state.increamentnumber -= 1;
    },
    incrementByAmount: (state, action) => {
      state.increamentnumber += action.payload;
    },
  },
  extraReducers: (builders) => {
    builders.addCase(fetchUserByID.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(fetchUserByID.fulfilled, (state, action) => {
      console.log("action", action);

      state.loading = false;
      state.increamentnumber = action.payload;
    });
    builders.addCase(fetchUserByID.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });
  },
});

export const { increament, decrement, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
