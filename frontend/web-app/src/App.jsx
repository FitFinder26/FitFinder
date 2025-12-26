import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import EmptyPage from "./pages/EmptyPage";
import UserLayout from "./layouts/UserLayout";
import RegistrationPage from "./pages/RegistrationPage";
import SearchResultPage from "./pages/SearchResultPage";
import ProductPage from "./pages/ProductPage";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import FavoritePage from "./pages/FavoritePage";
import AboutUs from "./components/AboutUs";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="search-result" element={<SearchResultPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<EmptyPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
