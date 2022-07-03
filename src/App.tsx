import type { Component } from "solid-js";

import styles from "./App.module.css";
import { Route, Routes } from "solid-app-router";
import Join from "./pages/Join";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Routes>
        <Route path="/" component={Join} />
      </Routes>
    </div>
  );
};

export default App;
