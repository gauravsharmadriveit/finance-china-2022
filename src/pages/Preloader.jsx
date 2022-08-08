import React, {Component} from 'react';
export default class Preloader extends Component {
render(){
return (
    
     <React.Fragment>
     <div className='preloader'>
     <div className='inner'>
       <figure><img src="images/preloader.png" alt="Image"/></figure>
       <div className='percentage' id="percentage">0</div>
     </div>
     
     <div className='loader-progress' id="loader-progress"> </div>
    
            <svg viewBox="0 0 1920 1080" preserveAspectRatio="none" version="1.1">
       <path d="M-4.5,1080H1920V0H0c-10.2,134.8,0.1,311.5,0,541C-0.1,769.5,0,948-4.5,1080z"></path>
     </svg>
   </div>
  
   <div className='page-transition'>
     <svg viewBox="0 0 1920 1080" preserveAspectRatio="none" version="1.1">
       <path d="M540,1080H0V0h540c-40.28,124.78-85.13,311.48-85,541C455.13,769.53,499.81,955.48,540,1080z"></path>
     </svg>
   </div>
     </React.Fragment>
  
)
}
}
