import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./components/Dashboard.tsx";
import { ClerkProvider, SignIn } from "@clerk/clerk-react";
import { ProtectedLayout } from "./layouts/ProtectedLayout.tsx";
import { ComposeBlast } from "./components/ComposeBlast.tsx";
import { EditLists } from "./components/EditLists.tsx";
import { Layout } from "./layouts/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <SignIn /> }],
  },
  {
    path: "/dashboard",
    element: <ProtectedLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "compose-blast", element: <ComposeBlast /> },
      { path: "edit-lists", element: <EditLists /> },
    ],
  },
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
);
