import "./App.css";
import UpperDock from "./components/UpperDock";
import "./styles/styles.css";
import "./styles/docks.css";
import LowerDock from "./components/LowerDock";
import FinderWindow from "./components/FinderWindow";
function App() {
  return (
    <div className="App">
      <UpperDock />
      <FinderWindow />
      {/* <Dock /> */}
      {/* <h1>Hello</h1> */}
      <LowerDock />
    </div>
  );
}

export default App;
