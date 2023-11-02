import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Project from '../Pages/Project/Project';
import Skills from '../Pages/Skills/Skills';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/project',
        element: <Project />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
