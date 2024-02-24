
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import  {HomePage}  from "../pages/HomePage";
import Support from "../pages/Support";


import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Blog from "../pages/Blog";
import Price from "../pages/Price";
import { Navbar } from "../Components/Navbar";
import { DropdownWhyTMatric } from "../Components/DropdownWhyTMatric";
import { DropdownApp } from "../Components/DropdownAppIntegeration";
import Homepage from "../pages/Homepage/Homepage";
import Dashboard from "../pages/Dashboard";
import NewProjectForm from "../pages/NewProjectForm";
import ProjectUpdate from "../pages/ProjectUpdate";
const AllRoutes = () => {
  
  return (
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/project" element={<Dashboard />} />
      <Route path="/project/new" element={<NewProjectForm />} />
      <Route path="/project/:id" element={<ProjectUpdate />} />
      <Route path="/why-tmetric" element={<DropdownWhyTMatric />} />
      <Route path="/apps-integrations" element={<DropdownApp />} />
      <Route path="/support" element={<Support />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/price" element={<Price />} />
      {/* <Route path="/price" element={<Container/>}/> */}
      {/* Here i am making another componant */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;