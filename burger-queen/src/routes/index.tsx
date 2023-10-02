import Home from "../domains/waiter/home";
import WaiterLogin from "../domains/waiter/login";
// import WaiterMenu from "../domains/waiter/menu";
import { BrowserRouter, Routes as ReactRouter, Route } from "react-router-dom";

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRouter>
        <Route path="/" element={<Home />} />
        <Route path="/waiter/login" element={<WaiterLogin />} />
        {/* <Route path="/admin/login" element={<WaiterLogin />} /> */}
        {/* <Route path="/WaiterMenu" element={<WaiterMenu />} /> */}
      </ReactRouter>
    </BrowserRouter>
  );
}
