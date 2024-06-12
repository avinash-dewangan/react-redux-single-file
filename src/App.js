
import './App.css';
import CounterApp from './CounterApp';
import CounterAppLegacy from './CounterAppLegacy';
import CounteAppMultipleReduceNew from './CounteAppMultipleReduceNew'
import CounterAppMultipleReducers from './CounterAppMultipleReducers'

function App() {
  return (
    <>
      <h1>Single Reducer</h1>
      <h2>New Reducer</h2>
      <CounterApp/>
      <h2>Legacy Reducer</h2>
      <CounterAppLegacy/>
      
      <h1>Multiple Reducer</h1>
      <h2>New Reducer</h2>
      <CounteAppMultipleReduceNew/>
      
      <h2>Legacy Reducer</h2>
      <CounterAppMultipleReducers/>
    </>
  );
}

export default App;
