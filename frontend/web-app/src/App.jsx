import {Route, createRoutesFromElements, RouterProvider, createBrowserRouter} from 'react-router-dom';
import EmptyPage from './pages/EmptyPage';
import UserLayout from './layouts/UserLayout';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<UserLayout/>}>
        {/* <Route index element={</>}/> */}
        <Route path='*' element={<EmptyPage/>}/>
      </Route>
  ));
  return (
      <RouterProvider router={router}/>
  );
}

export default App
