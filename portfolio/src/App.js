import './App.css';
// import Footer from './Components/Footer';
import Home from './Pages/Home';
import Education from './Pages/Education.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/ContactMe.jsx';
import NavBar from './Components/Header.jsx';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import NotFoundPage from './Pages/NotFoundPage.jsx';
import Start from '../src/App'

function App() {

  const router = createBrowserRouter([
    {
      path: "/*",
      element: <><Start/></>,
    },
    {
      path: "/home",
      element: <><Home /></>,
    },
    {
      path: "/education",
      element: <><NavBar/><Education /></>,
    },
    {
      path: "/projects",
      element: <><NavBar/><Projects /></>,
    },
    {
      path: "/contact",
      element: <><NavBar/><Contact /></>,
    },
    {
      path: "*",
      element: <><NotFoundPage /></>,
    },
  ]);



  return (
    <>
      <RouterProvider router={router} />
    </>
  );





}

export default App;
