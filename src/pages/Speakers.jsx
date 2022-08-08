import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Speakers extends Component {
render(){
return (
    
     <React.Fragment>
    <section className='inner_bg clearfix'>
      <div class="overlay">
         <div class="container clearfix">
            <h2>Speakers</h2>
            <div itemprop="breadcrumb" class="mkdf-breadcrumbs ">
               <NavLink  itemprop="url" to="/" exact>Home</NavLink>
               <span class="mkdf-delimiter">
               &nbsp; / &nbsp;</span>
               <span class="mkdf-current">Speakers</span>
            </div>
         </div>
      </div>
   </section>
   <section className='speakers-section clearfix'>
      <div className='container clearfix'>
         <div className='row clearfix'>
            <div className='col-xl-12 col-md-12'>
               <div className='speaker_title'>
                  <h2> Speakers</h2>
               </div>
            </div>
            <div className='col-sm-4 col-xl-4 col-sm-6'>
               <div className='speakers-box'>
                  <div className='speakers_img'>
                     <NavLink to="/" >
                        <img src='assets/img/speakers/DD-cropped.png'/>
                     </NavLink>
                  </div>
                  <div className='speaker_name'>
                     <h4>Dietrich Domanski</h4>
                  </div>
                  <div className='speaker_designation'>
                     <h5>Secretary General, Financial Stability Board</h5>
                  </div>
                  <div className='view-btn'>
                     <NavLink to="/" className='btn-fill' >View More</NavLink>
                  </div>
               </div>
            </div>
            <div className='col-sm-4 col-xl-4 col-sm-6'>
               <div className='speakers-box'>
                  <div className='speakers_img'>
                     <NavLink to="/" >
                        <img src='assets/img/speakers/pereira-luiz.jpg'/>
                     </NavLink>
                  </div>
                  <div className='speaker_name'>
                     <h4>Luiz Awazu Pereira da Silva</h4>
                  </div>
                  <div className='speaker_designation'>
                     <h5>
                        Deputy General Manager,
                        <div> Bank for International Settlements</div>
                     </h5>
                  </div>
                  <div className='view-btn'>
                     <NavLink to="/" className='btn-fill' >View More</NavLink>
                  </div>
               </div>
            </div>
            <div className='col-sm-4 col-xl-4 col-sm-6'>
               <div className='speakers-box'>
                  <div className='speakers_img'>
                     <NavLink to="/" >
                        <img src='assets/img/speakers/richard-sandor.jpg'/>
                     </NavLink>
                  </div>
                  <div className='speaker_name'>
                     <h4>Richard L. Sandor</h4>
                  </div>
                  <div className='speaker_designation'>
                     <h5>
                        Chairman of the Board and CEO, 
                        <div>American Financial Exchange;</div>
                        <div>Founder, Chicago Climate Exchange</div>
                     </h5>
                  </div>
                  <div className='view-btn'>
                     <NavLink to="/" className='btn-fill' >View More</NavLink>
                  </div>
               </div>
            </div>
            <div className='col-sm-4 col-xl-4 col-sm-6'>
               <div className='speakers-box'>
                  <div className='speakers_img'>
                     <NavLink to="/" >
                        <img src='assets/img/speakers/Zhang-Jun.jpg'/>
                     </NavLink>
                  </div>
                  <div className='speaker_name'>
                     <h4>Zhang Jun</h4>
                  </div>
                  <div className='speaker_designation'>
                     <h5>
                        Dean, School of Economics, 
                        <div>Fudan University</div>
                     </h5>
                  </div>
                  <div className='view-btn'>
                     <NavLink to="/" className='btn-fill' >View More</NavLink>
                  </div>
               </div>
            </div>
            <div className='col-sm-4 col-xl-4 col-sm-6'>
               <div className='speakers-box'>
                  <div className='speakers_img'>
                     <NavLink to="/" >
                        <img src='assets/img/speakers/Huang-Yiping.jpg'/>
                     </NavLink>
                  </div>
                  <div className='speaker_name'>
                     <h4>Richard L. Sandor</h4>
                  </div>
                  <div className='speaker_designation'>
                     <h5>
                        Deputy Dean and Sinar Mas Chair Professor of Finance and Economics 
                        <div>National School of Development,
                           Peking University
                        </div>
                     </h5>
                  </div>
                  <div className='view-btn'>
                     <NavLink to="/" className='btn-fill' >View More</NavLink>
                  </div>
               </div>
            </div>
            <div className='col-sm-4 col-xl-4 col-sm-6'>
               <div className='speakers-box'>
                  <div className='speakers_img'>
                     <NavLink to="/" >
                        <img src='assets/img/speakers/Zhang-Anlong.png'/>
                     </NavLink>
                  </div>
                  <div className='speaker_name'>
                     <h4>Zhang Anlong</h4>
                  </div>
                  <div className='speaker_designation'>
                     <h5>
                        Deputy General Manager, 
                        <div>Financial Technology Department,</div>
                        <div>Industrial and Commercial Bank of China</div>
                     </h5>
                  </div>
                  <div className='view-btn'>
                     <NavLink to="/" className='btn-fill' >View More</NavLink>
                  </div>
               </div>
            </div>
           
         </div>
      </div>
   </section>
     </React.Fragment>
  
)
}
}
