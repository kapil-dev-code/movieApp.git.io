import React from "react";
import Box from "@mui/material/Box";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Nvigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    switch (value) {
      case 0: {
        navigate("/");
        break;
      }
      case 1: {
        navigate("/movies");
        break;
      }
      case 2: {
        navigate("/tvseries");
        break;
      }
      case 3: {
        navigate("/search");
        break;
      }
      default: {
        break;
      }
    }
  }, [value, navigate]);

  return (
    <Box sx={{ width: "100%", position: "fixed",zIndex:10,marginTop:"10vh" }}>
      <BottomNavigation 
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        sx={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "cyan",
          boxShadow:"2px 2px 10px ",
          borderRadius:"10px",
          height:"11vh",
          
          
          
        }}
      >
        <BottomNavigationAction
          sx={{ color: "black" }}
          label={<h5 style={{fontSize:"3vh"}}>Tranding</h5>}
          icon={<WhatshotIcon sx={{ fontSize:"5vh"}} />}
        />
        <BottomNavigationAction
          sx={{ color: "black" }}
          label={<h5 style={{fontSize:"3vh"}}>Movies</h5>}
          icon={<MovieIcon sx={{ fontSize:"5vh" }} />}
        />
        <BottomNavigationAction
          sx={{ color: "black",}}
          label={<h5 style={{fontSize:"3vh"}}>Tv Series</h5>}
          icon={<TvIcon sx={{ fontSize:"5vh"}} />}
        />
        <BottomNavigationAction
          sx={{ color: "black" }}
          label={<h5 style={{fontSize:"3vh"}}>Search</h5>}
          icon={<SearchIcon sx={{ fontSize:"5vh"}} />}
        />
      </BottomNavigation>
    </Box>
  );
}
