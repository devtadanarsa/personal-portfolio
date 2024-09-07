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
      <main className="py-8 text-white bg-primary-black sm:py-14 lg:py-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
