
import  React from 'react';
import "./Card.css"


export default function TrandingCards(props) {
  const {poster,name,media,rating ,date}=props;
  return ( <>
  <div className="col my-2"> 
    <div className="card bg-dark" style={{width:"18rem",maxHeight:"70vh"}}>
    <div className='bg-secondary text-center text-white '>
Rating <span className={`badge ${rating>=6?"bg-success":"bg-danger"}`}>{rating}</span>
</div>

    <img src={poster} className="card-img-top img-fluid" alt="img not found" style={{height:"40vh"}}/>
   
      
   
    <div className="card-body text-center" style={{overflow:"clip",lineHeight:"2vh",userSelect:"none",}}>
      <h5 className="card-title text-muted ">{name?name:"no-name"}</h5>
      <p className="card-text text-muted">{media?media==='tv'?'TV Series':"Movie":"Movie"}</p>
     
      <p className="card-text"><small className="text-muted">ReleseDate-{date}</small></p>
    </div>
  </div>
  </div>
  

</>
  );
}
