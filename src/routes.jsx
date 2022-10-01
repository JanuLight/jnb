import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FirstComponent from "./ScholarshipContext/FirstComponent";
import SelectList from "./ScholarshipContext/SelectList";

const RoutesComponent = () => (
    <Router>
        <Routes>
            <Route
            path="/FirstComponent"
          exact={true}
          element={<FirstComponent></FirstComponent>}
            />

        <Route
            path="/SecondComponent"
          exact={true}
          element={<SelectList></SelectList>}
            />
        </Routes>
    </Router>
);
export default RoutesComponent;