import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../redux/buySlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});