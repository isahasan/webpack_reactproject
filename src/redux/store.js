import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './Features/counterSlice'

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer
  },
})