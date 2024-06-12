import React, { useEffect } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Local storage key
const LOCAL_STORAGE_KEY = 'reduxState';

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from local storage", err);
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
  } catch (err) {
    console.error("Could not save state to local storage", err);
  }
};

// Define initial state for counter reducer
const initialCounterState = {
  value: 0,
};

// Define initial state for another reducer
const initialAnotherState = {
  message: 'Hello Redux Toolkit!',
};

// Reducer function for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    case 'DECREMENT':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

// Reducer function for another feature
const anotherReducer = (state = initialAnotherState, action) => {
  return state;
};

// Combine all reducers into a single reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  another: anotherReducer,
});

// Load initial state from local storage
const preloadedState = loadState();

// Create a Redux store
const store = createStore(rootReducer, preloadedState);

// Subscribe to store changes to save the state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

// Counter component
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
