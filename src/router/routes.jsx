import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import Root from '../layouts/Root.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Projects from '../pages/Projects.jsx'
import Contact from '../pages/Contact.jsx'

const routes = [
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
]

// Vite dev server can rewrite normal URLs, but GitHub Pages cannot.
// Production builds use hash routing so refreshes work from any Pages subfolder.
const createRouter = import.meta.env.PROD ? createHashRouter : createBrowserRouter

export const router = createRouter(routes)
