import { configureStore } from '@reduxjs/toolkit';
import { amazonSlice } from './slice';

export const store = configureStore({
  reducer: amazonSlice,
});
