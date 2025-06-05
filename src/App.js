(function() {
const React = window.React;
const ReactRouterDOM = window.ReactRouterDOM;

const Router = ReactRouterDOM.BrowserRouter;
const Switch = ReactRouterDOM.Switch;  
const Route = ReactRouterDOM.Route;

const Navbar = window.Navbar;
const PageWrapper = window.PageWrapper;
const Home = window.Home;
const Login = window.Login;
const Signup = window.Signup;

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      PageWrapper,
      null,
      React.createElement(Navbar, null),
      React.createElement(
        Switch,
        null,
        React.createElement(Route, { exact: true, path: "/", component: Home }),
        React.createElement(Route, { path: "/login", component: Login }),
        React.createElement(Route, { path: "/signup", component: Signup })
      )
    )
  );
}

  window.App = App;
})();
