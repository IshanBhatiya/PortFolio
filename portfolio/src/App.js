import './App.css';
// import Footer from './Components/Footer';
import Home from './Pages/Home';
import Education from './Pages/Education.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/ContactMe.jsx';
import NavBar from './Components/Header.jsx';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
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
  ]);



  return (
    <>
      <RouterProvider router={router} />
    </>
  );





}

export default App;
