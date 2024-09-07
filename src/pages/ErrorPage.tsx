import { FC, useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link, useNavigate } from "react-router-dom";

interface ErrorPageProps {
  errorCode: number;
}

const ErrorPage: FC<ErrorPageProps> = ({ errorCode }) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [count, setCount] = useState<number>(5);

  setTimeout(() => {
    setCount(count - 1);
  }, 1000);

  if (count <= 0) {
    navigate("/");
  }

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="flex flex-col items-center justify-center h-screen gap-4 dark:bg-primary-black dark:text-white">
        <h1 className="font-bold text-9xl text-primary-lavender">
          {errorCode}
        </h1>
        <h2 className="text-2xl font-semibold sm:text-3xl">
          {errorCode === 401
            ? "You have no rights to access this page!"
            : "Page not found!"}{" "}
        </h2>
        <p className="text-sm text-center sm:text-xl">
          {errorCode === 401
            ? "Please login first."
            : "Page you're looking for are not there yet."}{" "}
          You will be redirected in {count}
        </p>
        <div className="flex items-center gap-8 mt-6">
          <Link
            to="/"
            className="py-3 text-center transition-all rounded-lg w-36 sm:w-48 bg-primary-lavender hover:scale-110"
          >
            Back to Home
          </Link>
          <a
            href="/access-denied"
            className="py-3 text-center transition-all border-2 rounded-lg w-36 sm:w-48 border-primary-lavender text-primary-lavender hover:scale-110"
          >
            Refresh Page
          </a>
        </div>
        <a
          href="mailto:devtadanarsa@gmail.com"
          className="mt-8 text-xs sm:text-lg"
        >
          Not quite right?{" "}
          <span className="text-primary-lavender hover:underline">
            Help us by reporting this error
          </span>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
