const gridImage = "http://localhost:3845/assets/d2b27b8d56a23c363cbb974d0191efd0e0d6411c.svg"
const heroImage = "http://localhost:3845/assets/4d25556765cdf4ef4bb873c02dd8cbfe57495f3c.png"
const accentImage = "http://localhost:3845/assets/a8385e4adb71e1171de1dca40fed96e0a8ebbf45.svg"
const arrowIcon = "http://localhost:3845/assets/0aa41df9537263d7f579ba9deb3b093379468074.svg"

function Hero() {
  return (
    <section className="relative w-full h-[1124px] bg-[#f9f8fd] overflow-hidden">
      <div className="relative w-[1441px] h-full mx-auto">
        {/* Grid background - positioned behind content */}
        <div className="absolute left-1/2 top-[-478px] -translate-x-1/2 w-[2942.859px] h-[1699.06px] flex items-center justify-center pointer-events-none">
          <div className="rotate-[30deg] skew-x-[-26.565deg]">
            <img src={gridImage} alt="" className="w-[1588.023px] h-[1810.097px]" />
          </div>
        </div>

        {/* Content container - exact Figma positions */}
        <div className="absolute left-[105px] top-[151px] w-[1618.418px] h-[751px]">
          {/* Text block */}
          <div className="absolute left-0 top-0 w-[859px] flex flex-col gap-[46px]">
            <div className="flex flex-col gap-[16px]">
              <h1 className="text-[#302f37] text-[64px] leading-[80px] font-semibold font-['Montserrat',sans-serif] w-[848px]">
                You Power the Project. <span className="font-bold">We Power the Financing</span>
              </h1>
              <p className="text-black text-[24px] leading-[32px] font-medium font-['Montserrat',sans-serif] tracking-[-0.4492px] w-[510px]">
                Turn kitchen table consultations into signed contracts with a 33% approval lift.
              </p>
            </div>

            <button className="bg-[#1fef8a] rounded-[48px] w-[296px] px-[69px] py-[12px] flex items-center justify-center gap-[10px] cursor-pointer">
              <span className="text-[#302f37] text-[18px] leading-[28px] font-semibold font-['Montserrat',sans-serif] tracking-[-0.4395px] whitespace-nowrap">
                Request a Demo
              </span>
              <img src={arrowIcon} alt="" className="w-[16px] h-[16px]" />
            </button>
          </div>

          {/* Green diagonal accent bar */}
          <div className="absolute left-[626px] top-[30px] w-[992.418px] h-[572.973px] flex items-center justify-center pointer-events-none">
            <div className="rotate-[30deg] skew-x-[-26.565deg]">
              <img src={accentImage} alt="" className="w-[217.464px] h-[928.482px]" />
            </div>
          </div>

          {/* Hero illustration - EXACT Figma position */}
          <div className="absolute left-[536px] top-[124px] w-[738px] h-[627px] overflow-hidden pointer-events-none">
            <img 
              src={heroImage} 
              alt="House illustration" 
              className="absolute w-[210.57%] h-[135.18%] left-[-55.28%] top-[-15.2%] max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
