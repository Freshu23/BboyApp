import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    events: [],
    currentEvent:{
      name:"no event selected"
    }
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.events = [...state.events,action.payload]
    },
    setCurrentEvent: (state,action)=>{
      state.currentEvent = action.payload
    }
  },
})

export const { setCurrentEvent, incrementByAmount } = eventSlice.actions

export default eventSlice.reducer