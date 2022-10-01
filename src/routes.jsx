import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import MainComponent from "../../../jnbs/src/ScholarshipContext/MainFile";

import FirstComponent from "./ScholarshipContext/FirstComponent";
import Fourthscreen from "./ScholarshipContext/Fourthscreen/fourthscreen";
import Secondscreen from "./ScholarshipContext/Fourthscreen/secondscreen";
import Thirdsceen from "./ScholarshipContext/Fourthscreen/thirdsceen";
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
      commit{" "}
      <Route
        path="/fourthscreen"
        element={<Fourthscreen></Fourthscreen>}
      ></Route>
      <Route path="/thirdscreen" element={<Thirdsceen></Thirdsceen>}></Route>
      <Route
        path="/secondscreen"
        element={<Secondscreen></Secondscreen>}
      ></Route>
    </Routes>
  </Router>
);
export default RoutesComponent;
