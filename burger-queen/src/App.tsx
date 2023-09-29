import Home from "./domains/waiter/home";
import WaiterLogin from "./domains/waiter/login";
import WaiterMenu from "./domains/waiter/menu";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/WaiterLogin" element={<WaiterLogin />} />
          <Route path="/WaiterMenu" element={<WaiterMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
