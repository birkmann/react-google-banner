import React from "react";
import "./App.css";

import { Sidebar } from "./components/Sidebar";
import { Workspace } from "./components/Workspace";

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Workspace />
    </div>
  );
}

export default App;
