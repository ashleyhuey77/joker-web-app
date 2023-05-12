import {Dashboard} from "../views/dashboard/Dashboard.js";
import {Suites} from "../views/suites/Suites.js";
import {Route, Routes} from "react-router-dom";


export function Content() {
  return(
    <div className="container">
      <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/suites" element={<Suites/>} />
          <Route path="/metrics" />
      </Routes>
    </div>
  );
}
