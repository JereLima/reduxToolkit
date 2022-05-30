import React from "react";

import { store } from "./src/store";
import { Provider } from "react-redux";
import Count from "./src/Count";

export default function App() {
  return (
    <Provider store={store}>
      <Count/>
    </Provider>
  );
}


