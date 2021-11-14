import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './reducer/counterSlice';

export default configureStore({
  reducer: {
    event: eventReducer,
  },
})