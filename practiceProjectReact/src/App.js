import Dashboard from "./pages/Dashboard";
import CreateBlog from "./pages/CreateBlog";
import UpdateBlog from "./pages/UpdateBlog";
import DetailedBlog from "./pages/DetailedBlog";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* the splash screen which redirects to login or dashboard if logged in */}
        <Route exact path="/splash">
          <Splash></Splash>
        </Route>
        {/* the login screen */}
        <Route exact path="/login">
          <Login></Login>
        </Route>
        {/* the signup screen */}
        <Route exact path="/signup">
          <SignUp></SignUp>
        </Route>
        {/* the dashboard screen */}
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
        {/* the create blog screen */}
        <Route exact path="/create">
          <CreateBlog></CreateBlog>
        </Route>
        {/* the blog detail screen */}
        <Route exact path="/:id">
          <DetailedBlog></DetailedBlog>
        </Route>
        {/* the blog update screen */}
        <Route exact path="/:id/update">
          <UpdateBlog></UpdateBlog>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
