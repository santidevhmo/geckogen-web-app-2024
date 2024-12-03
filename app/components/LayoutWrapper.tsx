"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer/Footer";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const pathname = usePathname();

  // Routes where the footer should be hidden
  const hideFooterRoutes = ["/checkout"];

  const showFooter = !hideFooterRoutes.includes(pathname);

  return (
    <>
      {children}
      {showFooter && <Footer />}
    </>
  );
};

export default LayoutWrapper;
