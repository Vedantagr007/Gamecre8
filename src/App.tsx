import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Dashboard } from "./pages/Dashboard";
import { RecoilRoot } from "recoil";

function App() {
  return (
    // <div className="flex justify-end m-4">
    //   <Dropdown></Dropdown>
    // </div>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Dashboard} />
          {/* <Route path="/main" Component={Navbar}></Route> */}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
