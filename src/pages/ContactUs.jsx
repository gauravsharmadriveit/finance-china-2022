import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
export default class ContactUs extends Component {
render(){
return (
    <React.Fragment>
    <section className='inner_bg clearfix'>
       <div class="overlay">
       <div class="container clearfix">
          <h2>Contact Us</h2>
          <div itemprop="breadcrumb" class="mkdf-breadcrumbs ">
          <NavLink  itemprop="url" to="/" exact>Home</NavLink><span class="mkdf-delimiter">
            &nbsp; / &nbsp;</span>
          <span class="mkdf-current">Contact Us</span></div>
       </div>
      
         </div>
       </section>
        <section className='ContactForm clearfix'>
            <div className='container clearfix'>
                <div className='row justify-content-center align-items-center clearfix clearfix'>
                    <div className='col-md-12'>
                        <div className='title'>
                        <h2>Have a Query? Contact Us Now !</h2>
                      </div>
                    </div>
                    <div className='col-md-4 mr-5'>
                    <div className='contact-details-heading'>
                        <h3>For more details, please contact:</h3>
                    </div>
                         <div className='card'>
                               <div className='card-box'>
                                    <div className='inforecevier'>
                                    <h6>For agenda &amp; speaking opportunities:</h6>
                                    <p className='personname'><i class="far fa-user"></i> &nbsp;Daisy Wang</p>
                                     <p className='emailperson'><a href="mailto:dwang@theasianbanker.com"><i class="far fa-envelope fa-icon"></i> &nbsp;dwang@theasianbanker.com</a></p>
                                    <p className='callperson'><a href="tel:+86 10 5869 4641"><i class="fa fa-phone-alt fa-icon" aria-hidden="true"></i> &nbsp;+86 10 5869 4641</a></p>
                                   
                                    </div>
                               </div> 
                        </div>
                        <div className='card'>
                               <div className='card-box'>
                                    <div className='inforecevier'>
                                    <h6>For sponsorship opportunities contact:</h6>
                                    <p className='personname'><i class="far fa-user"></i> &nbsp;Moira Zhan</p>
                                     <p className='emailperson'><a href="mailto:mzhan@theasianbanker.com"><i class="far fa-envelope fa-icon"></i> &nbsp;mzhan@theasianbanker.com</a></p>
                                    <p className='callperson'><a href="tel:+86 10 5869 4670"><i class="fa fa-phone-alt fa-icon" aria-hidden="true"></i> &nbsp;+86 10 5869 4670</a></p>
                                   
                                    </div>
                               </div> 
                        </div>
                        <div className='card'>
                               <div className='card-box'>
                                    <div className='inforecevier'>
                                    <h6>Delegate Registration contact:</h6>
                                    <p className='personname'><i class="far fa-user"></i> &nbsp;Joshua Sangalang</p>
                                     <p className='emailperson'><a href="mailto:jsangalang@theasianbanker.com"><i class="far fa-envelope fa-icon"></i> &nbsp;jsangalang@theasianbanker.com</a></p>
                                    <p className='callperson'><a href="tel:+63 9050253810"><i class="fa fa-phone-alt fa-icon" aria-hidden="true"></i> &nbsp;+63 9050253810</a></p>
                                   
                                    </div>
                               </div> 
                        </div>
                    </div>

                    <div className='col-md-7'>
                        <div className='contact-us-form'>
                            <form className='row'>  
                                <div className='col-md-6'>
                                <div className="form-label-group">
                                <input type='text'  id="inputfullname" className="form-control" placeholder='Full Name' required/>
                                <label for="inputfullname">Full Name</label>
                                </div>
                                </div>
                                <div className='col-md-6'>
                                <div className="form-label-group">
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                                <label for="inputEmail">Email address</label>
                              </div>
                                </div>
                                <div className="col-sm-5 col-md-6 col-lg-5 col-xl-5">
                                <select name="country" className="form-control none-textindent" onchange="CountryList(this.value);" id="CountryList">
                                      <option value="">Please Select Country/region</option>
                                    
                            <option value="" selected="">Country/Region *</option>
                            <optgroup label="Top Countries">
                             <option value="+61">Australia</option>
                             <option value="+86">China</option>
                             <option value="+65">Singapore</option>
                             <option value="+44">United Kingdom</option>
                             <option value="+1">United States</option>
                           </optgroup>
                           <optgroup label="All Countries">
                             <option value="+93">Afghanistan</option>
                             <option value="+355">Albania</option>
                             <option value="+213">Algeria</option>
                             <option value="+244">Angola</option>
                             <option value="+54">Argentina</option>
                             <option value="+374">Armenia</option>
                             <option value="+43">Austria</option>
                             <option value="+994">Azerbaijan</option>
                             <option value="+973">Bahrain</option>
                             <option value="+880">Bangladesh</option>
                             <option value="+375">Belarus</option>
                             <option value="+32">Belgium</option>
                             <option value="+229">Benin</option>
                             <option value="+975">Bhutan</option>
                             <option value="+387">Bosnia &amp; Herzegovina</option>
                             <option value="+267">Botswana</option>
                             <option value="+55">Brazil</option>
                             <option value="+359">Bulgaria</option>
                             <option value="+226">Burkina Faso</option>
                             <option value="+257">Burundi</option>
                             <option value="+855">Cambodia</option>
                             <option value="+237">Cameroon</option>
                             <option value="+1">Canada</option>
                             <option value="+34">Canary Islands</option>
                             <option value="+238">Cape Verde</option>
                             <option value="+236">Central African Republic</option>
                             <option value="+235">Chad</option>
                             <option value="+56">Chile</option>
                             <option value="+57">Colombia</option>
                             <option value="+269">Comoros</option>
                             <option value="+506">Costa Rica</option>
                             <option value="+385">Croatia</option>
                             <option value="+53">Cuba</option>
                             <option value="+357">Cyprus</option>
                             <option value="+420">Czech Republic</option>
                             <option value="+243">Democratic Republic Of Congo</option>
                             <option value="+45">Denmark</option>
                             <option value="+253">Djibouti</option>
                             <option value="+809">Dominican Republic</option>
                             <option value="+593">East Timor</option>
                             <option value="+809">Ecuador</option>
                             <option value="+20">Egypt</option>
                             <option value="+503">El Salvador</option>
                             <option value="+240">Equatorial Guinea</option>
                             <option value="+291">Eritrea</option>
                             <option value="+372">Estonia</option>
                             <option value="+251">Ethiopia</option>
                             <option value="+388">European Union</option>
                             <option value="+679">Fiji</option>
                             <option value="+358">Finland</option>
                             <option value="+33">France</option>
                             <option value="+241">France, Metropolitan</option>
                             <option value="+44" >Gabon</option>
                             <option value="+220">Gambia</option>
                             <option value="+594">Georgia</option>
                             <option value="+49">Germany</option>
                             <option value="+233">Ghana</option>
                             <option value="+30">Greece</option>
                             <option value="+502" >Guatemala</option>
                             <option value="+224" >Guinea</option>
                             <option value="+245">Guinea-bissau</option>
                             <option value="+592">Guyana</option>
                             <option value="+509">Haiti</option>
                             <option value="+504">Honduras</option>
                             <option value="+852">Hong Kong</option>
                             <option value="+36">Hungary</option>
                             <option value="+91">India</option>
                             <option value="+62">Indonesia</option>
                             <option value="+98" >Iran</option>
                             <option value="+964">Iraq</option>
                             <option value="+353">Ireland</option>
                             <option value="+972">Israel</option>
                             <option value="+39">Italy</option>
                             <option value="+876">Jamaica</option>
                             <option value="+81">Japan</option>
                             <option value="+962">Jordan</option>
                             <option value="+7">Kazakhstan</option>
                             <option value="+254">Kenya</option>
                             <option value="+82">Korea</option>
                             <option value="+965">Kuwait</option>
                             <option value="+996">Kyrgyzstan</option>
                             <option value="+371">Latvia</option>
                             <option value="+961">Lebanon</option>
                             <option value="+231">Liberia</option>
                             <option value="+218">Libya</option>
                             <option value="+370">Lithuania</option>
                             <option value="+352">Luxembourg</option>
                             <option value="+853">Macao</option>
                             <option value="+261">Madagascar</option>
                             <option value="+265">Malawi</option>
                             <option value="+60">Malaysia</option>
                             <option value="+223">Mali</option>
                             <option value="+222">Mauritania</option>
                             <option value="+230">Mauritius</option>
                             <option value="+52">Mexico</option>
                             <option value="+976">Mongolia</option>
                             <option value="+212">Morocco</option>
                             <option value="+258">Mozambique</option>
                             <option value="+95">Myanmar</option>
                             <option value="+264">Namibia</option>
                             <option value="+977">Nepal</option>
                             <option value="+31">Netherlands</option>
                             <option value="+64">New Zealand</option>
                             <option value="+234">Nigeria</option>
                             <option value="+47">Norway</option>
                             <option value="+968">Oman</option>
                             <option value="+92">Pakistan</option>
                             <option value="+970">Palestinian Territory, Occupied</option>
                             <option value="+507">Panama</option>
                             <option value="+675">Papua New Guinea</option>
                             <option value="+595" >Paraguay</option>
                             <option value="+51" >Peru</option>
                             <option value="+63" >Philippines</option>
                             <option value="+48" >Poland</option>
                             <option value="+351">Portugal</option>
                             <option value="+974" >Qatar</option>
                             <option value="+242" >Republic Of Congo</option>
                             <option value="+262" >Reunion</option>
                             <option value="+40" >Romania</option>
                             <option value="+7" >Russian Federation</option>
                             <option value="+966" >Saudi Arabia</option>
                             <option value="+221" >Senegal</option>
                             <option value="+381" >Serbia</option>
                             <option value="+421" >Slovakia</option>
                             <option value="+386">Slovenia</option>
                             <option value="+252" >Somalia</option>
                             <option value="+27" >South Africa</option>
                             <option value="+34">Spain</option>
                             <option value="+94" >Sri Lanka</option>
                             <option value="+249" >Sudan</option>
                             <option value="+597" >Suriname</option>
                             <option value="+268" >Swaziland</option>
                             <option value="+46" >Sweden</option>
                             <option value="+41" >Switzerland</option>
                             <option value="+963" >Syrian Arab Republic</option>
                             <option value="+886" >Taiwan, Province Of China</option>
                             <option value="+992" >Tajikistan</option>
                             <option value="+255" >Tanzania</option>
                             <option value="+66" >Thailand</option>
                             <option value="+216" >Tunisia</option>
                             <option value="+90" >Turkey</option>
                             <option value="+993" >Turkmenistan</option>
                             <option value="+256" >Uganda</option>
                             <option value="+380" >Ukraine</option>
                             <option value="+971" >United Arab Emirates</option>
                              <option value="+598" >Uruguay</option>
                             <option value="+998" >Uzbekistan</option>
                             <option value="+84" >Vietnam</option>
                             <option value="+212">Western Sahara</option>
                             <option value="+967" >Yemen</option>
                             <option value="+260" >Zambia</option>
                             <option value="+263" >Zimbabwe</option>
                             </optgroup>
                        </select>
                             </div>
                             <div className="col-sm-2 col-md-6 col-lg-2 col-xl-2 ">
                             <div className="form-label-group">
                                <input type="text" className="form-control b-0" id="isdcodeone" name="code" placeholder="Code" disabled readonly />
                                <label for="code">Code</label>
                                </div>
                             </div>
                                <div className='col-md-5'>
                                <div className="form-label-group">
                                <input type="number" id="inputMoblie" className="form-control" placeholder="Moblie" required autofocus/>
                                <label for="inputMoblie">Moblie</label>
                                </div>
                                </div>
                                <div className='col-md-12'>
                                <div className="form-label-group">
                                <input type="text" id="inputMoblie" className="form-control h-150" placeholder="Enter Your Message" required autofocus/>
                                <label for="inputMoblie">Enter Your Message</label>
                                </div>
                                </div>
                              
                                <div className="col-sm-12 col-md-6 col-lg-12 col-xl-12">
                                <label className='checkboxlable'>
                                <input type="checkbox" value="remember-me"/>  I understand that I have to share my personal data in order to access and/or participate in the following service and agree to the <a href="https://www.theasianbanker.com/tab-privacy-policy" target="_blank" 
                                >Privacy Policy</a> of <a href="https://www.theasianbanker.com/" target="_blank">The Asian Banker</a> </label>
                              
                                </div>
                             <div class="col-sm-3 col-md-6 col-lg-3 col-xl-3 ">
                                <input type="submit" name="submit" className="btn btn-submit btn-fill" value="Submit"/>
                          </div>
                            </form>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
)
}
}
