import React from "react";
import model from "./model";
import { StoreProvider, createStore } from "easy-peasy";
import "./App.css";

import { Sidebar } from "./components/Sidebar";
import { Workspace } from "./components/Workspace";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="app">
        <Sidebar />
        <Workspace />
      </div>
    </StoreProvider>
  );
}

export default App;
