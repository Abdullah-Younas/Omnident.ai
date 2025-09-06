import { useState } from 'react'
import CompLogo from './assets/Logo.svg'
import Girl from './assets/Girl01.jpg'
import People from './assets/People.jpg'
import { FaBars, FaPhone, } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { PiWechatLogoDuotone } from "react-icons/pi";
import Button from './Components/Button'
import ConnectionCard from './Components/ConnectionCard'
import ReviewCard from './Components/ReviewCard'
function App() {

  return (
    <>
      <img src={Girl} className='HeroBGImg'/>
        <div className='w-screen h-screen ComponentsContainer'>
          <div className='Nav-bar m-2'>
            <img src={CompLogo} alt="Logo" className='h-12 w-auto' />
            < FaBars className='text-TextPrimary'/>
          </div>
          <div className='HeroContent'>
            <br /><br /><br /><br /><br /><br /><br />
            <h1 className='text-TextHeading text-4xl font-bold text-left w-80'>Pioneer The Future Of Patient Engagement</h1>
            <h2 className='text-TextPrimary text-sm text-left font-semibold w-80'>OmniDent AI turns your traffic into new patient appointments, without lifting a finger.</h2>
            <br />
            <Button />
            <br /><br />
            <h1 className='text-TextPrimary text-l font-bold w-80'>Your favourite tool for</h1>
            <h2 className="text-xs font-bold text-TextSecondary mt-2">
              <ul className="list-disc list-inside">
                <li>Reducing front desk workload</li>
                <li>Growing your practice</li>
                <li>Boosting patient engagement</li>
                <li>Automating appointment scheduling</li>
              </ul>
            </h2>
            <h1 className='text-TextPrimary text-l font-bold w-80 mt-5'>Checkout for yourself</h1>
            <div className="flex justify-center items-center w-full h-screen -m-40">
              <iframe
                className="w-[300px] h-[400px] border-0 rounded-xl shadow-lg"
                src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Q5dHDQBsXPO21b03SHuq6Z?type=design&node-id=0%3A1&mode=design"
                allowFullScreen
              />
            </div>
          </div>
          <div className='PatientJourney'>
            <div className='PatientJourneyHeader'>
              <h1 className='text-TextHeading text-4xl font-bold text-center w-80'>AI-Powered Automation at every touchpoint</h1>
              <h2 className='text-TextPrimary text-xs text-center font-semibold w-80'>From first contact to lifetime loyalty, OmniDent AI orchestrates seamless patient experiences that drive practice growth</h2>
            </div>
             <div className="FrSlider mt-10" style={{ "--quantity": 5 }}>
              <div className="FrSliderItem" style={{ "--position": 1 }}>
                <div className="FrSliderItem01Content bg-amber-50 rounded">
                  <h1 className='text-TextHeading text-xl font-bold text-left w-fit hover:text-ButtonLight cursor-pointer transition-all duration-[500ms] ease-in'>  BEFORE THE APPOINTMENT</h1>
                <h2 className='text-TextHeading text-lg font-semibold text-left w-fit'>Engaging Patient Aquisition</h2>
                </div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 2 }}>
                <div className="FrSliderItem01Content bg-ButtonLight rounded"></div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 3 }}>
                <div className="FrSliderItem01Content bg-TextPrimary rounded"></div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 4 }}>
                <div className="FrSliderItem01Content bg-amber-400 rounded"></div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 5 }}>
                <div className="FrSliderItem01Content bg-amber-400 rounded"></div>
              </div>
            </div>
          </div>
          <div className='PatientJour02'>
            <div className='PatientJour02Header'>
              <h1 className='text-TextHeading text-3xl font-bold text-left w-80'>Don’t compromise your practice with average solutions</h1>
              <h2 className='text-TextSecondary text-sm text-left font-semibold w-80'>See how OmniDent AI can automate your practice operations and boost patient satisfaction</h2>
            </div>
            <div className='PatientJour02Buttons py-5'>
              <Button />
              <Button />
            </div>
            <div className='PatientJour02Connection mt-10'>
              <h1 className='text-TextHeading text-3xl font-bold text-left w-80'>One AI,</h1>
              <h2 className='text-TextHeading text-lg text-left font-semibold w-70'>Three Ways to Connect With Patients</h2>
            </div>
            <div className='PatientJour02ConnectionCards mt-5'>
              <ConnectionCard Rotation={-10} Color={"#69F0AE"} Icon={FaMessage} Title={"SMS"} Content={"Patients text your practice number and instantly connect with OmniDent.ai for scheduling, questions, and more."}/>
              <ConnectionCard Rotation={10} Color={"#00E5FF"} Icon={PiWechatLogoDuotone} Title={"WEB CHAT"} Content={"A sleek chat bubble on your website connects visitors directly to OmniDent.ai for instant assistance."}/>
              <ConnectionCard Rotation={-10} Color={"#69F0AE"} Icon={FaPhone} Title={"PHONE"} Content={"Patients call your practice number and speak naturally with OmniDent AI's voice assistant."}/>
            </div>
          </div>
          <div className='MainPatientJourney'>
            <div className='PatientJourneyHeader'>
              <h1 className='text-TextHeading text-4xl font-bold text-center w-80'>Transforming Your Patient Journey Experience</h1>
              <h2 className='text-TextPrimary text-xs text-center font-semibold w-80'>At OmniDent.ai, we revolutionize the patient journey with our AI-driven solutions. Experience seamless engagement from initial contact to ongoing care.</h2>
            </div>
             <div className="FrSlider mt-10" style={{ "--quantity": 5 }}>
              <div className="FrSliderItem" style={{ "--position": 1 }}>
                <div className="FrSliderItem01Content bg-amber-50 rounded">
                  <h1 className='text-TextHeading text-xl font-bold text-left w-fit hover:text-ButtonLight cursor-pointer transition-all duration-[500ms] ease-in'>  BEFORE THE APPOINTMENT</h1>
                <h2 className='text-TextHeading text-lg font-semibold text-left w-fit'>Engaging Patient Aquisition</h2>
                </div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 2 }}>
                <div className="FrSliderItem01Content bg-ButtonLight rounded"></div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 3 }}>
                <div className="FrSliderItem01Content bg-TextPrimary rounded"></div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 4 }}>
                <div className="FrSliderItem01Content bg-amber-400 rounded"></div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 5 }}>
                <div className="FrSliderItem01Content bg-amber-400 rounded"></div>
              </div>
            </div>
          </div>
          <div className='SeamlessIntegration'>
            <div className='SeamlessIntegrationHeader'>
              <h1 className='text-TextHeading text-xl font-bold text-center w-80'>Seamless Integration With Your Existing PMS</h1>
            </div>
          </div>
          <div className='CaseStudies mt-30'>
            <div className='PatientJour02Header'>
              <h1 className='text-TextHeading text-3xl font-bold text-left w-80'>Elite practices are already winning</h1>
              <h2 className='text-TextSecondary text-sm text-left font-semibold w-80'>Join 50+ forward-thinking practices transforming their patient engagement.</h2>
            </div>
            <div className='CaseStudiesRatings w-screen'>
              <ReviewCard Location={"Martinez Family Industry"} Person={"Dr. Sarah Martinez"} Content={"OmniDent.ai increased our appointment bookings by 60% in just 3 months. The AI handles patient questions 24/7."}/>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
