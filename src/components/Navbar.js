const React = window.React;
const styled = window.emotionStyled;

const Link = window.ReactRouterDOM.Link;

const Nav = styled('nav')`

  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 12px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
  margin-bottom: 20px;
`;

function Navbar() {
  return React.createElement(
    Nav,
    null,
    React.createElement(Link, { to: "/" }, "Home"),
    React.createElement(Link, { to: "/login" }, "Login"),
    React.createElement(Link, { to: "/signup" }, "Signup")
  );
}

window.Navbar = Navbar;
