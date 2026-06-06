import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts/Root.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Projects from '../pages/Projects.jsx'
import Contact from '../pages/Contact.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'projects', Component: Projects },
      { path: 'contact', Component: Contact },
    ],
  },
])
