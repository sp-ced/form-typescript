import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import { Suspense } from "react";
const Auth = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<h1>Loading....</h1>}>
            <Login />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Auth;
