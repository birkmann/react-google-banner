import React from "react";
import "./App.css";

import { BannerForm } from "./components/BannerForm";

function App() {
  return (
    <div className="App">
      <BannerForm />
      <ul>
        <li>300×250</li>
        <li>336×280</li>
        <li>728×90</li>
        <li>300×600</li>
        <li>320×100</li>
      </ul>
    </div>
  );
}

export default App;
