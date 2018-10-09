import React, { Component } from 'react';
//import {Helmet} from "react-helmet";

class TabSection extends Component {
  render() { /*var divStyle = {display: 'none', zIndex: -5000};
  var divStyle1 = {width:'1200px', height:'514px', position:'relative'};
  var divStyle2 = {display:'none'};
  var divStyle3 = {paddingLeft:'10px'}; */
    return (


    	<div className="TabSection">
		<div>
			<dl class="tabs enabled" id="tabs4">
				<div class="talk-advisor">
				<img src="https://d1i986aobszzxa.cloudfront.net/images/talk-img.jpg" width="340" height="84" alt="Talk to an advisor" />
				<div id="form1">
				<form name="form1" method="get" action="https://www.wiseradvisor.com/match_advisors.asp" id="zipform" onsubmit="return validateForm();">
					<input type="hidden" name="pagetype" value="4" />
					<input type="text" name="g" id="zip" onkeypress="return isNumberKey(event)" value="Enter your Zip code" onfocus="if(this.value==this.defaultValue)this.value=&#39;&#39;;" onblur="if(this.value==&#39;&#39;)this.value=this.defaultValue;" maxlength="5" />
					<input type="submit" name="" class="submit" id="button" value="" />
				</form>
				<div><button id="citystate" class="city-state-ad">Find Advisors by City/State</button></div>
				</div>
				<div id="form2">
					<form name="cityform" method="get" id="cityform" action="https://www.wiseradvisor.com/match_advisors.asp" onsubmit="return validatecityform();">
					<input type="hidden" name="pagetype" value="2" />
					<table>
						<tbody><tr>
							<td><input name="city" type="text" id="city" onkeypress="return isCharacterKey(event)" value="Enter your City" onfocus="if(this.value==this.defaultValue)this.value=&#39;&#39;;" onblur="if(this.value==&#39;&#39;)this.value=this.defaultValue;" /></td>
						</tr>
						<tr>
							<td><select name="state" class="select-box" id="sendstate" >
							<option value="">Select State</option>
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AB">Alberta</option>
							<option value="AS">American Somoa</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="BC">British Columbia</option>
							<option value="CA">California</option>
							<option value="FM">Caroline Islands</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District of Columbia</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="GU">Guam</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MB">Manitoba</option>
							<option value="MP">Mariana Islands</option>
							<option value="MH">Marshall Islands</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NB">New Brunswick</option>
							<option value="NF">New Foundland</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="NT">NorthWest Territories</option>
							<option value="NS">Nova Scotia</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="ON">Ontario</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="PE">Prince Edward Island</option>
							<option value="PR">Puerto Rico</option>
							<option value="QC">Quebec</option>
							<option value="RI">Rhode Island</option>
							<option value="SK">Saskatchewan</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VI">Virgin Islands</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
							<option value="YT">Yukon Territory</option>				
							</select></td>
						</tr>
						<tr>
							<td align="middle"><input type="submit" name="" class="submit1" id="button" value="" /></td>
						</tr>
					</tbody></table>
					</form>
					<div><button id="zipstate" class="city-state-ad">Find Advisors by Zip</button></div>
				</div>
				<ul>
				<li>Find <u id="my-tooltip" class="tooltipstered">pre-screened</u> advisors</li>
				<li>Review matched profiles</li>
				<li>Receive free consultation</li>
				</ul>
				</div>
				

				<dt class="">LIFE EVENTS</dt>
				<dd class="img-one" >
				<br/>
				<div class="banner-right">
					<div class="inner-div">
					<h2>Is your nest egg prepared for <br/> major life events?</h2>
					<ul>
						<li>Disability</li>
						<li>Death of spouse</li>
						<li>Loss of job </li>
						<li>Medical Emergency</li>
						<li>All of the above</li>
					</ul>
					</div>
				</div>
				</dd>
				<dt class="">BUSINESS VS PERSONAL WEALTH</dt>
				<dd class="img-two" >
				<br/>
				<div class="banner-right">
					<div class="inner-div">
					<h2>How will you turn your business<br/>success into personal wealth?</h2>
					<ul>
						<li>Sell or hand-off</li>
						<li>Protect from loss</li>
						<li>Secure retirement income </li>
						<li>All of the above</li>
					</ul>
					</div>
					</div>
				</dd><dt class="">RETIREMENT DREAMS</dt>
				<dd class="img-three" >
				<br/>
				<div class="banner-right">
					<div class="inner-div">
					<h2> Are your retirement dreams<br/>
					protected from the four key risks?</h2>
					<ul class="third">
						<li>Inflation</li>
						<li>Health Care</li>
						<li>Market Crashes</li>
						<li>Longevity</li>
						<li>All of the above</li>
					</ul>
					</div>
				</div>
				</dd>
				<dt class="active">FINANCIAL FUTURE</dt>
				<dd class="img-four active" >
				<div class="banner-right">
					<div class="inner-div">
					<br/>
					<h2>Have you taken the time to plan<br/>your financial future?</h2>
					<ul>
						<li>Protection from loss, injury or death</li>
						<li>Saving for retirement</li>
						<li>Minimizing taxes</li>
						<li>Funding higher education</li>
						<li>Paying for Health Care</li>
					</ul>
					</div>
				</div>
				</dd>
			</dl>
		</div>
		</div>
		);
    }
}

export default TabSection;