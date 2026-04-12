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
import HomePage from "./pages/homePage/HomePage";
import HistoryPage from "./pages/HistoryPage";
import FavoritePage from "./pages/FavoritePage";
import AboutUsPage from "./pages/AboutUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import LenisProvider from "./providers/LenisProvider";

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
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-service" element={<TermsOfServicePage />} />
        <Route path="*" element={<EmptyPage />} />
      </Route>
    ),
    {
      basename: import.meta.env.BASE_URL,
    }
  );

  return (
    <LenisProvider>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 6000,
          style: {
            background: 'rgba(23, 23, 23, 0.8)',
            color: '#fff',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1.5rem',
            padding: '1.25rem 2rem',
            fontSize: '14px',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          },
          success: {
            iconTheme: {
              primary: 'var(--primary)',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff4b4b',
              secondary: '#fff',
            },
          },
        }}
      />
    </LenisProvider>
  );
}

export default App;
