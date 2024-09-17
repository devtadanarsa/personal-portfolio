import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ThemeProvider from "./contexts/ThemeContext";
import TeamPage from "./pages/TeamPage";
import MoviePage from "./pages/MoviePage";
import ErrorPage from "./pages/ErrorPage";
import AuthProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/teams"
              element={
                <ProtectedRoute>
                  <TeamPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute>
                  <MoviePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/access-error"
              element={<ErrorPage errorCode={401} />}
            />
            <Route path="*" element={<ErrorPage errorCode={404} />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
