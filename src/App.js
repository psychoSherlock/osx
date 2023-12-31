import "./App.css";
import UpperDock from "./components/UpperDock";
import "./styles/styles.css";
import "./styles/docks.css";
import LowerDock from "./components/LowerDock";
import FinderWindow from "./components/FinderWindow";
import DesktopApps from "./components/DesktopApps";

function App() {
  return (
    <div className="App">
      <UpperDock />
      <DesktopApps />
      <FinderWindow />
      {/* <Dock /> */}
      {/* <h1>Hello</h1> */}
      <LowerDock />
    </div>
  );
}

export default App;
