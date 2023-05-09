import './App.css';
import Counter from "./Counter";
import Currency from "./currency";
import Product from "./homework/Product";

function Greeting(props){

  return (
      <div className="main">
    <h3>Hello, I'm student</h3>
  </div>
  );
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Counter defaultValue={20}/>
          <Currency/>
          <Greeting />
         

      </header>
    </div>
  );
}

export default App;