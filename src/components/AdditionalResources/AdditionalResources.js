import React, { Component } from 'react';
import { Tabs } from '../../components';
import './Tabs.css';

class AdditionalResources extends Component {
  render() {
    return (
    	<div className="AdditionalResources">
			<section class="resource">
	<div class="wraper">
	<Tabs>
      <div label="Top Financial Concerns">
        See ya later, <em>Alligator</em>!
      </div>
      <div label="Featured Financial Advisors">
        After while, <em>Crocodile</em>!
      </div>
      <div label="Advisor Compensation">
        Nothing to see here, this tab is <em>extinct</em>!
      </div>
      <div label="Advisor Credentials">
        
        <h2>Understanding Your Advisors Credentials</h2>
		<p style={{padding: '5px', marginTop: '10px'}}>Finding a financial professional can be a daunting task. There are literally thousands of people who work with portfolios and retirement accounts in the United States, and choosing the right one for you can seem impossible. How do you choose a needle from a seemingly endless stack of needles? Financial professionals understand this problem, and do everything that they can to differentiate themselves from their competitors. Financial advisors have different educational backgrounds, experiences, and work with different companies - all of which leave you with a host of variables with little solid ground to judge them by.</p>
       

      </div>
    </Tabs>

	
	</div>
	</section>
		</div>
		);
    }
}

export default AdditionalResources;