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
import ScrollToTop from "./utils/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        // hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#7456FF",
          zIndex: 1000,
        }}
        outerStyle={{
          mixBlendMode: "exclusion",
          border: "3px solid #7456FF",
          zIndex: 1000,
        }}
      />
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <ScrollToTop />
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
    </>
  );
};

export default App;
