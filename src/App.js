import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Headers from "./Component/Headers";
import Nvigation from "./Component/Nvigation";
import Search from "./Component/Search";
import TvSeries from "./Component/TvSeries";
import Tranding from "./Component/Tranding";
import Movies from "./Component/Movies";

export default function App() {
  let imgUrl = `https://image.tmdb.org/t/p/w300`;
  return (
    <>
    
    <Headers />
      <Nvigation />
    <div className="container-fluid position-relative"style={{
    backgroundColor:"#1a3b72"}}>
   
    
      <Routes>
        <Route path="/" element={<Tranding type={"trending"} imgUrl={imgUrl} />} />
        <Route path="/tvseries" element={<TvSeries imgUrl={imgUrl}/>} />
        <Route path="/movies" element={<Movies imgUrl={imgUrl} />} />
        <Route path="/search" element={<Search imgUrl={imgUrl}/>} />
        <Route
          path="*"
          element={
            <h3
              style={{
                position: "fixed",
                color: "red",
                left: "50%",
                top: "50%",
              }}
            >
              Error 404 Page Not Found
            </h3>
          }
        />
      </Routes>
      </div>
    </>
  );
}
