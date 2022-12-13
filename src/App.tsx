import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Dashboard from "./panel/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="auth/*" element={<Auth />} />
        <Route path="panel/*" element={<Dashboard />}></Route>
        <Route path="*" element={<Navigate to={"/auth/login"} />} />
      </Routes>
    </>
  );
}

export default App;
