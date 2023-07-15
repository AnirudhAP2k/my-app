import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-4">
        <TextForms heading="Enter the text to analyze" />
      </div>
    </>
  );
}
export default App;
