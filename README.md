Educase CDN React App

Overview:
This project is a React single-page application (SPA) built using CDN links for React, ReactDOM, Emotion for styling, and React Router DOM for routing. It demonstrates a simple multi-page navigation with components like Navbar, Home, Login, and Signup.

Features:

React 18 via CDN (no build tools required)

Client-side routing with React Router DOM v5

Styling with Emotion styled components

Basic navigation: Home, Login, Signup pages

Responsive and clean UI container (PageWrapper)

Modular component-based architecture

Folder Structure:

educase-cdn/
├── index.html           # Main HTML file loading CDN scripts and app scripts
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── PageWrapper.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   ├── App.js           # Main app entry point
Workflow:
Loading the page: When index.html loads, it includes CDN scripts for React, ReactDOM, Emotion, and React Router DOM in the correct order.

Component scripts: Your custom components (Navbar.js, PageWrapper.js, Home.js, Login.js, Signup.js, App.js) are loaded as separate JS files. Each attaches a React component to the window object.

React app rendering: The script in index.html uses ReactDOM’s createRoot method to render the window.App component into the root div.

Routing: Inside App, BrowserRouter wraps the app for client-side routing. Routes and Route components define different pages (Home, Login, Signup).

Navigation: The Navbar component uses React Router’s Link to navigate between pages without reloading.

Styling: Emotion styled components (styled) provide scoped CSS styles for components like Navbar, PageWrapper, and form inputs/buttons.

How to Run:
Clone or download the repository.

Open index.html in your browser (Chrome, Firefox, Edge).

The app will load React and dependencies via CDN and render the SPA.

Navigate using the Navbar links to switch pages without reloading.

Technologies Used
React 18 (UMD CDN)

ReactDOM 18 (UMD CDN)

React Router DOM v5 (UMD CDN)

Emotion (UMD CDN) for CSS-in-JS styling

Notes:
This app uses React without a bundler or build tool.

All components are loaded as separate JS files and attached to the window object.

Routing is handled client-side using React Router DOM’s BrowserRouter.

Future Improvements:
Add form validation to Login and Signup.

Implement real authentication flows.

Improve styling and responsive layout.

Use a build system like Vite or Create React App for better development experience