import React, { Suspense } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClint from "./services/query";

function App() {
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

export default App;
