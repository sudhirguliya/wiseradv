import React, { Component } from 'react';
import { DemoCarousel, AdditionalResources, TheArticle } from '../../components';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <section class="upper_footer">
                <div class="wraper">
                    <ul>
                        <li><a style={{color: '#333333'}} href="https://www.wiseradvisor.com/">Home</a></li>
                        <li><a style={{color: '#333333'}} href="https://www.wiseradvisor.com/advisor_signup.asp" rel="nofollow">Advertise</a></li>
                        <li><a style={{color: '#333333'}} href="https://www.wiseradvisor.com/affiliate_program.asp">Affiliate Program</a></li>
                        <li><a style={{color: '#333333'}} href="#" rel="nofollow">Privacy Policy </a></li>
                        <li><a style={{color: '#333333'}} href="#" rel="nofollow"> Terms &amp; Conditions </a></li>
                        <li><a style={{color: '#333333'}} href="https://www.wiseradvisor.com/WA_advisor_disclosure.asp" rel="nofollow"> Disclosure</a></li>
                        
                    </ul>
                    <p style={{width: '100%!important', fontSize: '13px!important', marginTop: '20px!important'}}> * Financial Advisors in our network may be dually registered advisors; in addition to being registered as an RIA, may also be registered representatives offering securities through broker dealers.<br/>** We pre-screen advisors for: - experience   - advisor compensation (fee-based or fee-only*)   - licensing and disclosures with SEC/<a style={{color: '#333333'}} href="https://www.finra.org/" rel="noopener noreferrer" target="_blank">FINRA</a>. By using this site you agree to our terms of service. </p>
                    <p style={{width: '100%!important', fontSize: '13px!important', marginTop: '20px!important'}}>Copyright @ 2018 WiserAdvisor.com. All Rights Reserved.</p>
                </div>
            </section>

            <footer>
            	<div class="wraper">
                    <div class="logo">
                        <a href="https://www.wiseradvisor.com/"><img src="https://d1i986aobszzxa.cloudfront.net/images/footer_logo.jpg" alt="wiseradvisor-logo" /></a>
                    </div>
                    
                    <div class="smo">
                        <ul>
            			
            			<li><a href="https://www.facebook.com/pages/WiserAdvisor/191949227500128" class="facebook" target="_blank" rel="noopener noreferrer">facebook</a></li>
            			<li><a href="https://twitter.com/WiserAdvisor" target="_blank" class="twitter" rel="noopener noreferrer">twitter</a></li>
            			<li><a href="https://www.linkedin.com/company/wiseradvisor" target="_blank" class="linkedin" rel="noopener noreferrer">linkedin</a></li>
            			<li><a href="https://plus.google.com/104834355550285081949/posts" target="_blank" class="youtube" rel="noopener noreferrer">gplus</a></li>
                            
                        </ul>
                    </div>
                </div>
            </footer>
            </div>
        );
    }
}

export default Footer;