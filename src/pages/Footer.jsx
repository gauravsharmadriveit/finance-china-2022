// SideBar.js
import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
export default class Footer extends Component {
render(){
    const currentYear = (new Date().getFullYear())
    const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear
return (
   <React.Fragment>
   <div className="footer-widgets text-white clearfix">
      <div className='container clearfix'>
         <div  className='row clearfix'>
            <div className='col-md-12'>
               <ul className='social-media-list'>
                  <li><a className='fbIocn' href="https://www.facebook.com/TheAsianBanker" rel="noopener noreferrer" target="_blank" ><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                  <li><a className='twIcon' href="https://twitter.com/theasianbanker" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a className='linkIcon' href="https://www.linkedin.com/company/the-asian-banker" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                  <li><a className='insaIcon' href="https://instagram.com/theasianbankerofficial/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a className='ytIcon' href="https://www.youtube.com/user/theasianbanker" rel="noopener noreferrer" target="_blank"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
               </ul>
            </div>
            <div class="col-md-12 text-center">
               <div class="text-center linkFtr">
                  <ul>
                     <li><NavLink to="/Registration" exact>Register
                        Today</NavLink> |
                     </li>
                     <li><NavLink to="/ContactUs" exact>Contact Us</NavLink> |</li>
                     {/* <li><a href="javascript:void(0);">Venue</a> |</li> */}
                     <li><a href="#" >Speakers </a> |</li>                    
                     <li><NavLink to="/Sponsors">Sponsors &amp; Partners </NavLink>| </li>
                     <li><NavLink to="/Agenda" exact>Agenda</NavLink> |</li>
                     <li><NavLink to="/Exhibitor">Become A Sponsor/Partners </NavLink> |
                     </li>
                     <li><NavLink to="/Becomespeaker">Become A Speaker</NavLink></li>
                  </ul>
               </div>
            </div>

         </div>
         
      </div>
   </div>
   <div class="bottom-footer">
					<div class="container">
						<p>&copy; Copyright The Asian Banker, { yearTxt }</p>
					</div>
				</div>
</React.Fragment>
)
}
}