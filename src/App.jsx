import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Links from "./Links"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/react-portfolio" element={<Root />}>
        <Route path="contact" element={<Contact />} />
        <Route path="/react-portfolio" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
const Root = () => {
  return (
      <div>
        <NavTabs />
        <Outlet />
        <Footer />
      </div>
  );
  }


