import { useState } from 'react'
import { useEffect } from "react";
import CompLogo from './assets/Logo.svg'
import Girl from './assets/Girl01.jpg'
import People from './assets/People.jpg'
import { FaBars, FaPhone, FaArrowRight } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { PiWechatLogoDuotone } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import Button from './Components/Button'
import ConnectionCard from './Components/ConnectionCard'
import ReviewCard from './Components/ReviewCard'
import Cal, { getCalApi } from "@calcom/embed-react";
import BackgroundFollower from './Components/BackgroundFollower';
import ScrambleText from './Components/ScrambleText';
function App() {  

  const [isWide, setIsWide] = useState(window.innerWidth > 760);
  const [Text, setText] = useState("Title");
  const letters  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const getRandomNumber = () => letters[Math.floor(Math.random() * 26)]; // random 0–99

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 760);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const rotations = isWide ? [-10, 0, 10] : [-10, 10, -10];
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"placeholder-for-omnident.ai"});
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#0B0F14" },
          dark: { "cal-brand": "#E0F7FA" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <>
      < BackgroundFollower/>
        <div className='w-screen h-screen ComponentsContainer p-4 pl-4'>
          <div className='Nav-bar m-2'>
            <img src={CompLogo} alt="Logo" className='h-12 w-auto' />
            < FaBars className='text-TextPrimary'/>
          </div>
          <img src={Girl} className='HeroBGImg'/>
          <div className='HeroContent'>
            <br /><br /><br /><br /><br /><br /><br />
            <ScrambleText
              text="Pioneer The Future Of Patient Engagement"
              className="bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent text-3xl font-bold text-left w-full -mt-45 xs:w-full xs:text-3xl xs:-mt-40 s:w-full s:text-5xl m:text-6xl m:w-100 cursor-pointer"
            />
            <h2 className='text-TextPrimary text-sm text-left mt-5 font-semibold w-full m:w-100 s:text-xl'>OmniDent AI turns your traffic into new patient appointments, without lifting a finger.</h2>
            <br />
            <Button />
            <br /><br />
            <div className="hidden m:flex justify-center items-center gap-10 w-full h-100">
              <div className="flex w-full h-full">
                {/* Left side - Text */}
                <div className="w-1/2 h-fullp-6">
                  <h1 className="text-TextPrimary text-l font-bold w-full s:text-xl">
                    Your favourite tool for
                  </h1>
                  <h2 className="text-xs s:text-lg font-bold text-TextSecondary mt-2">
                    <ul className="list-disc list-inside">
                      <li>Reducing front desk workload</li>
                      <li>Growing your practice</li>
                      <li>Boosting patient engagement</li>
                      <li>Automating appointment scheduling</li>
                    </ul>
                  </h2>
                  <h1 className="text-TextPrimary text-l font-bold w-full mt-10 s:text-xl">
                    Checkout for yourself
                  </h1>
                </div>

                {/* Right side - Iframe */}
                <div className="w-1/2 flex justify-center items-center p-6">
                  <iframe
                    className="w-full h-[400px] border-0 rounded-xl shadow-lg"
                    src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Q5dHDQBsXPO21b03SHuq6Z?type=design&node-id=0%3A1&mode=design"
                    allowFullScreen
                  />
                </div>
              </div>

            </div>

            <div className='block m:hidden w-full'>
              <h1 className='text-TextPrimary text-l font-bold w-full s:text-xl'>Your favourite tool for</h1>
              <h2 className="text-xs s:text-lg font-bold text-TextSecondary mt-2">
                <ul className="list-disc list-inside">
                  <li>Reducing front desk workload</li>
                  <li>Growing your practice</li>
                  <li>Boosting patient engagement</li>
                  <li>Automating appointment scheduling</li>
                </ul>
              </h2>
              <h1 className='text-TextPrimary text-l font-bold w-full mt-10 s:text-xl'>Checkout for yourself</h1>
              <div className="flex justify-center items-center w-full h-screen -mt-40">
                <iframe
                  className="w-full h-[400px] border-0 rounded-xl shadow-lg"
                  src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Q5dHDQBsXPO21b03SHuq6Z?type=design&node-id=0%3A1&mode=design"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className='PatientJourney'>
            <div className='PatientJourneyHeader'>
              <ScrambleText 
              text="AI-Powered Automation at every touchpoint"
              className="bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent text-4xl font-bold text-center w-80 s:w-90"
              />
              
              <h2 className='text-TextPrimary text-xs text-center font-semibold w-80 s:w-90'>From first contact to lifetime loyalty, OmniDent AI orchestrates seamless patient experiences that drive practice growth</h2>
            </div>
            <div className='Cards mb-50'>
              <div className='Card'></div>
              <div className='Card'></div>
              <div className='Card'></div>
              <div className='Card'></div>
              <div className='Card'></div>
            </div>
          </div>
          <div className='PatientJour02'>
            <div className='PatientJour02Header flex justify-center items-center flex-col '>
              <ScrambleText
                text="Don’t compromise your practice with average solutions"
                className="bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-3xl font-bold text-left m:text-center m:text-5xl w-full s:text-4xl"
              />
              <h2 className='text-TextSecondary text-sm text-left m:text-center font-semibold m:text-xl w-full m:w-125 s:text-lg '>See how OmniDent AI can automate your practice operations and boost patient satisfaction</h2>
            </div>
            <div className='PatientJour02Buttons py-5'>
              <Button />
              <Button />
            </div>
            <div className='PatientJour02Connection mt-10 w-full'>
              <h1 className='bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-3xl font-bold text-left w-full s:text-4xl'>One AI,</h1>
              <h2 className='bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-lg text-left font-semibold w-full s:text-xl'>Three Ways to Connect With Patients</h2>
            </div>
            <div className='PatientJour02ConnectionCards '>
              <ConnectionCard Rotation={rotations[0]} Color={"#69F0AE"} Icon={FaMessage} Title={"SMS"} Content={"Patients text your practice number and instantly connect with OmniDent.ai for scheduling, questions, and more."}/>
              <ConnectionCard Rotation={rotations[1]} Color={"#00E5FF"} Icon={PiWechatLogoDuotone} Title={"WEB CHAT"} Content={"A sleek chat bubble on your website connects visitors directly to OmniDent.ai for instant assistance."}/>
              <ConnectionCard Rotation={rotations[2]} Color={"#69F0AE"} Icon={FaPhone} Title={"PHONE"} Content={"Patients call your practice number and speak naturally with OmniDent AI's voice assistant."}/>
            </div>
          </div>
          <div className='MainPatientJourney '>
            <div className='PatientJourneyHeader flex justify-center items-center flex-col'>
              <ScrambleText
                text="Transforming Your Patient Journey Experience"
                className="bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent text-4xl font-bold s:w-90 m:text-center m:text-5xl m:w-full"
              />
              <h2 className='text-TextSecondary text-sm text-left m:text-center font-semibold m:text-xl w-full m:w-125 s:text-lg'>At OmniDent.ai, we revolutionize the patient journey with our AI-driven solutions. Experience seamless engagement from initial contact to ongoing care.</h2>
            </div>
            <div className='Cards mb-50'>
              <div className='Card'></div>
              <div className='Card'></div>
              <div className='Card'></div>
              <div className='Card'></div>
              <div className='Card'></div>
              <div className='Card'></div>
            </div>
          </div>
          <div className='SeamlessIntegration'>
            <div className='SeamlessIntegrationHeader'>
              <h1 className='bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-xl font-bold text-center w-80 s:w-90 s:text-2xl m:text-3xl m:w-full'>Seamless Integration With Your Existing PMS</h1>
            </div>
          </div>
          <div className='CaseStudies mt-30'>
            <div className='PatientJour02Header'>
              <ScrambleText
              text="Elite practices are already winning" 
              className="bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-3xl font-bold text-left w-full s:text-5xl"
              />
              <h2 className='text-TextSecondary text-sm text-left font-semibold w-full s:text-lg'>Join 50+ forward-thinking practices transforming their patient engagement.</h2>
            </div>
            <div className='CaseStudiesRatings w-full mt-5 '>
              <ReviewCard Location={"Martinez Family Industry"} Person={"Dr. Sarah Martinez"} Content={"OmniDent.ai increased our appointment bookings by 60% in just 3 months. The AI handles patient questions 24/7."}/>
              <ReviewCard Location={"Downtown Dental Care"} Person={"Dr. Emily Rodriguez"} Content={"We've saved 15 hours per week on appointment scheduling. The AI understands dental terminology perfectly."}/>
              <ReviewCard Location={"Wilson Orthodontics"} Person={"Dr. James Wilson"} Content={"Best investment for our practice. Patient satisfaction is up, staff stress is down, more consultations booked."}/>
            </div>
          </div>
          <div className='Pricing mt-5'>
             <div className='PatientJour02Header'>
              <ScrambleText
              text="Investment That Transforms Everything" 
              className="bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-3xl font-bold text-left w-full s:text-4xl"
              />
              <h2 className='text-TextSecondary text-sm text-left font-semibold w-80 s:text-lg'>Join an exclusive cohort of forward-thinking practices. This isn't just software—it's your competitive edge.</h2>
            </div>
            <div className='m:flex m:justify-between'>
              <div className='ImplementationPricing bg-gradient-to-r from-pricegradient-left to-pricegradient-right/50 p-2'>
                <h1 className='bg-gradient-to-l from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-3xl/tight font-bold '>Implementation Investment <br /> $5000</h1>
                <h2 className='text-TextPrimary text-xl font-bold'>Elite Marketing Partner</h2>
                <h3 className='text-TextSecondary text-sm '>Your marketing credit is managed by Concepcion.work's dental specialists. Custom campaigns, proven SEO strategies, and high-value patient acquisition—all with OmniDent.ai seamlessly integrated.</h3>
                <a href="https://concepcion.work/" className='text-ButtonLight text-xl font-bold pt-3 pb-3 hover:cursor-pointer flex gap-2 align-middle items-center'>Explore Partnership <FaArrowRight/> </a>
                <h3 className='text-TextSecondary text-sm '>One-time setup includes $1,000 marketing activation credit</h3>
                <h1 className='bg-gradient-to-l from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-lg font-semibold pt-5 '>30-Day Performance Guarantee</h1>
                <h3 className='text-TextSecondary text-sm pt-5'>3+ new patients booked automatically in 30 days or receive a full refund (minus marketing credit deployed)</h3>
              </div>
              <div className='ImplementationPricing bg-gradient-to-r from-pricegradient-left to-pricegradient-right/50 p-2'>
                <h1 className='bg-gradient-to-l from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-3xl/tight font-bold '>Implementation Investment <br /> $5000</h1>
                <h2 className='text-TextPrimary text-xl font-bold'>Elite Marketing Partner</h2>
                <h3 className='text-TextSecondary text-sm '>Your marketing credit is managed by Concepcion.work's dental specialists. Custom campaigns, proven SEO strategies, and high-value patient acquisition—all with OmniDent.ai seamlessly integrated.</h3>
                <a href="https://concepcion.work/" className='text-ButtonLight text-xl font-bold pt-3 pb-3 hover:cursor-pointer flex gap-2 align-middle items-center'>Explore Partnership <FaArrowRight/> </a>
                <h3 className='text-TextSecondary text-sm '>One-time setup includes $1,000 marketing activation credit</h3>
                <h1 className='bg-gradient-to-l from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-lg font-semibold pt-5 '>30-Day Performance Guarantee</h1>
                <h3 className='text-TextSecondary text-sm pt-5'>3+ new patients booked automatically in 30 days or receive a full refund (minus marketing credit deployed)</h3>
              </div>
            </div>
          </div>
          <div className='Booking mt-5'>
            <div className='PatientJour02Header m:w-1/2 h-max '>
              <ScrambleText
              text="Your Competitors Are Already Using AI" 
              className="bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-3xl font-bold text-left w-full s:text-4xl"
              />
              <h2 className='text-TextSecondary text-sm text-left font-semibold w-full mb-5'>Every day without OmniDent.ai means lost patients and revenue. Transform your practice today.</h2>
              <Button />
              <h1 className='bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-3xl font-bold text-left w-full pt-10'>Ready To Transform Your Practice?</h1>
              <h2 className='text-TextSecondary text-sm text-left font-semibold w-full mb-5'>Book Your Discovery Call</h2>
              <h3 className='text-TextSecondary text-sm w-full'>See OmniDent.ai in action. Get a personalized demo and learn how we can revolutionize your patient experience.</h3>
              <h3 className='text-TextPrimary pt-4 w-full'><IoMdMail/> Email <br /> Reach us at <br /> <h3 className='text-OmniRed'>han@3dsmilesolutions.ai</h3></h3>
            </div>
            <div className=' w-full m:w-1/2 m:h-130'>
              <Cal
                className='mt-5'
                namespace="placeholder-for-omnident.ai"
                calLink="abdullah-younas-ubji9o/placeholder-for-omnident.ai"
                style={{ width: "100%", height: "90%", overflowX: "hidden" }}
                config={{ layout: "month_view", theme: "dark" }}
              />
            </div>
          </div>
          <div className='Footer mt-5 flex flex-col justify-center items-center'>
            <img src={CompLogo} alt="Logo" className='h-16 w-screen mb-10 m:h-32' />
              <hr className='text-TextPrimary w-full pb-10'/>
            <div className='FooterContent text-TextPrimary w-full flex justify-center flex-col text-center m:flex-row-reverse m:justify-between'>
              <div className='flex flex-col m:flex m:gap-4 m:flex-row'>
                <a href="" className='text-TextPrimary pb-10 underline'>Privacy Policy</a>
                <a href="" className='text-TextPrimary pb-10 underline'>Terms of Service</a>
              </div>
              <h1>© 2025 OmniDent.ai. All rights reserved.</h1>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
