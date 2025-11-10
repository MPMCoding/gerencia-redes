import React from "react";
import { createRoot } from "react-dom/client";
import { Route, Switch } from "wouter";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "@/contexts/ThemeContext";

import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Elemento #root não encontrado no DOM");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider switchable={true}>
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </ThemeProvider>
  </React.StrictMode>
);