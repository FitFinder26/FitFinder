import {Route, createRoutesFromElements, RouterProvider, createBrowserRouter} from 'react-router-dom';
import EmptyPage from './pages/EmptyPage';
import UserLayout from './layouts/UserLayout';
import RegistrationPage from './pages/RegistrationPage';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<HomePage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='*' element={<EmptyPage/>}/>
      </Route>
  ));
  return (
    <>
      <RouterProvider router={router}/>
      <Toaster />
    </>
  );
}

export default App
