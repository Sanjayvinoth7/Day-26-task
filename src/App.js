import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.css";
import Dashboard from "./Dashboard";
import User from "./User";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Createuser from "./Createuser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewUser from "./ViewUser";
import Edituser from "./Edituser";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/users" element={<User />}></Route>
              <Route path="/user_create" element={<Createuser />}></Route>
              <Route path="/user_create/:id" element={<Createuser />}></Route>
              <Route path="/view/:id" element={<ViewUser />}></Route>
              <Route path="/edit/:id" element={<Edituser />}></Route>
              
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
