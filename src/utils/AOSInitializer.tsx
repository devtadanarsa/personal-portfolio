import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      disable: () => window.innerWidth < 640,
      duration: 500,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return null;
};

export default AOSInitializer;
