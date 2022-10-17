import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const Layout = lazy(() => import("./layout"));
const Home = lazy(() => import("./views/home"));
const Tokens = lazy(() => import("./views/tokens"));
const Invoice = lazy(() => import("./views/invoice"));
const Debitors = lazy(() => import("./views/debitors"));
const Monitoring = lazy(() => import("./views/monitoring"));
const Organizations = lazy(() => import("./views/organizations"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="invoice">
          <Route path="list" element={<Home />} />
        </Route>
        <Route path="monitoring" element={<Monitoring />} />
        <Route path="invoice" element={<Invoice />} />
        <Route path="generate-lot-id" element={<Invoice />} />
        <Route path="book-keeping" element={<Invoice />} />
        <Route path="removed-contracts" element={<Invoice />} />
        <Route path="monitoring-tokens" element={<Tokens />} />
        <Route path="debitors" element={<Debitors />} />
        <Route path="organizations" element={<Organizations />} />
      </Route>
    </Routes>
  );
}

export default App;
