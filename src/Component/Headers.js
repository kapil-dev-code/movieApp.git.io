import React from "react";

import "./Headers.css";
export default function Headers() {
  return (
    <>
      
        <div className="header_nav position-fixed">
          <span className="header_nav_titel" onClick={()=>{window.scroll(0,0)}}> 🎞️HUB4MOVIES.tmdb📽️</span>
        </div>
      
    </>
  );
}
