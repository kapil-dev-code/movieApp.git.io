
import React from "react";

export default function PageNo(props) {
  let arr=[]
  if(props.pages>=10){
   arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  else{
    for(let i=1;i<=props.pages;i++){
        arr.push(i);
    }
  }
  //console.log(props.pages);
  return (
    <nav aria-label="Page navigation example">
    
      <ul className="pagination">
    
     
     {    props.pages &&  
      <li className="page-item">
        <button
                className="page-link"
                onClick={props.previousHandler
                  }
                  disabled={props.pageNo<=1} >Previous</button>
            </li>}
        {arr.map((element, i) => {
          return (
            <li key={i} className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  props.page(element);
                }}
              >{element}</button>
            </li>
          );
        })}
       { props.pages && <li className="page-item">
              <button
                className="page-link"
                onClick={props.nextHandler}
                disabled={props.pageNo>=props.pages} 
              >Next</button>
            </li>}
            <li className="page-item mx-2">
      <h6 className="page-link bg-success text-white" style={{userSelect:'none'}}>Current Page {props.pages?props.pageNo:0}</h6>
      </li>
      <li className="page-item mx-2">
      <h6 className="page-link bg-success text-white" style={{userSelect:'none'}}>Total Page {props.pages?props.pages:0}</h6>
      </li>
      </ul>
    </nav>
  );
}
