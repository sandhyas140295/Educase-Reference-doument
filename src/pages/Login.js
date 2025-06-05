(function() {
  const React = window.React;
  const styled = window.emotionStyled;

  const Input = styled.input`
    display: block;
    margin: 10px 0;
    padding: 8px;
    width: 50%;
  `;

  const Button = styled.button`
    padding: 8px 16px;
    background-color: #0070f3;
    color: white;
    border: none;
    cursor: pointer;
  `;

  function Login() {
    const handleLogin = () => alert("Login clicked!");

    return React.createElement(
      "div",
      null,
      React.createElement("h2", null, "Login"),
      React.createElement(Input, { placeholder: "Email" }),
      React.createElement(Input, { placeholder: "Password", type: "password" }),
      React.createElement(Button, { onClick: handleLogin }, "Login")
    );
  }

  window.Login = Login;
})();
