import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Gonaras(props) {
  const [state, setState] = useState({ category: [] });
  const myfun = async () => {
    const url = `https://api.themoviedb.org/3/genre/${props.type}/list?api_key=1b53de7f55588b2cc391c1a4b16e13ab&language=en-US`;
    const response = await axios.get(url);
    setState({ category: response.data.genres });
    // console.log(response.data.genres);
  };
  useEffect(() => {
    myfun();
   return ()=>{setState()}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="container-fluid"
        
    
     style={{display:"flex",flexWrap:"wrap"}} >
     
        {state.category &&
          state.category.map((num) => {
            return (
              <button
                key={num.id}
                type="button"
                className="btn-dark"
                onClick={()=>{props.myfunction(num.id?num.id:0)}}
              >
                {num.name}
              </button>
            );
          })}
      </div>
    </>
  );
}
