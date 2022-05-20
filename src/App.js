import Layout from "./component/Layout";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./component/Login/Login";
import UserPage from "./component/UserPage";
import Site from "./component/Site";
import Device from "./component/Device";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path='/user' element={
          <Layout>
            <UserPage />
          </Layout>
        } />
        <Route path='/site' element={
          <Layout>
            <Site />
          </Layout>
        } />
        <Route path='/device' element={
          <Layout>
            <Device />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
