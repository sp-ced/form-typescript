import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

const Panel = () => {
  return (
    <Routes>
      <Route path="/login" element={<Dashboard />} />
    </Routes>
  );
};

export default Panel;
