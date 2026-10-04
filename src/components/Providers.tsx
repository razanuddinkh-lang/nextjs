"use client";

import { ToastContainer } from "react-toastify";
import { AppProvider } from "@/context/AppProvider";

import "react-toastify/dist/ReactToastify.css";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      {children}

      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={2200}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </AppProvider>
  );
}