import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Order1 from "./pages/ordernow/order1";
import Order2 from "./pages/ordernow/order2";
import Order3 from "./pages/ordernow/order3";
import Order4 from "./pages/ordernow/order4";
import Order5 from "./pages/ordernow/order5";
import Order6 from "./pages/ordernow/order6";
import Order7 from "./pages/ordernow/order7";
import Order8 from "./pages/ordernow/order8";
import Shop from "./pages/shop";
import Demo1 from "./pages/demodrive/demo1";
import Demo2 from "./pages/demodrive/demo2";
import Demo3 from "./pages/demodrive/demo3";
import Demo4 from "./pages/demodrive/demo4";
import Demo5 from "./pages/demodrive/demo5";
import Inventory from "./pages/vehicles/inventory";
import Trade from "./pages/vehicles/trade";
import Charge from "./pages/vehicles/charge";
import Solar from "./pages/energy/solar";
import Voting from "./pages/charging/voting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order1" element={<Order1 />} />
        <Route path="/order2" element={<Order2 />} />
        <Route path="/order3" element={<Order3 />} />
        <Route path="/order4" element={<Order4 />} />
        <Route path="/order5" element={<Order5 />} />
        <Route path="/order6" element={<Order6 />} />
        <Route path="/order7" element={<Order7 />} />
        <Route path="/order8" element={<Order8 />} />
        <Route path="/demo1" element={<Demo1 />} />
        <Route path="/demo2" element={<Demo2 />} />
        <Route path="/demo3" element={<Demo3 />} />
        <Route path="/demo4" element={<Demo4 />} />
        <Route path="/demo5" element={<Demo5 />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/charge" element={<Charge />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/voting" element={<Voting />} />
      </Routes>
    </Router>
  );
}

export default App;
