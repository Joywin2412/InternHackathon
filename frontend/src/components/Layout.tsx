import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {children}
      </div>
    );
  };
  
//   export default Layout;
  