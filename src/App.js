import  Layout  from "./component/Layout";
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
      <Route exact path="/" element = {<Login/>}/>
    </Routes>
    <Layout>
      <Routes>
        <Route path='/user' element = {<UserPage/>} />
        <Route path='/site' element = {<Site/>}/>
        <Route path='/Device' element = {<Device/>}/>
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
