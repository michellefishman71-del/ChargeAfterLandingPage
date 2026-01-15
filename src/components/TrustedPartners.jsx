import I01 from '../assets/I_01.svg'
import I02 from '../assets/I_02.svg'
import I03 from '../assets/I_03.svg'
import I04 from '../assets/I_04.svg'
import I05 from '../assets/I_05.svg'
import I06 from '../assets/I_06.svg'
import I07 from '../assets/I_07.svg'
import I08 from '../assets/I_08.svg'
import I09 from '../assets/I_09.svg'
import I10 from '../assets/I_10.svg'
import I11 from '../assets/I_11.svg'
import I12 from '../assets/I_12.svg'
import Waterfall from '../assets/Waterfall.svg'

// Purple dot separator component
const Dot = () => (
  <div className="w-[4px] h-[4px] rounded-full bg-[#694ad4] shrink-0" />
)

function TrustedPartners() {
  return (
    <section className="relative w-full bg-[#f9f8fd]">
      <div className="relative w-[1441px] mx-auto flex flex-col items-center gap-[170px]">
        {/* Trusted Partners Section */}
        <div className="flex flex-col items-center gap-[100px] w-full px-[320px]">
          <p className="font-['Montserrat',sans-serif] font-bold text-[16px] text-[#302f37] text-center tracking-[4.24px] uppercase leading-[2] w-[796px]">
            TRUSTED BY LEADING FINANCIAL INSTITUTIONS
          </p>
          
          {/* Partner Logos */}
          <div className="flex flex-col items-center justify-center gap-[22px]">
            {/* Row 1: Centered logos */}
            <div className="flex items-center justify-center gap-[30px]">
              <img src={I01} alt="Bread Financial" className="h-[28px] w-[159px] object-contain" />
              <Dot />
              <img src={I02} alt="Citizens" className="h-[43px] w-[104px] object-contain" />
              <Dot />
              <img src={I03} alt="Citi" className="h-[36px] w-[59px] object-contain" />
              <Dot />
              <img src={I04} alt="Goodleap" className="h-[38px] w-[133px] object-contain" />
              <Dot />
              <img src={I05} alt="Latitude Pay" className="h-[43px] w-[150px] object-contain" />
              <Dot />
              <img src={I06} alt="Momnt" className="h-[37px] w-[133px] object-contain" />
            </div>
            
            {/* Row 2: Centered logos */}
            <div className="flex items-center justify-center gap-[30px]">
              <img src={I07} alt="PatientFi" className="h-[43px] w-[79px] object-contain" />
              <Dot />
              <img src={I08} alt="Synchrony" className="h-[43px] w-[91px] object-contain" />
              <Dot />
              <img src={I09} alt="Wells Fargo" className="h-[43px] w-[70px] object-contain" />
              <Dot />
              <img src={I10} alt="Covered" className="h-[52px] w-[110px] object-contain" />
              <Dot />
              <img src={I11} alt="Concora" className="h-[42px] w-[117px] object-contain" />
              <Dot />
              <img src={I12} alt="Foundation Finance" className="h-[52px] w-[166px] object-contain" />
            </div>
          </div>
        </div>

        {/* One App Section */}
        <div className="flex items-center p-[64px]">
          <div className="flex flex-col items-center gap-[20px]">
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[64px] text-[#694ad4] text-center leading-[1.1]">
              One app, infinite options.
            </h2>
            <p className="font-['Montserrat',sans-serif] font-semibold text-[20px] text-[#302f37] text-center leading-[1.6]">
              Fill out a single application in seconds.
            </p>
          </div>
        </div>

      </div>

      {/* Waterfall Illustration - Full screen width */}
      <div className="relative h-[1017px] w-screen overflow-hidden">
        <img 
          src={Waterfall} 
          alt="Application waterfall showing Prime, Near-Prime, and Sub-Prime lenders" 
          className="absolute h-full w-auto min-w-full left-[-50px] top-0 object-cover object-left"
        />
      </div>
    </section>
  )
}

export default TrustedPartners
