"use client"

import React from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="root">
        <div className="root-container">
          <div className="wrapper">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
