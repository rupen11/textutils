import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d0d0d";
      document.title = "TextUtils - Dark mode"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          {/* <Route exact path="/" component={() => <TextForm showAlert={showAlert} heading="Enter the text to analye here" mode={mode} />} />
          <Route exact path="/about" component={() => <About mode={mode} />} /> */}
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
