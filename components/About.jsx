import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';


const About = () => {
  return (
<>
<div className='footer'>
<div className="footer-content">

          <div className="footer-content__text">
            <p>Privacy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      <ul>
        <li className='list'>Services</li>
        <li>Buy & Sell Crypto</li>
        <li>Buy Bitcoin</li>
        <li>Buy Ethereum</li>
        <li>BTC to USD</li>
        <li>Buy Crypto With Paypal</li>
        <li>Buy Bitcoin With Bank Accoun</li>
        <li>Buy Bitcoin With Prepaid Card</li>
      </ul>
      <ul>
        <li className='list'>About</li>
        <li>About us</li>
        <li>University</li>
        <li>Contact</li>
        <li>Team</li>
        <li>Blog</li>
        <li>Help Center</li>
        <li>Sitemap</li>
        
      </ul>
      <ul>
        <li className='list'>Information</li>
        <li>Limits and Commissions</li>
        <li>How to Buy Crypto   </li>
        <li>Bitcoin Halving</li>
        <li>Fee Schedule</li>
        <li>Getting Started</li>
        <li>Identity Verification Guide</li>
        <li>Card Verification Guide</li>
        <li>Giveaways & Competitions</li>
      </ul>
      <ul>
        <li className='list'>Tools</li>
        <li>API</li>
        <li>Bitcoin Calculator</li>
        <li>Bitcoin Price Widget</li>
        <li>Mobile App</li>
        <li>Cryptocurrency Affiliate Program</li>
        <li>Bank Transfer Withdrawal Investigation</li>
        <li>FAQ's</li>
      </ul>
    </div>
    <br />
    <span className="social-links">
        <p><InstagramIcon/>
</p> 
<p><FacebookIcon/>
</p> <p><TwitterIcon/>
</p> <p><YouTubeIcon/>
</p>
    </span>
<div className="copyright">
    <ul>
        <li><p>Copyright © 2018 - 2023 Crypto.com. All rights reserved.</p></li>
    </ul>
    <ul>
        <li>Privacy Notice</li>
        <li>Status</li>
        <li>Cookie Prefrence</li>
    </ul>
</div>
</>

  )
}

export default About
