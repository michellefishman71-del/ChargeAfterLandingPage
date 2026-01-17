import heroImage from '../assets/Hero.svg'
import gridImage from '../assets/grid.svg'

function Hero() {
  return (
    <section className="relative w-full h-[1124px] bg-[#f9f8fd] overflow-hidden">
      {/* Grid background from assets */}
      <div className="absolute inset-0 pointer-events-none" style={{ transform: 'scale(1.05)', transformOrigin: 'center center' }}>
        <img src={gridImage} alt="" className="w-full h-full" />
      </div>
      
      <div className="relative w-[1441px] h-full mx-auto">
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

            <button className="group bg-[#1fef8a] hover:bg-[#302f37] rounded-[48px] w-[296px] px-[69px] py-[12px] flex items-center justify-center gap-[10px] cursor-pointer transition-all duration-300">
              <span className="text-[#302f37] group-hover:text-white text-[18px] leading-[28px] font-semibold font-['Montserrat',sans-serif] tracking-[-0.4395px] whitespace-nowrap transition-colors duration-300">
                Request a Demo
              </span>
              <svg className="w-[16px] h-[16px] transition-colors duration-300" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8.5 1.5M15 8L8.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#302f37] group-hover:text-white"/>
              </svg>
            </button>
          </div>

          {/* Hero illustration - exact Figma position */}
          <div className="absolute left-[536px] top-[124px] w-[738px] h-[627px] pointer-events-none overflow-hidden">
            <img 
              src={heroImage} 
              alt="House illustration" 
              className="absolute w-[210.57%] h-[135.18%] max-w-none"
              style={{ left: '-55.28%', top: '-15.2%' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
