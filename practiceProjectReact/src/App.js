import Dashboard from "./pages/Dashboard";
import CreateBlog from "./pages/CreateBlog";
import UpdateBlog from "./pages/UpdateBlog";
import DetailedBlog from "./pages/DetailedBlog";
import Splash from "./pages/Splash";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/splash">
          <Splash></Splash>
        </Route>
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/create">
          <CreateBlog></CreateBlog>
        </Route>
        <Route exact path="/:id">
          <DetailedBlog></DetailedBlog>
        </Route>
        <Route exact path="/:id/update">
          <UpdateBlog></UpdateBlog>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
