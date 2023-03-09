import React, {useEffect} from "react";
import jQuery from "jquery";
import { Link } from "react-router-dom";
const BigNavigator = ({ smash}) => {
    const jquere = () => {
        jQuery(".full-nav button").on("click", function(){
            jQuery(".full-nav").fadeOut();
            jQuery(".full-nav").removeClass("hide").removeClass("show")
        });
    }
    useEffect(() => {
        jquere();
    },[]);
    return(
        <div className={`full-nav ${smash ? "show" : "hide"}`}>
            <div className="cut-on-blue">
            </div>
            <div className="navigator-lists">
                <div className="title"><span>MENU</span></div>
                <div className="list">
                    <ul>
                        <li><Link to="/" className='link'>Home</Link></li>
                        <li><Link to="about" className='link'>About </Link></li>
                        <li><Link to="blog" className='link'>Blog</Link></li>
                    </ul>
                </div>
                <div className="button">
                    <button type="button">Back</button>
                </div>
            </div>
        </div>
    );
}
export default BigNavigator;