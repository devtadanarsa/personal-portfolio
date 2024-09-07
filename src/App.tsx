import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ThemeProvider from "./contexts/ThemeContext";
import TeamPage from "./pages/TeamPage";
import MoviePage from "./pages/MoviePage";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/movies" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
