import { createBrowserRouter } from 'react-router-dom';
import { NavURL } from './NavLink';

import { Actors, MovieInformation, Movies, Profile } from '../components/index';
import NavBar from '../NavBar/NavBar';

export const router = createBrowserRouter([
  {
    path: NavURL?.Actors,
    element: (
      <>
        <NavBar />
        <Actors />
      </>
    ),
  },
  {
    path: NavURL?.MovieInformation,
    element: (
      <>
        <NavBar />
        <MovieInformation />
      </>
    ),
  },
  {
    path: NavURL?.Movies,
    element: (
      <>
        <NavBar />
        <Movies />
      </>
    ),
  },
  {
    path: NavURL?.Profile,
    element: (
      <>
        <NavBar />
        <Profile />
      </>
    ),
  },
]);
