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
            <button className="group bg-[#1fef8a] hover:bg-white rounded-[48px] px-[69px] py-[12px] flex items-center justify-center gap-[10px] cursor-pointer transition-all duration-300 whitespace-nowrap">
              <span className="font-['Inter',sans-serif] font-semibold text-[18px] text-[#302f37] leading-[28px] tracking-[-0.44px] transition-colors duration-300">
                Request a Demo
              </span>
              <svg className="w-[16px] h-[16px] text-[#302f37] transition-colors duration-300" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8.5 1.5M15 8L8.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
              {/* Twitter */}
              <a href="#" className="w-[30px] h-[30px] flex items-center justify-center rounded-full border border-white hover:opacity-80 transition-opacity">
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 1.83C16.87 2.13 16.19 2.34 15.47 2.43C16.21 1.97 16.77 1.26 17.03 0.42C16.34 0.85 15.57 1.16 14.75 1.34C14.1 0.65 13.17 0.25 12.16 0.25C10.1 0.25 8.46 1.89 8.46 3.92C8.46 4.22 8.49 4.5 8.56 4.77C5.33 4.61 2.47 3.14 0.59 0.92C0.26 1.48 0.07 2.13 0.07 2.83C0.07 4.16 0.75 5.34 1.78 6.02C1.15 6 0.56 5.83 0.05 5.55V5.6C0.05 7.38 1.31 8.87 3.02 9.22C2.7 9.31 2.35 9.36 2 9.36C1.75 9.36 1.51 9.34 1.28 9.29C1.77 10.76 3.13 11.84 4.74 11.87C3.44 12.9 1.8 13.5 0.03 13.5C-0.08 13.5 -0.18 13.5 -0.28 13.49C1.4 14.57 3.38 15.2 5.52 15.2C12.15 15.2 15.77 9.42 15.77 4.39C15.77 4.23 15.77 4.06 15.76 3.9C16.46 3.39 17.04 2.75 17.5 2.01V1.83Z" fill="white"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-[30px] h-[30px] flex items-center justify-center rounded-full border border-white hover:opacity-80 transition-opacity">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.1 1.55C3.1 2.41 2.41 3.1 1.55 3.1C0.69 3.1 0 2.41 0 1.55C0 0.69 0.69 0 1.55 0C2.41 0 3.1 0.69 3.1 1.55ZM3.1 4.35H0V14H3.1V4.35ZM7.65 4.35H4.55V14H7.65V8.93C7.65 6.12 11.35 5.89 11.35 8.93V14H14.45V7.85C14.45 3.1 8.85 3.29 7.65 5.64V4.35Z" fill="white"/>
                </svg>
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
