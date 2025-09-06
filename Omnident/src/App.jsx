import { useState } from 'react'
import CompLogo from './assets/Logo.svg'
import Girl from './assets/Girl01.jpg'
import People from './assets/People.jpg'
import { FaBars } from 'react-icons/fa'
import Button from './Components/Button'
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
            <h1 className='text-TextHeading text-2xl font-bold text-center w-80'>Pioneer The Future Of Patient Engagement</h1>
            <h2 className='text-TextPrimary text-xs text-center font-semibold w-70'>OmniDent AI turns your traffic into new patient appointments, without lifting a finger.</h2>
            <br /><br /><br />
            <h1 className='text-TextPrimary text-l font-bold w-75'>Your favourite tool for</h1>
            <h2 className="text-xs font-bold text-TextSecondary">
              <ul className="list-disc list-inside">
                <li>Reducing front desk workload</li>
                <li>Growing your practice</li>
                <li>Boosting patient engagement</li>
                <li>Automating appointment scheduling</li>
              </ul>
            </h2>
            <div className="flex justify-center items-center w-full h-screen -m-50">
              <iframe
                className="w-[300px] h-[400px] border-0 rounded-xl shadow-lg"
                src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Q5dHDQBsXPO21b03SHuq6Z?type=design&node-id=0%3A1&mode=design"
                allowFullScreen
              />
            </div>
            <Button />
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
        </div>
    </>
  )
}

export default App
