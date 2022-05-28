import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Navigation,
  Home,
  Visas,
  Api,
  Temporary,
  Permanent,
  Student,
  Other,
} from "./components";

ReactDOM.render(
  <Router>
    <Header />
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visas" element={<Visas />} />
      <Route path="/visas/temporary" element={<Temporary />} />
      <Route path="/visas/permanent" element={<Permanent />} />
      <Route path="/visas/student" element={<Student />} />
      <Route path="/visas/other" element={<Other />} />
      <Route path="/api" element={<Api />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
