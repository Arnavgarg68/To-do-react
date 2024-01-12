
import Heading from "./components/Heading.js";
import Task from "./components/Task.js";
import './App.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Heading/>
      <Task/>
    </Router>

  )
}

export default App;
