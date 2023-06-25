import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import queryClint from "../../services/query";

function AuthorizedApp() {
  return (
    <QueryClientProvider client={queryClint}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </QueryClientProvider>
  );
}

export default AuthorizedApp;
