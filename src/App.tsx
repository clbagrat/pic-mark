import "./App.css";
import { MarkedImage } from "./components/MarkedImage";
import imgSrc from "./assets/0.jpg";

function App() {

  return (
    <div className="App">
      <MarkedImage src={imgSrc} />
    </div>
  );
}

export default App;
