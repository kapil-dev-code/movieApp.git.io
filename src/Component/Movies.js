import React from "react";
import TrandingCards from "./TrandingCards";
import { useEffect, useState } from "react";
import Gonaras from "./Gonaras";
import PageNo from "./PageNo";

export default function Movies(props) {
  const [state, setState] = useState({
    trendingList: [],
  });
  
  const [pageFound,setPageFound]=useState(1);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState();
  const handleGenres = (targetPage) => {
    setGenres(targetPage);
  };

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
    const newUrl = `https://api.themoviedb.org/3/discover/movie?api_key=1b53de7f55588b2cc391c1a4b16e13ab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genres}`;
    const myresponse = await fetch(newUrl);
    const response = await myresponse.json();
   console.log(response);
    setPageFound(response.total_pages);
    setState({ trendingList: response.results });
  };

  useEffect(() => {
    myfun();

 
     // eslint-disable-next-line
  }, [page, genres,pageFound]);
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="row ">
            <div
              className="col position-fixed"
              style={{ marginTop: "29vh", zIndex:1}}
            >
              <Gonaras type={"movie"} myfunction={handleGenres} />
            </div>
          </div>
        </div>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "#3e0d35",
            width: "100%",
            height: "8vh",
            position: "fixed",
            marginTop: "21vh",
            zIndex: 50,
          }}
        ></div>
        <div
          className="container-fluid"
          style={{ position: "fixed", zIndex: "200", marginTop: "21vh" }}
        >
           <PageNo page={handlePageNo} nextHandler={nextHandler} previousHandler={previousHandler} pageNo={page} pages={pageFound}/>
        </div>

        <div
          className="container my-sm-6"
          style={{ marginTop: "40vh", marginLeft: "30px" }}
        >
          <div className="row">
            {state.trendingList &&
              state.trendingList.map((myResponse) => {
                return (
                  <TrandingCards
                    key={myResponse.id}
                    poster={props.imgUrl + myResponse.poster_path}
                    name={myResponse.title || myResponse.original_title}
                    media={'movie'}
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
