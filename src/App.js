import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Components/header/Header";
import Home3 from "./Components/pages/home/Home3";
import AboutUs from "./Components/pages/about/AboutUs";
import ContactUs from "./Components/pages/contact/ContactUs";
import Footer from "./Components/footer/Footer";
import Posts from "./Components/pages/posts/Posts";
import Users from "./Components/pages/users/Users";
import Photos from "./Components/pages/photos/Photos"
import Data from "./Components/pages/Data";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home3 />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/photos" element={<Photos />} />
        <Route exact path="*" element={<Data/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
