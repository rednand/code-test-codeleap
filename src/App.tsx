import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import InitialPage from "./pages/Home";
import SignUpPage from "./pages/Signup";
import Network from "./pages/Network";
import { persist, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persist}>
          <Routes>
            <Route element={<InitialPage />} path="/"></Route>
            <Route element={<SignUpPage />} path="/sign"></Route>
            <Route element={<Network />} path="/network"></Route>
          </Routes>
        </PersistGate>
      </Provider>
    </Router>
  );
};

export default App;
