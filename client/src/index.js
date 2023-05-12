import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from "./components/global/ErrorBoundary.js";
import {BrowserRouter} from "react-router-dom";
import {Sidebar} from "./components/global/index.js";
import {Content} from "./components/global/Content.js";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ErrorBoundary>
          <BrowserRouter history={"/"}>
              <Sidebar />
              <Content />
          </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
);
