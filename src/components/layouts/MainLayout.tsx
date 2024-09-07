import { FC, ReactNode, useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ThemeContext } from "../../contexts/ThemeContext";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemedComponent must be used within a ThemeProvider");
  }

  const { theme } = themeContext;

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Header />
      <main className="py-8 transition-all duration-1000 dark:text-white dark:bg-primary-black sm:py-14 lg:py-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
