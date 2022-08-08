
import React, {Component} from 'react';
export default class Slider extends Component {
    render(){
        return (
            <div className='app-slider'>

            <div className="home_slider border-radious5">
            <div className="owl-carousel owl-theme owl-loaded owl-drag" id="home_slider">
               <div className="item">
                  <picture>
                     <source media="(min-width: 479px)"  srcset="https://wellco.windstripethemes.com/images/banner/banner-1.jpg" alt="about-img"/>
                     <img srcSet="https://wellco.windstripethemes.com/images/banner/banner-1.jpg" alt=""/>
                  </picture>
               </div>
               <div className="item">
                  <picture>
                     <source media="(min-width: 479px)"  srcset="https://wellco.windstripethemes.com/images/banner/banner-1.jpg" alt="about-img"/>
                     <img srcSet="https://wellco.windstripethemes.com/images/banner/banner-1.jpg" alt=""/>
                  </picture>
               </div>
               <div className="item">
                  <picture>
                     <source media="(min-width: 479px)"  srcset="https://wellco.windstripethemes.com/images/banner/banner-1.jpg" alt="about-img"/>
                     <img srcSet="https://wellco.windstripethemes.com/images/banner/banner-1.jpg" alt=""/>
                  </picture>
               </div>
            </div>
         </div>
        </div>
            
            

        )
    }
}