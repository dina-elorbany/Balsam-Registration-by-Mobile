import "./App.css";
import Cover from "./components/cover/Cover";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Cover />
        <Form />
      </div>
    </div>
  );
}

export default App;
