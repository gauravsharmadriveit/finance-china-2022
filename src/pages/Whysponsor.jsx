import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
export default class Becomespeaker extends Component {
render(){
return (
<React.Fragment>
   <section className='inner_bg clearfix'>
      <div class="overlay">
         <div class="container clearfix">
            <h2>Why Sponsor</h2>
            <div itemprop="breadcrumb" class="mkdf-breadcrumbs ">
               <NavLink  itemprop="url" to="/" exact>Home</NavLink>
               <span class="mkdf-delimiter">
               &nbsp; / &nbsp;</span>
               <span class="mkdf-current">Why Sponsor</span>
            </div>
         </div>
      </div>
   </section>
   <section className='why-sponsor section clearfix'>
      <div className='container clearfix'>
         <div className='row clearfix'>
           <div class="col-md-12">
           <div className='why-sponsor-content'>
               <p>Achieve your organisation’s business goals in this regional gathering of key decision makers and leading practitioners</p>
               <p>Your organization will obtain a wide range of benefits by participating in Finance China 2022</p>
               <div className='list-why'>
                  <ul>
                     <li>Generate tangible business leads and expand your contact base by networking with senior decision makers from the financial services industry.</li>
                     <li>Demonstrate thought leadership to an audience of senior executives as a presenter or speaker on current issues.</li>
                     <li>Establish business relationships with peers from across Asia via opportunities created through our interactive conferences and private briefings.</li>
                     <li>Garner global publicity via logo branding and through our public relations, advertising, and promotion efforts.</li>
                     <li>Influence perception by distinguishing your brand through the official event webpage and all collaterals.</li>
                     <li>Position yourself as an industry leader by featuring your literature in our publications and weekly newsletters.</li>
                     <li>Gain significant visibility and enhance your corporate image through an exhibition of your products to a group of highly targeted decision makers.</li>
                  </ul>
               </div>
               <div className='col-md-3 mx-auto mt-5'>
              <div className='view-more-btn'>
               <NavLink to='/Exhibitor' className='btn-fill'>Become a Sponsor/Exhibitor</NavLink>
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