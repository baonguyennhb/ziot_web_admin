import Layout from "./component/Layout";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./component/Login/Login";
import UserPage from "./component/User/UserPage";
import Site from "./component/Site/Site";
import Device from "./component/Device";
import AddUser from "./component/User/AddUser";
import EditUser from "./component/User/EditUser";
import AddSite from "./component/Site/AddSite";
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
        <Route path='/user/add' element={
          <Layout>
            <AddUser />
          </Layout>
        } />
        <Route path='/user/edit' element={
          <Layout>
            <EditUser />
          </Layout>
        } />
        <Route path='/site' element={
          <Layout>
            <Site />
          </Layout>
        } />
         <Route path='/site/add' element={
          <Layout>
            <AddSite />
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
