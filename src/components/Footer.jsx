import arrowRight from '../assets/arrow_right.svg'
import socialTwitterIcon from '../assets/social_twitter_icon.svg'
import socialLinkedinIcon from '../assets/social_linkedin_icon.svg'

function Footer() {
  return (
    <>
      {/* Dark Footer Section */}
      <footer className="bg-[#302f37] border-b border-black w-full py-[80px]">
        <div className="max-w-[1229px] mx-auto flex flex-col gap-[92px] items-center px-[20px]">
          {/* CTA Section */}
          <div className="flex flex-col gap-[41px] items-center w-full max-w-[736px]">
            <div className="flex flex-col gap-[20px] items-center w-full">
              <h2 className="font-['Montserrat',sans-serif] font-bold text-[48px] text-white text-center leading-[48px] tracking-[0.35px]">
                It's Embed Time.
              </h2>
              <p className="font-['Montserrat',sans-serif] font-normal text-[20px] text-white text-center leading-[28px] tracking-[-0.45px]">
                Ready to fuel your growth?
              </p>
            </div>
            
            {/* Request Demo Button */}
            <button className="bg-[#1fef8a] rounded-[48px] px-[69px] py-[12px] flex items-center justify-center gap-[10px] cursor-pointer hover:bg-[#1ad97a] transition-colors whitespace-nowrap">
              <span className="font-['Inter',sans-serif] font-semibold text-[18px] text-[#302f37] leading-[28px] tracking-[-0.44px]">
                Request a Demo
              </span>
              <img src={arrowRight} alt="" className="w-[16px] h-[16px]" />
            </button>
          </div>

          {/* Footer Links Section */}
          <div className="flex justify-between items-start w-full">
            {/* Links Columns */}
            <div className="flex gap-[90px] items-start text-white tracking-[-0.45px]">
              {/* Platform */}
              <div className="flex flex-col gap-[26px] items-start w-[145px]">
                <h3 className="font-['Montserrat',sans-serif] font-semibold text-[20px] leading-[28px]">
                  Platform
                </h3>
                <div className="font-['Montserrat',sans-serif] font-medium text-[16px] leading-[30px]">
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Platform overview</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Integrations</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Lending partners</a>
                </div>
              </div>

              {/* About Chargeafter */}
              <div className="flex flex-col gap-[26px] items-start w-[188px]">
                <h3 className="font-['Montserrat',sans-serif] font-semibold text-[20px] leading-[28px]">
                  About Chargeafter
                </h3>
                <div className="font-['Montserrat',sans-serif] font-medium text-[16px] leading-[30px]">
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Home</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">About us</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Careers</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Sitemap</a>
                </div>
              </div>

              {/* Resources */}
              <div className="flex flex-col gap-[26px] items-start w-[252px]">
                <h3 className="font-['Montserrat',sans-serif] font-semibold text-[20px] leading-[28px]">
                  Resources
                </h3>
                <div className="font-['Montserrat',sans-serif] font-medium text-[16px] leading-[30px]">
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Blog</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Case studies & eBooks</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Documentation</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">FAQ</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Glossary</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Appliance financing</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Aftermarket car parts financing</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Consumer electronics financing</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Furniture financing</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Home improvement</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Jewelry and luxury items</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Mattress financing</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Sport/Fitness</a>
                </div>
              </div>

              {/* Contact Us */}
              <div className="flex flex-col gap-[26px] items-start w-[165px]">
                <h3 className="font-['Montserrat',sans-serif] font-semibold text-[20px] leading-[28px]">
                  Contact Us
                </h3>
                <div className="font-['Montserrat',sans-serif] font-medium text-[16px] leading-[30px]">
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Contact details</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Merchants</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Financial Institutions</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Lenders</a>
                  <a href="#" className="block hover:text-[#1fef8a] transition-colors">Support</a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-[12px] items-start">
              <a href="#" className="w-[30px] h-[30px] hover:opacity-80 transition-opacity">
                <img src={socialTwitterIcon} alt="Twitter" className="w-full h-full" />
              </a>
              <a href="#" className="w-[30px] h-[30px] hover:opacity-80 transition-opacity">
                <img src={socialLinkedinIcon} alt="LinkedIn" className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Bar - Separate light section */}
      <div className="bg-[#f9f8fd] w-full pt-[33px] pb-[20px] px-[95px]">
        <div className="flex flex-col items-center justify-center px-[32px] h-[53px] w-full">
          <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[#0a0a0a] text-center leading-[20px] tracking-[-0.15px]">
            All Rights Reserved 2026 © ChargeAfter
            <br />
            <a href="https://chargeafter.com/privacy-policy/" className="underline hover:text-[#694ad4] transition-colors">
              Privacy Policy
            </a>
            <span> | </span>
            <a href="https://chargeafter.com/cookie-policy/" className="underline hover:text-[#694ad4] transition-colors">
              Cookie Policy
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
