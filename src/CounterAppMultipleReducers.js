import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

// Initial state for counter reducer
const initialCounterState = {
  value: 0,
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

// Initial state for another reducer
const initialAnotherState = {
  message: 'Hello Redux!',
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

// Create a Redux store
const store = createStore(rootReducer);

// Counter component
class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter: {this.props.value}</h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

// Connect Redux state and actions to the Counter component
const mapStateToProps = (state) => {
  return {
    value: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// Main App component
const CounterAppMultipleReducers = () => {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
};

export default CounterAppMultipleReducers;
