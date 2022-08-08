import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
export default class Agenda extends Component {
render(){
return (
<React.Fragment>
   <section className='inner_bg clearfix'>
      <div class="overlay">
         <div class="container clearfix">
            <h2>The Agenda</h2>
            <div itemprop="breadcrumb" class="mkdf-breadcrumbs ">
               <NavLink  itemprop="url" to="/" exact>Home</NavLink>
               <span class="mkdf-delimiter">
               &nbsp; / &nbsp;</span>
               <span class="mkdf-current">The Agenda</span>
            </div>
         </div>
      </div>
   </section>
   <section className='agenda-section clearfix'>
      <div className='container clearfix'>
         <div className='row clearfix'>
           <div className='time-line-section  clearfix'>
  <div className='container clearfix'>
     <div className='row clearfix'>
        <div className='col-md-12'>
           <div id='page'>
              <div className='awsm-container content-left-align'>
                 <div className='awsm-timeline awsm-timeline-style-1 awsm-date-opposite awsm-left-align'>
                    <div className='timeline-heading text-center'>
                    <div className='agenda_heading'>
                    <h2>Finance China 2022</h2>
                    <h5>28 July 2021,  China</h5>
                 </div>  
                    </div>
                    <div className='awsm-timeline-block awsm-timeline-label-block'   >
                       <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-document-signed' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>08:30 – 09:00</span>
                                <h2>Registration</h2>
                             </div>
                          </div>
                       </div>
                       <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-document-signed' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>09:00 – 10:45</span>
                                <h2>Welcome address</h2>

                                <div className='awsm-list'>
                                 <h4>Opening Keynotes </h4>
                                   <p><b>Invited speakers include:</b></p>
                                    <p><b>Isabel Schnabel,</b>Executive Board Member, European Central Bank</p>
                                    <p><b>Jason Furman,</b>Professor, the Practice of Economic Policy, Harvard Kennedy School; 28th Chairman, Council of Economic Advisers</p>
                                    <p><b>Liu Jianjun,</b>President, Postal Savings Bank of China</p>
                                    <p><b>Ma Jun,</b>Co-chair, G20 Sustainable Finance Working Group; President, Beijing Institute of Finance and Sustainability</p>
                                    <p><b>Yu Yaodong,</b>Deputy CEO and Chief Economist, Dacheng Fund; former Director General, Research Institute of Banking and Finance, People's Bank of China</p>
                                    <div className='agenda_subheading'>
                                       <h3>Leadership dialogue: The opportunities and challenges for China’s financial services industry in an age of upheaval</h3>
                                       <p>The turbulence posed by the pandemic as well as factors including geopolitical conflicts and deglobalisation pose critical threats to the global economic recovery and world order reshaping. </p>
                                       <p>In the face of these complex and uncertain times, what are the recovery barriers for world economy and China? Can the world start to rebuild the trust and cooperate from digital technologies and sustainable development? How China’s financial institutions comply with regulations to identify and mitigate risks, deepen reforms and opening-up, rebuild the resilience of the financial system to support the economic growth back to the normal track? </p>
                                       <ul>
                                       <li>World economic outlook: an uncertain recovery </li>
                                       <li>An accelerated integration between digital economy and real economy</li>
                                       <li>How is China boosting slowing economy? </li>
                                        <li>Green finance for green transition </li>                                                                       
                                   </ul>  
                                     <p><b>Invited panellists include: </b></p>
                                     <p><b>Liu Jianjun,</b>President, Postal Savings Bank of China</p>
                                     <p><b>Ma Jun,</b>Co-chair, G20 Sustainable Finance Working Group; President, Beijing Institute of Finance and Sustainability</p>
                                    <p><b>Yu Yaodong,</b>Deputy CEO and Chief Economist, Dacheng Fund; former Director General, Research Institute of Banking and Finance, People's Bank of China</p>
                                    </div>
                                    
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-mug-hot-alt' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>10:45 –11:15</span>                                
                                <p><b>Tea/Coffee break</b></p>                                
                             </div>
                          </div>
                       </div>
                       {/* ------------------Track A satrt-------------------------- */}

                       <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-document-signed' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>11:15 – 12:00</span>
                                <div className="alert alert-success" role="alert">Track A —— Finance and banking industry  </div>
                                <h2>Retail banking: a business in deep transformation </h2>
                                <div className='awsm-list'>
                                   <p>Retail banking revenues and profitability increased exponentially duringthe pandemic andhas become the main revenue driverfor many Chinese banks. Asthe industry players strengthen their retail strategies,what challenges are they facing? </p>
                                   <div className='agenda_subheading'>
                                    <ul>
                                       <li>World economic outlook: an uncertain recovery </li>
                                       <li>An accelerated integration between digital economy and real economy</li>
                                       <li>How is China boosting slowing economy? </li>
                                        <li>Green finance for green transition </li>                                                                       
                                   </ul>  
                                    <p><b>Invited speakers/panellists include: </b></p>                                   
                                     <p><b>Wang Weimin,</b>Vice President, Retail Banking; General Manager, Open Banking Center, Ping An Bank</p>
                                     <p><b>Zhan Zhihui,</b>General Manager,Retail and online banking, Industrial Bank</p>
                                     <p><b>Li Feng,</b>Managing Director,Consumer and SME Banking, Standard Chartered</p>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className='awsm-timeline-block awsm-even-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i class="fi fi-rr-restaurant"></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>12:00 – 13:00 </span>
                                <h2>Luncheon </h2>                              
                              </div>
                          </div>
                       </div>
                       <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-document-signed' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>13:00 – 14:00 </span>
                                <h2>Big wealth management - Customer experience becoming the new battlefield  </h2>

                                <div className='awsm-list'>
                                  <p>The total size of China's personal investable assets isexpectedto reach RMB 330trillion (US$51.5 trillion) approx. by2025.The 2021 annual reports ofseveral listed banks showacceleratedgrowth in thewealth managementsector. In this session, we will discuss the way forward forbig wealth management as one of the core businesseswithin financial services industry. </p>
                                   <div className='agenda_subheading'>
                                    <ul>
                                       <li>From self-centerd product sales to customer-centric asset allocation</li>
                                       <li>The opportunities and challenges of wealth management as China’s financial market further opening-up</li>
                                       <li>Improving your customers’ financial and investment literacy in trying and uncertain economic times</li>
                                       <li>Use of digital channels to offer ever changing needs of the customers</li>                                                                    
                                   </ul>  
                                    <p><b>Invited speakers/panellists include: </b></p>                                   
                                     <p><b>Sun Na,</b>General Manager,Personal Finance Department, China Construction Bank</p>
                                     <p><b>Wang Hongdong,</b>General Manager,Wealth Management, CITIC Bank</p>
                                     <p><b>Liang Bing,</b>President,SchroderBOCOM Wealth Management</p>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-document-signed' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>14:00 – 14:45 </span>
                                <h2>Green finance and dual carbon goals  </h2>

                                <div className='awsm-list'>
                                  <p>Chinese financial institutions have accelerated to scale up their green finance businesses as the government made a commitment to achieve a peak in carbon dioxide emissions before 2030 and to become carbon neutral before 2060. What can we learn from international practices on green finance, transition finance and climate finance? What are the achievements of China's carbon market in the first year? How do we promote international cooperation?  </p>
                                   <div className='agenda_subheading'>
                                    <ul>
                                       <li>Global green finance outlook </li>
                                       <li>The first year of China’s national carbon market</li>
                                       <li>Climate change: what are the risks to financial stability? </li>
                                       <li>Professional skills and competencies set out for roles in green finance</li>    
                                       <li>Applying digital technologies to accelerate the green finance agenda</li>                                                                
                                   </ul>  
                                    <p><b>Invited speakers/panellists include:  </b></p>                                   
                                     <p><b>Christoph Nedopil Wang,</b>Associate Professor of Economics and Director, Green Finance and Development Center, Fanhai International School of Finance, Fudan University.</p>
                                     <p><b>Xu Lin,</b>Chairmen, China-U.S. Green Fund</p>
                                     <p><b>Ma Xianfeng,</b>CEO, China Chengxin Credit Ratings</p>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-document-signed' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>14:45 – 15:30 </span>
                                <h2>Building a resilient financial system to identify and mitigate risks </h2>
                                <div className='awsm-list'>
                                  <p>Concerns of potential financial risks that may be brought by global efforts to stimulate economic recovery are raised. In April, People’s Bank of China (PBOC) issued a draft law on financial stability in a bid to further strengthen safety nets to prevent systemic financial risks. At the same time, digital technologies and the emergence of fintechs herald a new age of financial crime. In this session, we will focus on how financial institutions need to readjust their own risk management mechanisms to establish a stable and healthy ecosystem. </p>
                                   <div className='agenda_subheading'>
                                    <ul>
                                       <li>Balance the real economy growth and systemic risks </li>
                                       <li>How to deal with nonfinancial sector’s debt?</li>
                                       <li>Combatting financial crime in a digital age </li>                                                                                                     
                                   </ul>  
                                    <p><b>Invited speakers/panellists include:   </b></p>                                   
                                     <p><b>Zeng Gang,</b>Deputy Director, National Finance and Development Laboratory; Director, Shanghai Finance and Development Laboratory.</p>
                                     <p><b>Zhang Zhang,</b>Deputy General Manager, Risk Management Department, Bank of China</p>
                                     <p><b>Zhu Shihu,</b>General Manager, Data Center; Deputy General Manager, Information Technology Department, Everbright Trust</p>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                      {/* -----------------------Track A End------------------------------- */}
                      {/* -----------------------Track B Start----------------------------- */}
                      <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-document-signed' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>11:15 – 12:00</span>
                                <div className="alert alert-danger" role="alert">Track B——Digital technologies innovation   </div>
                                <h2>Boosting digitisation in financial services  </h2>
                                <div className='awsm-list'>
                                   <p>Finance is undergoing a further profound digital transformation, from internal organizational structure; to the business models; and the extension of external cooperation. We will have traditional financial institutions, fintechs and technology companies to discuss how they embrace partnership to meet diversified needs of customers in the digital era; as well as how they maintain strong innovation ability on the basis of complying with regulations.  </p>
                                   <div className='agenda_subheading'>
                                    <ul>
                                       <li>The roadmap of next-gen digitisation of traditional banks </li>
                                       <li>Digital ecosystem building-up strategies for financial institutions and fintech</li>
                                       <li>The relationship among technologies, products and customers </li>                                                                                                             
                                   </ul>  
                                    <p><b>Invited speakers/panellists include:  </b></p>                                   
                                     <p><b>Zhang Anlong,</b>Deputy General Manager, Financial Technology Department, Industrial and Commercial Bank of China</p>
                                     <p><b>Chen Haining,</b>General Manager, Information Technology Department, Shanghai Pudong Development Bank</p>                                     
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-document-signed' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>13:00 – 14:00 </span>
                                <h2>Architecting the future infrastructure of finance  </h2>
                                <div className='awsm-list'>
                                  <p>Financial institutions continue to invest heavily in technologies to accelerate their digital transformation and improve their core competencies. On the other hand, they are actively developing new products and services as the development of new technologies and new concept, such as metaverse. </p>
                                   <div className='agenda_subheading'>
                                    <ul>
                                       <li>Leveraging cloud to create new business frontiers </li>
                                       <li>Latest development of CBDC</li>
                                       <li>Can 5G and IoT possibly integrate with AI and blockchain to form a new ecosystem? </li>    
                                       <li>Banking in the metaverse: the next frontier</li>                                                                                                 
                                   </ul>  
                                    <p><b>Invited speakers/panellists include:  </b></p>                                   
                                     <p><b>Benoît Coeuré,</b>Head, BIS Innovation Hub.</p>
                                     <p><b>Christine Moy,</b>Global Head, Metaverse, JP Morgan</p>                                     
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-document-signed' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>14:00 – 14:45 </span>
                                <h2>Facilitating SME financing  </h2>
                                <div className='awsm-list'>
                                  <p>At the end of 2021 Q4, the outstanding balance of loans to SMEs reached RMB 50.0 trillion (US$7.8 trillion), which strongly supported the recovery and development of small and micro enterprises. When financial institutions continue to support SMEs, they try to optimise the credit structure to adapt for various demands from enterprises in different regions and different industries.  </p>
                                   <div className='agenda_subheading'>
                                    <ul>
                                       <li>Using two chains – blockchain + supply chain finance to close the funding gap for SMEs </li>
                                       <li>Unleashing the potential of alternative data and AI in credit assessment</li>
                                       <li>Case studies: how technologies empower small and medium-sized banks to solve the problem of SME financing? </li>                                                                                          
                                   </ul>  
                                    <p><b>Invited speakers/panellists include:  </b></p>                                   
                                     <p><b>Xu Jiang,</b>Chief Expert and General Manger, Financial Inclusion Department, Agriculture Bank of China.</p>
                                     <p><b>Huang Yi,</b>President, Sichuan Tianfu Bank</p> 
                                     <p><b>Ma Jian,</b>Director, Industrial and Commercial Finance, HSBC China</p>                                    
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-document-signed' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>14:45 – 15:30 </span>
                                <h2>Governance and compliance - Harnessing the full capabilities of AI </h2>
                                <div className='awsm-list'>
                                  <p>AI and big data have been changing the finance industry. They can be exploited to inflict as much harm such as security, privacy violation and algorithmic bias as it can do good. In face of possible risks, how we properly develop and utilize AI technology and big data under the premise of security?  </p>
                                   <div className='agenda_subheading'>
                                    <ul>
                                       <li>New regulatory approach to encourage responsible implementation </li>
                                       <li>Rebuilding trust and privacy with blockchain</li>
                                       <li>Can we teach morals and ethics to AI? </li>                                                                                          
                                   </ul>  
                                    <p><b>Invited speakers/panellists include:  </b></p>                                   
                                     <p><b>Ryad Chellali,</b>Professor of AI &amp; Robotics, Nanjing University of technology </p>
                                     <p><b>Yang Qiang,</b>Chief AI Officer, Webank </p>                                                                
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       {/* --------------------Track B End------------------------------------- */}
                       {/* ------------------------Track C Start------------------------------ */}
                       <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-document-signed' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>15:30 – 16:00</span> 
                                <div className="alert alert-warning" role="alert">Track C – Customised topic for the host city </div>                               
                                <p><b>Tea/Coffee break</b></p>                                
                             </div>
                          </div>
                       </div>
                       
                       <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-document-signed' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>16:00 – 17:00 </span>
                                <h2>Shape the future together </h2>
                                <div className='awsm-list'>
                                  <p>Financial services industry has been performing more functions in society as we are moving from integration and cooperation towards a sustainable, resilient and human centric ecosystem. During this process, will finance play a key role or just a participant? </p>
                                   <div className='agenda_subheading'>
                                    <ul>
                                       <li>Partnership beyond finance: taking inspiration from each other</li>
                                       <li>Can finance help to rebuild trust across regions?</li>
                                       <li>Web 3.0: a new player</li>                                                                                          
                                   </ul>  
                                    <p><b>Invited speakers/panellists include:  </b></p>                                   
                                     <p><b>Ryad Chellali,</b>Professor of AI &amp; Robotics, Nanjing University of technology </p>
                                     <p><b>Yang Qiang,</b>Chief AI Officer, Webank </p>                                                                
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>

                       <div className='awsm-timeline-block awsm-odd-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fi fi-rr-microphone' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>17:00 </span>
                                <h2>End of conference</h2>
                             </div>
                          </div>
                       </div>
                       {/* <div className='awsm-timeline-block awsm-even-item  wow slideDown'>
                          <div className='awsm-timeline-img'>
                             <span><i className='fa fa-microphone' aria-hidden='true'></i></span>
                          </div>
                          <div className='awsm-timeline-content animated wow slideDown'>
                             <div className='awsm-timeline-content-inner'>
                                <span className='awsm-date'>18:00 </span>
                                <h2>Group Photo</h2>
                             </div>
                          </div>
                       </div> */}
                    </div>
                 </div>
              </div>
           </div>
        </div>
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
