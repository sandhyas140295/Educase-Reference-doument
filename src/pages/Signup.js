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

  function Signup() {
    const handleSignup = () => alert("Signup clicked!");

    return React.createElement(
      "div",
      null,
      React.createElement("h2", null, "Signup"),
      React.createElement(Input, { placeholder: "Name" }),
      React.createElement(Input, { placeholder: "Email" }),
      React.createElement(Input, { placeholder: "Password", type: "password" }),
      React.createElement(Button, { onClick: handleSignup }, "Signup")
    );
  }

  window.Signup = Signup;
})();
