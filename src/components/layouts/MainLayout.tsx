import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="px-6 py-8 text-white bg-primary-black sm:px-12 sm:py-14 lg:py-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
