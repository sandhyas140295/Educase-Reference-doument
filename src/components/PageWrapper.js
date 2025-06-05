(function() {
  const React = window.React;
  const styled = window.emotionStyled;

  const Wrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color:rgb(171, 226, 236);
  `;

  function PageWrapper({ children }) {
    return React.createElement(Wrapper, null, children);
  }

  window.PageWrapper = PageWrapper;
})();
