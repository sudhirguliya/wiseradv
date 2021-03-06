import React, { Component } from 'react';
import { Footer, DemoCarousel, AdditionalResources, TheArticle } from '../../components';
import './InvestorCase.css';


class Home extends Component {
  render() {
    return (
    	<div>
      		<DemoCarousel/>
      		<TheArticle/>
      		<AdditionalResources/>

      		<section class="case_studies">
	<div class="wrap">
		
		<h2>Investor Case <b>Studies</b></h2>
		

	<div class="left">
	<figure><img src="https://d1i986aobszzxa.cloudfront.net/images/Lawyer.png" alt="Customer profile"/></figure>
	<div class="content">
	<h2>Profile</h2>
	<p>Dorothy is in her late 50s, single, working as a paralegal at a prominent Washington law firm. Her interests are reading and international travel. </p>
	<h2>Portfolio Size:</h2>
	<p>$450K</p>
	</div>

	</div>

	<div class="right">
	<p><img src="https://d1i986aobszzxa.cloudfront.net/images/arrow-up.png" width="45" height="33" alt="Arrow Up" />I am hoping to retire soon and wanted to get a portfolio review done quickly...<br/>
	... WiserAdvisor helped us connect with John; He understood my situation and laid out a plan that I liked a lot. The strategic review was completed quickly and thoroughly.<img src="https://d1i986aobszzxa.cloudfront.net/images/arrow-down.png" width="46" height="33" style={{position:'absolute'}} alt="Arrow Down"/></p>
	</div>
	<div class="cls"></div>

		</div>
		
<section class="what-we-do">
	<h2 class="text-center">Benefits of Using WiserAdvisor</h2>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
 				<ul id="sortable">
	            <li class="col-md-6">
	            	<div class="media">
	            		<div class="media-left align-self-center">
	                		<img src="https://www.wiseradvisor.com/wiseradvisor/v2/images/icon-1.png" alt="icon-1" />
	            		</div>
	            		<div class="media-body">
	                		<h4>Advisor Pre-Screening</h4>
	                		<p>All advisors have to meet strict screening criteria to be part of our network.</p>
	            		</div>
	               </div>
	            </li>
            	<li class="col-md-6">
            		<div class="media">
	            		<div class="media-left align-self-center">
	                		<img src="https://www.wiseradvisor.com/wiseradvisor/v2/images/icon-2.png" alt="icon-2" />
	            		</div>
	            		<div class="media-body">
	                		<h4>No Conflict of Interest</h4>
	                		<p>WiserAdvisor is not a financial services company and does not offer any financial advice or products.</p>
	            		</div>
	              	</div>
	            </li>
            	<li class="col-md-6">
            		<div class="media">
	            		<div class="media-left align-self-center">
	                		<img src="https://www.wiseradvisor.com/wiseradvisor/v2/images/icon-3.png" alt="icon-3" />
	            		</div>
	            		<div class="media-body">
	                		<h4>No Cost</h4>
	                		<p>Our Advisor Match Service is free to consumers. Advisors do pay a fee, once they qualify, to be a part of our network.</p>
	            		</div>
	               </div>
	            </li>
            	<li class="col-md-6">
            		<div class="media">
	            		<div class="media-left align-self-center">
	                		<img src="https://www.wiseradvisor.com/wiseradvisor/v2/images/icon-4.png" alt="icon-4" />
	            		</div>
	            		<div class="media-body">
	                		<h4>Confidential</h4>
	                		<p>We do not share your information with anyone other than the financial advisors are are matched to as per your requirements.</p>
	            		</div>
	                </div>
	            </li>
            	<li class="col-md-6">
            		<div class="media">
	            		<div class="media-left align-self-center">
	                		<img src="https://www.wiseradvisor.com/wiseradvisor/v2/images/icon-5.png" alt="icon-5" />
	            		</div>
	            		<div class="media-body">
	                		<h4>No Obligation</h4>
	                		<p>You are not obligated to hire any financial advisor that is matched to you. We do however request you to interview all the advisors to check if they suit your financial situation.</p>
	            		</div>
	               </div>
	            </li>
	            
            	<li class="col-md-6">
            		<div class="media">
	           	 		<div class="media-left align-self-center">
	                		<img src="https://www.wiseradvisor.com/wiseradvisor/v2/images/icon-7.png" alt="icon-7" />
	            		</div>
              			<div class="media-body">
                			<h4>Saves You Time</h4>
	                		<p>You will only talk to pre-screened financial advisors whose profile matches your financial needs.</p>
	            		</div>
	                </div>
	            </li>
            	</ul>
			</div>
		</div>
	</div>
</section>
</section>

      	</div>
    );
  }
}

export default Home;