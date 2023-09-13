import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Craft" />
      <TextForm heading="Enter text to analyze" />
    </>
  );
}

export default App;
