import React from 'react';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import BigNavigator from './BigNavigator';
import jQuery from 'jquery';
const Navigator = () => {
  const [smashNav, setSmashNav] = useState(false);
  window.onscroll = function(){
    const navigator = document.getElementById("nav");
    if(window.pageYOffset > 100){
      navigator.className="navigator navigator2";
    }else{
      navigator.className="navigator";
    }
  }
  const jquere = () => {
    jQuery("#menu").on("click", function(){
        jQuery(".full-nav").fadeIn();
        jQuery(".full-nav").removeClass("hide").removeClass("show")
    });
}
useEffect(() => {
    jquere();
},[]);
  return (
    <div className="navBar">
      <BigNavigator smash={smashNav}/>
      <div className='navigator' id='nav'>
      <div className="container">
      <div className="left logo"><Link to={`/`} className="link"><span>WALKING</span><span>BIBLE</span></Link></div>
      <div className="right">
        <ul>
          <li><Link to="/" className='link'>Home</Link></li>
          {/* <li><Link to="whats" className='link'>What is?</Link></li> */}
          <li><Link to="about" className='link'>About</Link></li>
          <li><Link to="blog" className='link'>Blog</Link></li>
        </ul>
        <button className="menu" id="menu" onClick={() => {smashNav ? setSmashNav(false) : setSmashNav(true)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Navigator;