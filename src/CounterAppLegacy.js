import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Initial state
const initialState = {
  value: 0,
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    case 'DECREMENT':
      return { ...state, value: state.value - 1 };
    case 'INCREMENT_BY_AMOUNT':
      return { ...state, value: state.value + action.payload };
    default:
      return state;
  }
};

// Create a Redux store
const store = createStore(counterReducer);

// Counter component
class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter: {this.props.value}</h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <button onClick={() => this.props.incrementByAmount(5)}>Increment by 5</button>
      </div>
    );
  }
}

// Connect Redux state and actions to the Counter component
const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    incrementByAmount: (amount) => dispatch({ type: 'INCREMENT_BY_AMOUNT', payload: amount }),
  };
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// Main App component
const CounterAppLegacy = () => {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
};

export default CounterAppLegacy;
