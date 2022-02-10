import React from "react";
import TrandingCards from "./TrandingCards";
import { useEffect, useState } from "react";

import PageNo from "./PageNo";

export default function Movies(props) {
  const [state, setState] = useState({
    trendingList: [],
  });
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const [pageFound, setPageFound] = useState(1);
  const [page, setPage] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();

    setSearch(value);
  };

  const handlePageNo = (targetPage) => {
    setPage(targetPage);
  };
  const previousHandler = () => {
  
    setPage(page-1);
    
  };
  const nextHandler = () => {
   
    setPage(page+1);
  };
  const myfun = async () => {
    const newUrl = `https://api.themoviedb.org/3/search/multi?api_key=1b53de7f55588b2cc391c1a4b16e13ab&language=en-US&page=${page}&query=${search}&include_adult=false`;

    const myresponse = await fetch(newUrl);
    const response = await myresponse.json();
   // console.log(response);
    setPageFound(response.total_pages);
    setState({ trendingList: response.results });
  };

  useEffect(() => {
    myfun();
   return ()=>{setState({trendingList:[]})}
    // eslint-disable-next-line
  }, [page, pageFound, search]);
  return (
    <>
      <div className="container-fluid">
        <div
          className="container bg-dark"
          style={{ position: "fixed", zIndex: "110" }}
        >
          <div className="row ">
            <form
              onSubmit={onSubmit}
              className="d-flex"
              style={{ marginTop: "22vh", position: "fixed" }}
            >
              <input
                className="form-control me-2"
                type="search"
                value={value}
                onChange={onChange}
                placeholder="Search"
                aria-label="Search"
                style={{ width: "75vw" }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "#3e0d35",
            width: "100%",
            height: "20vh",
            position: "fixed",
            marginTop: "20vh",
            zIndex: 10,
          }}
        ></div>
        <div
          className="container-fluid"
          style={{ position: "fixed", zIndex: "200", marginTop: "30vh" }}
        >
          <PageNo
            page={handlePageNo}
            nextHandler={nextHandler}
            previousHandler={previousHandler}
            pageNo={page}
            pages={pageFound}
          />
        </div>
        <div className="container-fluid">
          <div className="row ">
            <div
              className="col position-fixed"
              style={{ marginTop: "33.5vh", zIndex: 11 }}
            ></div>
          </div>
        </div>

        <div
          className="container my-sm-6"
          style={{ marginTop: "42vh", marginLeft: "30px" }}
        >
          <div className="row">
            {!pageFound?<h5 style={{color:"red",textAlign:'center'}}>Movie Not Found Please Search</h5>:
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
