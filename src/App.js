import { Route, NavLink, Redirect, useHistory } from "react-router-dom";
import "./App.scss";
import AboutPage from "./pages/AboutPage";
import WelcomePage from "./pages/WelcomePage";
import MembersPage from "./pages/MembersPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/navbar";

function App() {
  const loggedIn = useSelector((state) => state.login.loggedIn);

  return (
    <div className="container-fluid">
      <div id="topbar">
        <div className="container text-right">
          <div className="col-12"></div>
          StalkTalk
        </div>
      </div>
      <header className="App-header">
        {loggedIn ? <Navbar /> : null}
        {loggedIn ? (
          <Route path="/home" exact component={WelcomePage} />
        ) : (
          <Redirect exact path="/login" />
        )}
        {loggedIn ? (
          <Route path="/about" exact component={AboutPage} />
        ) : (
          <Redirect exact path="/login" />
        )}
        <Route path="/friends" exact component={MembersPage} />
        {!loggedIn ? (
          <Route path="/login" exact component={LoginPage} />
        ) : (
          <Redirect exact path="/" />
        )}
        <Route path="/signup" exact component={SignUpPage} />

        {loggedIn ? (
          <Route path="/profile" exact component={UserPage} />
        ) : (
          <Redirect exact path="/login" />
        )}
        <Route
          path="/"
          exact
          render={() => {
            return loggedIn ? (
              <Redirect to="/home" />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
      </header>
    </div>
  );
}

export default App;
