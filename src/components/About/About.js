import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <section class="about-us">
	<div class="wraper">
		<h2>ABOUT US</h2>
        
        <div class="left">
        	<div class="bor">
                <p class="img"><img src="//d1i986aobszzxa.cloudfront.net/images/financial_head.png" alt="Find financial advisor" /></p>
                <div class="f_advisor">
				<form name="form1" method="get" action="/match_advisors.asp" id ="zipform" onsubmit="return validateForm();">
					<input type="hidden" name="pagetype" value="4"/>
                    <input type="text" class="input" placeholder="Enter Your ZIP Code" name="g" id="zip" onkeypress="return isNumberKey(event)" maxlength="5"/>
                    <input id="btn1" type="submit" class="submit" />
				</form>
                </div>
                <h4>Free. Confidential. No Obligation. Instant Results.<br /><br />
                <span>Nearly 20 years of proven, successful advisor matches.</span></h4>
            </div>
            <p class="leaf">
            	<img src="//d1i986aobszzxa.cloudfront.net/images/leaf_img.png" alt="wiseradvisor-leaf_img"/>
            </p>
		</div> {/* end of left panel */}
        
        
        <div class="right">
        	<ul>
            	<li>
                	<h6>Who We Are</h6>
                    <p>WiserAdvisor is America's oldest and largest independent network of prescreened financial advisors.</p>
                </li>  
                
                <li>
                	<h6>What We Do</h6>
                    <p>We make it easy and convenient for consumers to find and connect with prescreened financial advisors in their area. </p>
                </li>   
                
                <li>
                	<h6>How We Work </h6>
                    <p>Our independent network is comprised of financial advisors spanning states and communities throughout the country. In order to join our network, each and every advisor must pass our three-step qualification process. If they pass, and only if they pass each step, they are accepted into our trusted network. </p>
                </li>  
                
                
                <li>
                	<h6>Help! We Help You</h6>
                    <p>Individuals seeking a financial advisor simply enter minimal location, financial and contact information, and are instantly matched and connected with our exclusive network's best advisors in their area for their needs---with no fees, no commitments, no obligation, and complete confidentiality.</p>
                </li>  
                
                
                <li>
                	<h6>Why We Help You</h6>
                    <p>We believe financial well-being is a critical component of health--your personal health and the health of the people you love. Every single person has the right to grow and thrive. We don't just want you to walk into your retirement, we want you to run.</p>
                    <ol>
                        <li><p>We believe in access to credible financial advice.</p></li>
                        <li><p>We believe in the integrity, of ourselves and our network of advisors.</p></li>
                        <li><p>We believe in helping people make their lives better.</p></li>
                        <li><p>We believe knowledge truly is power.</p></li>
                        <li><p>We believe fear has no place in anyone's financial future.</p></li>
                    </ol>
                </li>  
      
            </ul>        
        </div> {/* end of right panel */}
        
    </div>
</section>
      </div>
    );
  }
}

export default About;