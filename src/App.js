import logo from "./logo.svg";
import "./App.css";
import A from "./components/A";
import B from "./components/B";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <A /> */}
        <B />
      </header>
    </div>
  );
}

export default App;
