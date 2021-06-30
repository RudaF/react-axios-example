import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import CatChoice from "./CatChoice";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={CatChoice} />
    </BrowserRouter>
  );
}

export default App;
