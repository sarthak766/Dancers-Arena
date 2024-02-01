import React from 'react';
import ReactDOM from 'react-dom';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/home/Home.jsx';
import About from './Components/about/About.jsx';
import Contact from './Components/contact/Contact.jsx';
import Classes from './Components/classes/Classes.jsx';
import './index.css';
import Hero from './Components/hero/Hero.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Hero />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='classes' element={<Classes />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
