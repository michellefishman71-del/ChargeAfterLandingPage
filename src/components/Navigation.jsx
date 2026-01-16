import Logo from '../assets/Logo.svg'

function Navigation() {
  return (
    <header className="w-full h-[80px] bg-[#f9f8fd] border-b border-[#e5e7eb]">
      <div className="w-[1440px] mx-auto h-full flex items-center justify-between pl-[58px] pr-[131px]">
        {/* Logo - exact Figma dimensions */}
        <img 
          src={Logo} 
          alt="ChargeAfter" 
          className="w-[216px] h-[62px] object-contain object-left"
        />

        {/* Right side container - exact Figma layout */}
        <div className="w-[322.023px] h-[36px] flex items-center gap-[32px]">
          <div className="w-[61.539px] h-[20px] relative">
            <a 
              href="#solutions" 
              className="absolute left-0 top-[0.5px] font-['Montserrat',sans-serif] text-[14px] font-medium leading-[20px] text-[#0a1930] tracking-[-0.1504px] cursor-pointer whitespace-nowrap"
            >
              Solutions
            </a>
          </div>
          <div className="w-[69.234px] h-[20px] relative">
            <a 
              href="#resources" 
              className="absolute left-0 top-[0.5px] font-['Montserrat',sans-serif] text-[14px] font-medium leading-[20px] text-[#0a1930] tracking-[-0.1504px] cursor-pointer whitespace-nowrap"
            >
              Resources
            </a>
          </div>
          <button className="bg-[#1fef8a] hover:bg-[#302f37] rounded-[48px] w-[166px] h-[36px] flex items-center justify-center px-[9px] cursor-pointer transition-all duration-300 group">
            <span className="font-['Montserrat',sans-serif] text-[14px] font-medium leading-[20px] text-[#0a0a0a] group-hover:text-white tracking-[-0.1504px] text-center whitespace-nowrap transition-colors duration-300">
              Request a Demo
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navigation
