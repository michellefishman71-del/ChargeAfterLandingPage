// Import local assets
import stepIconsSprite from '../assets/step_icons_sprite.png'
import arrowIcon from '../assets/arrow.svg'
import icon1 from '../assets/feature_icon_01.svg'
import icon2 from '../assets/feature_icon_02.svg'
import icon3 from '../assets/feature_icon_03.svg'
import icon4 from '../assets/feature_icon_04.svg'
import icon5 from '../assets/feature_icon_05.svg'
import icon6 from '../assets/feature_icon_06.svg'

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white border border-[#e5e7eb] rounded-[17px] p-[35px] w-[387px] h-[330px]">
    <div className="bg-[rgba(99,71,209,0.05)] rounded-full w-[61px] h-[61px] flex items-center justify-center mb-[26px]">
      <img src={icon} alt="" className="w-[30px] h-[30px]" />
    </div>
    <h3 className="font-['Montserrat',sans-serif] font-bold text-[22px] text-[#302f37] tracking-[-0.49px] leading-[30px] mb-[13px]">
      {title}
    </h3>
    <p className="font-['Montserrat',sans-serif] font-normal text-[16px] text-[#302f37] leading-[24.6px] tracking-[-0.16px]">
      {description}
    </p>
  </div>
)

function Features() {
  return (
    <section className="relative w-full bg-[#f9f8fd] py-[100px]">
      <div className="w-[1230px] mx-auto flex flex-col gap-[170px]">
        {/* Apply -> Get Approved -> Start The Project */}
        <div className="flex items-start justify-center gap-[49px]">
          {/* Apply */}
          <div className="flex flex-col gap-[12px] w-[329px]">
            <div className="h-[86px] w-[87px] relative overflow-hidden">
              <img 
                src={stepIconsSprite} 
                alt="Apply" 
                className="absolute max-w-none"
                style={{ 
                  width: '331.01%', 
                  height: '374.8%', 
                  top: '-135.43%', 
                  left: '-18.22%' 
                }}
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-[24px] text-[#302f37] leading-[32px]">
                Apply
              </h3>
              <p className="font-['Montserrat',sans-serif] text-[18px] text-[#302f37] leading-[32px]">
                Fill out a single, 100% digital application in seconds and instantly connect with a vast network of top-tier lenders. <span className="font-medium">It's quick, easy, and completely paperless.</span>
              </p>
            </div>
          </div>

          {/* Arrow */}
          <img src={arrowIcon} alt="" className="w-[31px] h-[15px] mt-[40px]" />

          {/* Get Approved */}
          <div className="flex flex-col gap-[12px] w-[344px]">
            <div className="h-[86px] w-[83px] relative overflow-hidden">
              <img 
                src={stepIconsSprite} 
                alt="Get Approved" 
                className="absolute max-w-none"
                style={{ 
                  width: '347.15%', 
                  height: '374.8%', 
                  top: '-135.43%', 
                  left: '-123.17%' 
                }}
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-[24px] text-[#302f37] leading-[32px]">
                Get Approved
              </h3>
              <p className="font-['Montserrat',sans-serif] text-[18px] text-[#302f37] leading-[32px]">
                <span className="font-medium">Maximize your success with up to 85% approval rates.</span> Our engine sequentially scans Prime, Near-prime, and Sub-prime lenders to find the perfect match for every customer.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <img src={arrowIcon} alt="" className="w-[31px] h-[15px] mt-[40px]" />

          {/* Start The Project */}
          <div className="flex flex-col gap-[12px] w-[295px]">
            <div className="h-[86px] w-[91px] relative overflow-hidden">
              <img 
                src={stepIconsSprite} 
                alt="Start The Project" 
                className="absolute max-w-none"
                style={{ 
                  width: '318.66%', 
                  height: '374.8%', 
                  top: '-135.43%', 
                  left: '-207.09%' 
                }}
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-[24px] text-[#302f37] leading-[32px]">
                Start The Project
              </h3>
              <p className="font-['Montserrat',sans-serif] text-[18px] text-[#302f37] leading-[32px]">
                Turn your quotes into signed contracts on the spot. Once approved, the funds are secured, so you can stop chasing leads and <span className="font-medium">start building today.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Just Connect & Grow Section */}
        <div className="flex flex-col gap-[90px] items-center">
          <h2 className="font-['Montserrat',sans-serif] font-bold text-[54px] text-[#694ad4] text-center leading-[1.1]">
            Just Connect & Grow
          </h2>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-3 gap-[35px]">
            {/* Row 1 */}
            <FeatureCard 
              icon={icon1}
              title="Boost Approval Rates"
              description="Maximize acceptance with a 33% proven lift. Our intelligent multi-lender waterfall ensures more customers get approved across all credit tiers."
            />
            <FeatureCard 
              icon={icon2}
              title="One Application, Multiple Lenders"
              description="The power of the network in a single form. Customers apply once and gain access to prime, near-prime, and sub-prime lenders automatically."
            />
            <FeatureCard 
              icon={icon3}
              title="Instant Decisions"
              description="Real-time credit matching at the point of sale. Get approval feedback in seconds, not days close deals while customers are still engaged."
            />

            {/* Row 2 */}
            <FeatureCard 
              icon={icon4}
              title="Zero Paperwork"
              description="100% digital experience from start to finish. No forms to print, no documents to mail just seamless, embedded financing that customers complete in seconds."
            />
            <FeatureCard 
              icon={icon5}
              title="Manage Financing Easily"
              description="Centralized control over all financing operations. Monitor approvals, track performance, and manage lender relationships from a single unified dashboard."
            />
            <FeatureCard 
              icon={icon6}
              title="Build Customer Loyalty"
              description="Keep customers coming back with flexible financing options. Increase repeat purchases and lifetime value by making every project affordable and accessible."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
