import React from 'react';
import "./Workcardstyle.css";
import { NavLink } from 'react-router-dom';

const Workcard = (props) => {
  return (
    <div className="project-card">
                
                   


                            <div class="container">
  <div class="card">
    <div class="imgBx">
    <img src={props.imgsrc} alt="img"/>
    </div>
    <div class="contentBx">
    <h2 className="project-title">{props.title}</h2>
      <div class="size">
      <p>{props.text}</p>
      </div>
      <div className="pro-btns">
      <NavLink to="url.com" 
                        className="btn">
                            View
                            </NavLink>
                            <NavLink to={props.source}
                        className="btn">
                            Source
                            </NavLink>
                            </div>
    </div>
  </div>
</div>




                   


               


            </div>
  )
}

export default Workcard;