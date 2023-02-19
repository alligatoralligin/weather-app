import "./App.css";
import WeatherDisplay from "./weatherRender";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <WeatherDisplay />
    </div>
  );
}

export default App;
