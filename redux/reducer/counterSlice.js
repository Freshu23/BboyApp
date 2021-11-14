import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    events: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.events = [...state.events,action.payload]
    },
  },
})

export const { increment, decrement, incrementByAmount } = eventSlice.actions

export default eventSlice.reducer