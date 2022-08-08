// Header.js
import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
export default class Header extends Component {
render(){
return (

            
   <div>
   <div className='top_header'>
      <div className='container clearfix'>
         <div className='row'>
            <div className="col-md-6 col-sm-8 col-12">
               <ul className="left-widget">
                  <li><i className="far fa-calendar-alt"></i> <span className="icon-map-marker"></span> 28 July 2022
                  </li>
                  <span className="border_right"></span>
                  <li><i className="fa fa-phone-alt" aria-hidden="true"></i> <a href='tel:(86) 10 5869 4641' className='text-white text-decoration-none'>(86) 10 5869 4641</a> </li>
                  <span className="border_right"></span>
               </ul>
            </div>
            <div className="col-md-6 col-sm-4 col-12">
               <ul className="social-icon">
                  <li><a href="https://www.facebook.com/TheAsianBanker" rel="noopener noreferrer" target="_blank" ><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                  <li><a href="https://twitter.com/theasianbanker" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.linkedin.com/company/the-asian-banker" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                  <li><a href="https://instagram.com/theasianbankerofficial/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.youtube.com/user/theasianbanker" rel="noopener noreferrer" target="_blank"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <div className="wsmobileheader clearfix ">
      <a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>
      <span className="smllogo"> <img src='assets/img/logo/logo-en.svg' alt='logo'/> </span>
      <a href="tel:123456789" className="callusbtn"><i className="fas fa-phone"></i></a>
   </div>
   <div className="wsmainfull sticky clearfix">
      <div className="wsmainwp clearfix">
         <div className="desktoplogo"><a href='/' ><img src='assets/img/logo/logo-en.svg'  alt='logo'/></a></div>
          <nav className="wsmenu clearfix">
            <ul className="wsmenu-list">
               <li aria-haspopup="true">
                   <NavLink  activeClassName='active_class' to="/" exact>Home <i className="fas fa-angle-down"></i></NavLink>
                  <ul className="sub-menu">
                   
                     <li><a href="http://forums.theasianbanker.com/future-of-finance/"  rel="noopener noreferrer" target="_blank">The Asian Banker Forums </a></li>
                     <li><a href="http://www.theasianbanker.com/"  rel="noopener noreferrer" target="_blank">The Asian Banker</a> </li>
                  </ul>
               </li>
               <li aria-haspopup="true"> <NavLink activeClassName='active_class' to="/Agenda" exact>Agenda</ NavLink></li>
               {/* <li><a href="#">Agenda</a></li> */}
               <li aria-haspopup="true">
               <a href="#">Speakers <i className="fas fa-angle-down"></i></a>
               <ul className="sub-menu">
                    <li><NavLink  to="/Speakers">Speakers</NavLink></li>
                  <li><NavLink  to="/Becomespeaker">Become Speaker</NavLink></li>
               </ul>
            </li>
               <li aria-haspopup="true">
                  <a href="#">Sponsors <i className="fas fa-angle-down"></i></a>
                  <ul className="sub-menu">
                     {/* <li><a href="#">Sponsors &amp; Partners</a></li> */}
                     <li><NavLink  to="/Sponsors" >Sponsors &amp; Partners</NavLink></li>
                     <li><NavLink to="/whysponsor" >Why Sponsor</NavLink></li>
                  </ul>
               </li>
               <li aria-haspopup="true"><NavLink  activeClassName='active_class' to="/ContactUs" exact>Contact Us</NavLink></li>
               <li aria-haspopup="true" className="headerbtns clearfix"><NavLink to="/Registration" className="headerbtn01 btn-fill">Register Now</NavLink></li>
               
            </ul>
         </nav>
      </div>
   </div>
   </div>

)
}
};

