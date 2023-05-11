import "./App.css";
import Navbar from "./Navbar";
/* import Home from "./Home"; */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StudentInfo from "./StudentInfo";
import DeleteStudent from "./DeleteStudent";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content"></div>
        <h1>SNBP International School </h1>
        <Navbar />
        <Switch>
          <Route absolute path="/StudentDetails">
            <StudentInfo />
          </Route>
          <Route absolute path="/InputStudent">
            <AddStudent />
          </Route>
          <Route absolute path="/RemoveStudent/:id">
            <DeleteStudent />
          </Route>
          <Route absolute path="/ChangeStudent/">
            <UpdateStudent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
