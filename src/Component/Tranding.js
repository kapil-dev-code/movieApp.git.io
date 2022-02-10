import React from "react";
import TrandingCards from "./TrandingCards";
import { useEffect, useState } from "react";
import axios from "axios";
import PageNo from "./PageNo";


export default function Tranding(props) {
 
  const [state, setState] = useState({
    trendingList: [],
  });
  const [selector1, setSelector1] = useState("all");
  const [selector2, setSelector2] = useState("day");
  const [page, setPage] = useState(1);
  const [pageFound,setPageFound]=useState(1);
  const handlePageNo = (targetPage) => {
           setPage(targetPage);
  };
  const previousHandler=()=>{
      setPage(page-1);
  }
  const nextHandler=()=>{
setPage(page+1);
  }
  const myfun = async () => {
    const url = `https://api.themoviedb.org/3/${props.type}/${selector1}/${selector2}?api_key=1b53de7f55588b2cc391c1a4b16e13ab&page=${page}`;
    const response = await axios.get(url);
    //console.log(response);
    setPageFound(response.data.total_pages)
    setState({ trendingList: response.data.results });
  };

  useEffect(() => {
    myfun();
   // eslint-disable-next-line
  }, [selector1, selector2, page,pageFound]);
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row ">
            <div
              className="col col-md-5 col-6 position-fixed"
              style={{ marginTop: "21vh", zIndex: 100 }}
            >
              <select
                value={selector1}
                className="form-select width"
                aria-label="Default select example"
                onChange={(e) => {
                  setSelector1(e.target.value);
                  window.scroll(0, 0);
                }}
              >
                <option value="all">All</option>
                <option value="movie">Movies</option>
                <option value="tv">TV Series</option>
              </select>
            </div>
            <div
              className="col col-6 col-md-5 position-fixed"
              style={{ marginTop: "21vh", marginLeft: "50vw", zIndex: 100 }}
            >
              <select
                value={selector2}
                className="form-select width"
                aria-label="Default select example"
                onChange={(e) => {
                  setSelector2(e.target.value);
                  window.scroll(0, 0);
                }}
              >
                <option value="day">Day</option>
                <option value="week">Week</option>
              </select>
            </div>
          </div>
        </div>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "#3e0d35",
            width: "100%",
            height: "15vh",
            position: "fixed",
            marginTop: "21vh",
            zIndex: 50,
          }}
        >
        
        </div>
        <div className="container-fluid" style={{position:"fixed", zIndex:"200", marginTop:"28.5vh",}}>
        
            <PageNo page={handlePageNo} nextHandler={nextHandler} previousHandler={previousHandler} pageNo={page} pages={pageFound}/>
         
        </div>

        <div
          className="container"
          style={{ marginTop: "38vh", marginLeft: "30px" }}
        >
          <div className="row">
            {state.trendingList &&
              state.trendingList.map((myResponse) => {
                return (
                  <TrandingCards
                    key={myResponse.id}
                    poster={props.imgUrl + myResponse.poster_path}
                    name={myResponse.title || myResponse.original_title}
                    media={myResponse.media_type}
                    rating={myResponse.vote_average}
                    date={myResponse.release_date}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
