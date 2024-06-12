import React from 'react';
import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Define initial state for counter reducer
const initialCounterState = {
  value: 0,
};

// Create a counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Define initial state for another reducer
const initialAnotherState = {
  message: 'Hello Redux Toolkit!',
};

// Create another slice
const anotherSlice = createSlice({
  name: 'another',
  initialState: initialAnotherState,
  reducers: {},
});

// Combine all reducers into a single reducer
const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  another: anotherSlice.reducer,
});

// Create a Redux store
const store = configureStore({
  reducer: rootReducer,
});

// Counter component
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>Increment</button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>Decrement</button>
    </div>
  );
};

// Main App component
const CounterAppNewStyle = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default CounterAppNewStyle;
