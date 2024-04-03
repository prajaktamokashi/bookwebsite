import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Components/header/Header";
import Home3 from "./Components/header/home/Home3";
import AboutUs from "./Components/header/about/AboutUs";
import ContactUs from "./Components/header/contact/ContactUs";
import Footer from "./Components/footer/Footer";
import Posts from "./Components/header/posts/Posts";
import Users from "./Components/header/users/Users";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
