import { Route, NavLink, Redirect, useHistory } from "react-router-dom";
import "./App.scss";
import AboutPage from "./pages/AboutPage";
import WelcomePage from "./pages/WelcomePage";
import MembersPage from "./pages/MembersPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./actions/loginActions";

function App() {
  const history = useHistory();
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const loggedInName = useSelector((state) => state.login.loggedInName);

  // const loggedIn = useSelector((state) => state.loggedIn);
  // const member = useSelector((state) => state.member);
  const dispatch = useDispatch();

  function logInHandler() {
    history.push("/login");
  }

  function logOutHandler() {
    if (loggedIn) {
      dispatch(logout(loggedInName));
      history.push("/");
    }
  }

  function goToSignUp() {
    history.push("/signup");
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className={loggedIn ? "float-right" : "disappear"}>
          Hello {loggedInName}
        </p>
        <button
          className={loggedIn ? "btn btn-primary float-right" : "disappear"}
          onClick={logOutHandler}
        >
          Log out
        </button>
        <h1>Secluded Friendship Forest</h1>
        <ul className="ul-style">
          <li className="li-style">
            <NavLink
              className={loggedIn ? "App-link" : "disappear"}
              to="/friends"
              exact
              activeClassName="link-active-style"
            >
              Members
            </NavLink>
          </li>
          <li className="li-style">
            <NavLink
              className="App-link"
              to="/"
              exact
              activeClassName="link-active-style"
            >
              Home
            </NavLink>
          </li>
          <li className="li-style">
            <NavLink
              className="App-link"
              to="/about"
              exact
              activeClassName="link-active-style"
            >
              About
            </NavLink>
          </li>
          <li className="li-style">
            <NavLink
              className={loggedIn ? "App-link" : "disappear"}
              to="/profile"
              exact
              activeClassName="link-active-style"
            >
              Profile
            </NavLink>
          </li>
        </ul>
        <div className={loggedIn ? "disappear" : "button-box col-lg-12"}>
          <button
            className="btn btn-primary"
            value="Log in"
            onClick={logInHandler}
          >
            Log in
          </button>
          <button className="btn btn-primary" onClick={goToSignUp}>
            Sign up
          </button>
        </div>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/friends" exact component={MembersPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route
          path="/profile"
          component={UserPage}
          render={() => {
            return loggedIn ? history.push("/profile") : <Redirect to="/" />;
          }}
        />
      </header>
    </div>
  );
}

export default App;
