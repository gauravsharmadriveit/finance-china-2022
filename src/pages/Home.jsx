// SideBar.js
import React, {Component} from 'react';
import Speaker_Modal from "./Speaker_Modal";
import { NavLink } from "react-router-dom";
export default class Home extends Component {
render(){
return (
<React.Fragment>
   <div className="home_slider border-radious5">
      <div className="owl-carousel owl-theme owl-loaded owl-drag" id="home_slider">
         <div className="item">
            <picture>
               <source media="(min-width: 479px)"  srcset="assets/img/banner/WebBanner-03.png" alt="about-img"/>
               <img srcSet="assets/img/banner/WebBanner-03.png" alt=""/>
            </picture>
         </div>
         <div className="item">
         <picture>
         <source media="(min-width: 479px)"  srcset="assets/img/banner/WebBanner-03.png" alt="about-img"/>
         <img srcSet="assets/img/banner/WebBanner-03.png" alt=""/>
      </picture>
         </div>
         <div className="item">
         <picture>
         <source media="(min-width: 479px)"  srcset="assets/img/banner/WebBanner-03.png" alt="about-img"/>
         <img srcSet="assets/img/banner/WebBanner-03.png" alt=""/>
      </picture>
         </div>
      </div>
   </div>
   <section class="event_details clearfix">
      <div class="container clearfix">
         <div class="row justify-content-center aling-items-center clearfix">
            <div class="col-md-3 col-xl-3 col-6">
               <div class="icon-box">
                  <img srcset="assets/img/icon/calendar.svg"/>
                  <div class="date">
                     <div class="title">Date</div>
                     <div class="eventdate">28 July 2022</div>
                  </div>
               </div>
            </div>
            <div class="col-md-3 col-xl-3 col-6">
               <div class="icon-box">
                  <img srcset="assets/img/icon/location.svg"/>
                  <div class="date">
                     <div class="title">Location</div>
                     <div class="eventdate">China</div>
                  </div>
               </div>
            </div>
            <div class="col-md-3 col-xl-3 col-6">
               <div class="icon-box">
                  <img srcset="assets/img/icon/tickets.svg"/>
                  <div class="date">
                     <div class="title">Remaining</div>
                     <div class="eventdate">200+ Tickets</div>
                  </div>
               </div>
            </div>
            <div class="col-md-3 col-xl-3 col-6">
               <div class="icon-box">
                  <img srcset="assets/img/icon/speaker.svg"/>
                  <div class="date">
                     <div class="title">Speakers</div>
                     <div class="eventdate">20+ Professional Speakers</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className='aboutevent clearfix'>
      <div className='container clearfix'>
         <div className='row clearfix'>
            <div className='col-md-7'>
               <div className='eventheading'>
                  <h2>Global challenges and China’s opportunities  </h2>
               </div>
               <div className='eventcontent'>
                  <div className='visible-content'>
                     <p>The global financial services industry is undergoing a significant digital transformation journey. Incumbents are accelerating to modernise their legacy systems to remain competitive with the rise of new challenger banks, fintechs and changes in customer behaviour.  The implementation of technologies such as artificial intelligence (AI), machine learning (ML), internet of things (IoT), advanced analytics, cloud computing and robotic process automation (RPAs) are fundamental for financial institutions (FIs) to thrive in this changing environment. The adoption of open banking APIs and collaboration with fintechs, and third parties will enable FIs to increase digital customer engagement by offering more customised products to provide a hyper-personalised experience. This will meet customer needs in a secure, agile and scalable way.</p>
                     <p>“Unexpected” factors - Omicron prevention and tensions between Ukraine and Russia will weigh on China’s economy in the short term while triple pressures from shrinking demand, supply shocks and weakening expectations continue to persist. With the effective control of the epidemic, new tools and refined policies, the normal economic order is expected to be restored, and the economic operations to return to the normal track. China’s financial services industry players continue to focus on digital transformation, boost financing to real economy and small and medium-sized sector, accelerate reforms and opening-up as well as drive green finance for a stable, high-quality and sustainable economic growth.  </p>
                     <div class="read-more-content">
                        <p>At <b><a href='/'>Finance China 2022,</a></b> we will focus on how China’s financial services industry accelerates the further reform and transformation to promote China’s high-quality growth as well as contribute a global green, resilient and inclusive economic recovery. There will be three tracks in this conference, focusing on the transformation of finance and banking industry, the continuous disruption to the finance through the technology innovation and a customised topic track for the host city. </p>
                        <p>The annual conference gathers the best minds among financial institutions, regulators, policy makers, economists and services providers to meet and share professional insights, work on detailed solutions, and discuss the latest trends in the industry.</p>
                     </div>
                     <button class="read-more-btn" >Read More</button>
                  </div>
                  <div  className='register_button text-center mb-0 mt-0 row'>
                     <div class="col-md-3 col-6">                        
                        <NavLink to="/Registration" className="event_btn btn-fill">Register Now</NavLink>
                     </div>
                     <div class="col-md-3 col-6">
                        <a href="javascript:void(0);" class="event_btn btn-fill">Add to Calendar</a>
                     </div>
                     <div class="col-md-3 col-6">
                        <a href="#" id="trigger" class="event_btn btn-fill">Remind Me</a>
                     </div>
                     <div class="col-md-3 col-6">
                        <NavLink to="/ContactUs" className="event_btn btn-fill">Contact Us</NavLink>
                     </div>
                  </div>
               </div>
            </div>
            <div className='col-md-5'>
               <div className='video_box'>
               <div className='iframe-box'><iframe id="9013cc9c-d30e-1ee6-919e-2773c5002acc" src="https://iframe.dacast.com/vod/afab8c3f745176672e0f826ea29f260e/9013cc9c-d30e-1ee6-919e-2773c5002acc" width="100%" height="100%" frameborder="0" scrolling="no" allow="autoplay;encrypted-media" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen ></iframe></div>
                  <div className='socialBrhld mt-3'>
                     <div className="addthis_inline_share_toolbox"></div>
                  </div>
                  <div class="photo_x_gallery mt-2">
                     <div class="site-banner-overlay">
                        <div class="owl-carousel owl-theme" id="event-slide">
                           <div class="item ">
                              <div class="slider-img">
                                 <picture>
                                    <img src="assets/img/photo-event/e-1.png" alt=""  />
                                 </picture>
                              </div>
                           </div>
                           <div class="item ">
                              <div class="slider-img">
                                 <picture>
                                    <img src="assets/img/photo-event/e-2.png" alt=""  />
                                 </picture>
                              </div>
                           </div>
                           <div class="item ">
                              <div class="slider-img">
                                 <picture>
                                    <img src="assets/img/photo-event/e-3.png" alt=""  />
                                 </picture>
                              </div>
                           </div>
                           <div class="item ">
                              <div class="slider-img">
                                 <picture>
                                    <img src="assets/img/photo-event/e-4.png" alt=""  />
                                 </picture>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <p class="moreImg mt-2 mb-0">For Past Event Photos Click &nbsp;
                        <a target="_blank" href="https://www.facebook.com/media/set/?vanity=TheAsianBanker&set=a.10158692975119804">Here</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className='keyfocus bg1 triangle-pattern-right clearfix'>
      <div className='container clearfix'>
         <div className='row justify-content-center align-items-center clearfix'>
            <div className='col-md-12'>
               <div className='title'>
                  <h2>Key focus areas include</h2>
               </div>
            </div>
            <div className='col-xl-3 col-lg-6 col-md-6 mt-4'>
               <div className='feature-item'>
                  <div className="feature-item__icon feature-item__icon-1">
                     <img src='assets/img/icon/recovery.png' />
                  </div>
                  <div className='feature-item__content'>
                     <p>World economic outlook: an uncertain recovery </p>
                  </div>
               </div>
            </div>
            <div className='col-xl-3 col-lg-6 col-md-6 mt-4'>
               <div className='feature-item'>
                  <div className="feature-item__icon feature-item__icon-2">
                     <img src='assets/img/icon/team.png' />
                  </div>
                  <div className='feature-item__content'>
                     <p>An accelerated integration between digital economy and real economy</p>
                  </div>
               </div>
            </div>
            <div className='col-xl-3 col-lg-6 col-md-6 mt-4'>
               <div className='feature-item'>
                  <div className="feature-item__icon feature-item__icon-3">
                     <img src='assets/img/icon/diagram.png' />
                  </div>
                  <div className='feature-item__content'>
                     <p>How is China boosting slowing economy?</p>
                  </div>
               </div>
            </div>
            <div className='col-xl-3 col-lg-6 col-md-6 mt-4'>
               <div className='feature-item'>
                  <div className="feature-item__icon feature-item__icon-4">
                     <img src='assets/img/icon/technologys.png' />
                  </div>
                  <div className='feature-item__content'>
                     <p>Big retail transformation – the trend of China’s retail banking </p>
                  </div>
               </div>
            </div>
            <div className='col-xl-3 col-lg-6 col-md-6 mt-4'>
               <div className='feature-item'>
                  <div className="feature-item__icon feature-item__icon-5">
                     <img src='assets/img/icon/rating.png' />
                  </div>
                  <div className='feature-item__content'>
                     <p>Big wealth management - Customer experience becoming the new battlefield </p>
                  </div>
               </div>
            </div>
            <div className='col-xl-3 col-lg-6 col-md-6 mt-4'>
               <div className='feature-item'>
                  <div className="feature-item__icon feature-item__icon-6">
                     <img src='assets/img/icon/funds.png' />
                  </div>
                  <div className='feature-item__content'>
                     <p>Green finance and dual carbon goals </p>
                  </div>
               </div>
            </div>
            <div className='col-xl-3 col-lg-6 col-md-6 mt-4'>
               <div className='feature-item'>
                  <div className="feature-item__icon feature-item__icon-7">
                     <img src='assets/img/icon/risks.png' />
                  </div>
                  <div className='feature-item__content'>
                     <p>Building a resilient financial system to identify and mitigate risks  </p>
                  </div>
               </div>
            </div>
            <div className='col-xl-3 col-lg-6 col-md-6 mt-4'>
               <div className='feature-item'>
                  <div className="feature-item__icon feature-item__icon-8">
                     <img src='assets/img/icon/profit.png' />
                  </div>
                  <div className='feature-item__content'>
                     <p>Boosting digitisation in financial services  </p>
                  </div>
               </div>
            </div>
            <div className='col-xl-3 col-lg-6 col-md-6 mt-4'>
               <div className='feature-item'>
                  <div className="feature-item__icon feature-item__icon-9">
                     <img src='assets/img/icon/technology.png' />
                  </div>
                  <div className='feature-item__content'>
                     <p>Facilitating SMEs' financing using digital technologies </p>
                  </div>
               </div>
            </div>
            <div className='col-xl-3 col-lg-6 col-md-6 mt-4'>
               <div className='feature-item'>
                  <div className="feature-item__icon feature-item__icon-10">
                     <img src='assets/img/icon/ai.png' />
                  </div>
                  <div className='feature-item__content'>
                     <p>Rebuilding digital trust with the use of AI </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className='Who_will_attend bg2  clearfix '>
      <div className='container clearfix'>
         <div className='row'>
            <div className='col-md-12'>
               <div className='title'>
                  <h2>Who will attend?</h2>
                  <p class="text-center attend_xp">The programme is designed for</p>
               </div>
            </div>
            <div className='row'>
               <div className='col-md-6 attend-list'>
                  <ul>
                     <li>Senior executives and business decision-makers from retail banking, transaction banking, cards and payments, customer relationship management, data and analytics, risk management, financial inclusion, consumer credit, technology and operations</li>
                     <li>Senior executives in technology, operations, data and analytics and digital banking </li>
                     <li>Heads of technical divisions such as profitability systems, customer service improvement, product innovation and other functions within banks that take a holistic view of technology</li>
                  </ul>
               </div>
               <div className='col-md-6 attend-list'>
                  <ul>
                     <li>Public sector officials, regulators and policymakers</li>
                     <li>Heads and senior executives involved in developing multi-channel distribution capabilities</li>
                     <li>Alternative financial services providers, fintechs, venture capitalists, investors and start-ups</li>
                     <li>Professional service providers, including technology companies, rating agencies and consultancies</li>
                  </ul>
               </div>
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
                     {/* <NavLink to="/" className='btn-fill' data-toggle="modal" data-target="#myModal" >View More</NavLink> */}
                     {/* <NavLink to="" className='btn-fill' >View More</NavLink> */}
                     <a href='javascript:void();' className='btn-fill'>View More</a>
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
                     <a href='javascript:void();' className='btn-fill'>View More</a>
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
                     <a href='javascript:void();' className='btn-fill'>View More</a>
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
                     <a href='javascript:void();' className='btn-fill'>View More</a>
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
                     <a href='javascript:void();' className='btn-fill'>View More</a>
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
                     <a href='javascript:void();' className='btn-fill'>View More</a>
                  </div>
               </div>
            </div>
            <div className='col-md-2 mx-auto mt-3'>
              <div className='view-more-btn'>
              <NavLink to='/Speakers' className='btn-fill'>View More Spekers</NavLink>
              </div>
            </div>
         </div>
      </div>
   </section>
   <section className='sponsors-section clearfix'>
      <div className='container clearfix'>
         <div className='row clearfix'>
            <div  className='col-md-12'>
               <div className='sponsors_title'>
                  <h2>Sponsors &amp; Partners</h2>
               </div>
            </div>
            <div className='col-xl-4 col-md-4 col-sm-12'>
               <div className='sponsors-title'>
                  <h4>Sponsors &amp; exhibitors</h4>
               </div>
               <div class="owl-carousel owl-theme bg-inverse sponsorspartners">
                  <div class="item">
                     <a  className='sponsorspartners-item' href='javascript:void(0);s'><img src="assets/img/sponsors/STL.png" alt="Sponsors-exhibitors"/></a>
                  </div>
                  <div class="item">
                     <a  className='sponsorspartners-item' href='javascript:void(0);s'><img src="assets/img/sponsors/ping-bank.png" alt="Sponsors-exhibitors"/></a>
                  </div>
                  <div class="item">
                     <a  className='sponsorspartners-item' href='javascript:void(0);s'><img src="assets/img/sponsors/china-construction.png" alt="Sponsors-exhibitors"/></a>
                  </div>
                  <div class="item">
                     <a  className='sponsorspartners-item' href='javascript:void(0);s'><img src="assets/img/sponsors/bank-of-bijing.png" alt="Sponsors-exhibitors"/></a>
                  </div>
                  <div class="item">
                     <a  className='sponsorspartners-item' href='javascript:void(0);s'><img src="assets/img/sponsors/china-minsheng.png" alt="Sponsors-exhibitors"/></a>
                  </div>
                  <div class="item">
                     <a  className='sponsorspartners-item' href='javascript:void(0);s'> <img src="assets/img/sponsors/lexin-fintech.png" alt="Sponsors-exhibitors"/></a>
                  </div>
                  <div class="item">
                     <a  className='sponsorspartners-item' href='javascript:void(0);s'><img src="assets/img/sponsors/tondun.png" alt="Sponsors-exhibitors"/></a>
                  </div>
               </div>
            </div>
            <div className='col-xl-4 col-md-4 col-sm-12'>
               <div className='sponsors-title'>
                  <h4>Supporting organisations</h4>
               </div>
               <div class="owl-carousel owl-theme bg-inverse sponsorspartners">
                  <div class="item">
                     <NavLink   className='sponsorspartners-item' to="/"><img src="assets/img/sponsors/saif.png" alt="Supporting organisations"/></NavLink>
                  </div>
               </div>
            </div>
            <div className='col-xl-4 col-md-4 col-sm-12'>
               <div className='sponsors-title'>
                  <h4>Media Partners</h4>
               </div>
               <div class="owl-carousel owl-theme bg-inverse sponsorspartners">
                  <div class="item">
                     <NavLink to="/" className='sponsorspartners-item'> <img src="assets/img/sponsors/m-1.png" alt="Media Partners"/></NavLink>
                  </div>
                  <div class="item">
                     <NavLink to="/"  className='sponsorspartners-item'>  <img src="assets/img/sponsors/m-2.png" alt="Media Partners"/></NavLink>
                  </div>
                  <div class="item">
                     <NavLink to="/"  className='sponsorspartners-item'> <img src="assets/img/sponsors/m-3.png" alt="Media Partners"/></NavLink>
                  </div>
                  <div class="item">
                     <NavLink to="/"  className='sponsorspartners-item'>  <img src="assets/img/sponsors/m-4.png" alt="Media Partners"/></NavLink>
                  </div>
                  <div class="item">
                     <NavLink to="/"  className='sponsorspartners-item'>  <img src="assets/img/sponsors/m-5.png" alt="Media Partners"/></NavLink>
                  </div>
                  <div class="item">
                     <NavLink to="/"  className='sponsorspartners-item'>   <img src="assets/img/sponsors/m-6.png" alt="Media Partners"/></NavLink>
                  </div>
                  <div class="item">
                     <NavLink to="/"  className='sponsorspartners-item'>  <img src="assets/img/sponsors/m-7.png" className='last-media' alt="Media Partners"/></NavLink>
                  </div>
               </div>
            </div>
            <div className='col-md-3 mx-auto mt-3'>
              <div className='view-more-btn'>
              <NavLink to='/Sponsors' className='btn-fill'>View More Sponsors &amp; Partners</NavLink>
              </div>
            </div>
         </div>
      </div>
   </section>
   <section className='priceevent clearfix'>
      <div className='container clearfix'>
         <div className='row clearfix'>
            <div className='col-md-12 col-xl-md-12'>
               <div className='register-title clearfix'>
                  <h2>Register Now </h2>
               </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-10 offset-md-2'>
               <div className='pricing-table mt-30'>
                  <h4 class="plan-name">Conference Pass</h4>
                  <div className='plan-list'>
                     <ul className='mh-270'>
                        <li>Full access to the Finance China 2022 conference</li>
                        <li>Full access to the conference presentation slide decks</li>
                        <li>Full access to the exhibition area</li>
                     </ul>
                  </div>
                  <NavLink to="/Registration" className="template-btn bordered-btn">Select Now <i class="fas fa-arrow-right"></i></NavLink>
                  <div  className='registrations-received'>All registrations received are subject to confirmation.</div>
               </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-10 '>
               <div className='pricing-table mt-30'>
                  <h4 class="plan-name">Sponsors &amp; Exhibitors</h4>
                  <div className='plan-list'>
                     <ul>
                        <li>Customised packages matching your interest and requirements</li>
                        <li>Face to face interactions with key decision makers</li>
                        <li>Thought leadership demonstration to target audience</li>
                        <li>Increased publicity via branding and marketing campaigns</li>
                     </ul>
                  </div>
                  {/* <a href="#" class="template-btn bordered-btn">Select Now <i class="fas fa-arrow-right"></i></a> */}
                  <NavLink to="/Registration" className="template-btn bordered-btn">Select Now <i class="fas fa-arrow-right"></i></NavLink>
               </div>
            </div>
         </div>
      </div>
   </section>

<section className='past_event clearfix'>
   <div className='container clearfix'>
         <div className='row clearfix'>
         <div className='col-md-12 col-xl-md-12'>
            <div className='register-title clearfix'>
                  <h2>Past Events </h2>
            </div>
          </div>
          <div className="col-md-4 mx-auto col-6 col-md-25">
            <div className='past-logo'>
               <a href='https://www.theasianbanker.com/finance-china2021/' target="_blank" rel="noopener noreferrer">
               <img src="assets/img/logo/logo_2021.png"/>  
               </a>
            </div>
          </div>
          <div className="col-md-4 mx-auto col-6 col-md-25">
            <div className='past-logo'>
               <a href='https://www.theasianbanker.com/finance-china2020/' target="_blank" rel="noopener noreferrer">
               <img src="assets/img/logo/logo_2020.png"/>  
               </a>
            </div>
          </div>
          <div className="col-md-4 col-6  col-md-25">
          <div className='past-logo b_r_0'>
             <a href='https://forums.theasianbanker.com/finance-china2019/' target="_blank" rel="noopener noreferrer">                  
               <img src="assets/img/logo/logo_2019.png"/>
             </a>
          </div>
        </div>
         </div>
   </div>
</section>
<Speaker_Modal/>
</React.Fragment>

)
}
}