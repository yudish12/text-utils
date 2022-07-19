import React,{useState} from "react";
import './nav.css';
import {Link} from 'react-router-dom';
function Nav(props){
const [open,setOpen] = useState(false);
const burgerClick = ()=>{
   if(open){

    setOpen(false);
   }
   else{
    setOpen(true);
   }
    }
return (<nav>
        <label className="logo">{props.title}</label>
        <div className="burger" onClick={burgerClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            </div>
        <ul className={open?"move":""}>
            <li><Link to='/' className="anc">Home</Link></li>
            <li><Link to="/About" className="anc">About</Link></li>
            <li><Link className="anc" to="/Register">Register</Link></li>
        </ul>
        
    </nav>
);
}
export default Nav;