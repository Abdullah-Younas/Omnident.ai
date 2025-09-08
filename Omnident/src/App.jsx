import { useState, useRef, useEffect } from 'react'

import CompLogo from './assets/Logo.svg'
import Girl from './assets/Girl01.jpg'
import Girl2 from './assets/Girl02.jpg'
import Girl3 from './assets/Girl03.jpg'
import Girl4 from './assets/Girl04.jpg'
import Boy from './assets/Boy.jpg'
import Boy2 from './assets/Boy02.jpg'
import Boy3 from './assets/Boy03.jpg'
import Boy4 from './assets/Boy04.jpg'

import { FaBars, FaPhone, FaArrowRight, FaTimes, FaBrain, FaBell } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { PiWechatLogoDuotone } from "react-icons/pi";
import { BsShieldFillPlus } from "react-icons/bs";
import { BsCalendarHeart } from "react-icons/bs";
import { LiaChartBarSolid } from "react-icons/lia";
import { IoPeople } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

import Button from './Components/Button'
import ConnectionCard from './Components/ConnectionCard'
import ReviewCard from './Components/ReviewCard'
import Cal, { getCalApi } from "@calcom/embed-react";
import BackgroundFollower from './Components/BackgroundFollower';
import ScrambleText from './Components/ScrambleText';
import "react-day-picker/style.css";



function App() {  
  const bookingRef = useRef(null);
  const CaseStudiesRef = useRef(null);
  const FeaturesRef = useRef(null);
  const PatientJourneyRef = useRef(null);
  const SIntegrationsRef = useRef(null);
  const PricingRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isWide, setIsWide] = useState(window.innerWidth > 760);

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

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCaseStudies = () => {
    CaseStudiesRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const scrolltoFeatures = () => {
    FeaturesRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToPatientJourney = () => {
    PatientJourneyRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToSintegrations = () => {
    SIntegrationsRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToPricing = () => {
    PricingRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const handleNavClick = (callback) => {
  if (callback) callback(); // run original scroll function
  setIsOpen(false); // close menu
  };
  const SmileNexus = () => {
    window.open("https://smilenexus.vercel.app/", "_blank");
  };

  return (
    <>
      < BackgroundFollower/>
        <div className="relative">
          {/* Navbar Top */}
          <div className="Nav-bar m-2 fixed z-50 w-full p-3 flex justify-between items-center pl-5 pr-10">
            <img src={CompLogo} alt="Logo" className="h-12 w-auto" />

            {/* Desktop Menu */}
            <ul className="hidden nm:flex flex-row items-center space-x-8 text-sm text-TextPrimary font-semibold">
              <li className="hover:text-ButtonLight cursor-pointer" onClick={scrolltoFeatures}>Features</li>
              <li className="hover:text-ButtonLight cursor-pointer" onClick={scrollToPatientJourney}>Patient Journey</li>
              <li className="hover:text-ButtonLight cursor-pointer" onClick={scrollToSintegrations}>Integrations</li>
              <li className="hover:text-ButtonLight cursor-pointer" onClick={scrollToPricing}>Pricing</li>
              <li className="hover:text-ButtonLight cursor-pointer" onClick={SmileNexus}>SmileNexus</li>
              <li>
                <Button Text={"Book Demo"} onClick={scrollToBooking}/>
              </li>
            </ul>


            {/* Mobile Hamburger */}
            <button
              className="nm:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FaTimes className="text-TextPrimary text-2xl" />
              ) : (
                <FaBars className="text-TextPrimary text-2xl" />
              )}
            </button>
          </div>

          {/* Full Screen Menu (Mobile Only) */}
          <div
            className={`fixed inset-0 bg-OmniBg z-40 flex flex-col transition-transform duration-500 nm:hidden ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <ul className="flex flex-col space-y-8 text-xl text-center text-TextPrimary font-semibold mt-20">
              <li className="hover:text-ButtonLight cursor-pointer" onClick={() => handleNavClick(scrolltoFeatures)}>Features</li>
              <li className="hover:text-ButtonLight cursor-pointer" onClick={() => handleNavClick(scrollToPatientJourney)}>Patient Journey</li>
              <li className="hover:text-ButtonLight cursor-pointer" onClick={() => handleNavClick(scrollToSintegrations)}>Integrations</li>
              <li className="hover:text-ButtonLight cursor-pointer" onClick={() => handleNavClick(scrollToPricing)}>Pricing</li>
              <li className="hover:text-ButtonLight cursor-pointer" onClick={SmileNexus}>SmileNexus</li>
              <li>
                <Button Text={"Book Demo"} onClick={() => handleNavClick(scrollToBooking)}/>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-screen h-screen ComponentsContainer p-4 pl-4 md:-translate-y-40 '>
          <img src={Girl} className='HeroBGImg' loading="lazy"/>
          <div className='HeroContent -mb-100 h-250 blocK xl:pl-10'>
            <br /><br /><br /><br /><br /><br /><br />
            <div className="w-full flex flex-col md:flex-row justify-between md:overflow-hidden relative">
              {/* Left Content */}
              <div className="  w-full max-w-[700px] md:w-1/2 flex flex-col px-4 py-8 md:py-0">
                <ScrambleText
                  text="Pioneer The Future Of Patient Engagement"
                  className="bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent text-3xl font-bold text-left w-full cursor-pointer m:text-5xl xl:text-7xl"
                  />
                <h2 className="text-TextPrimary text-sm text-left mt-5 font-semibold s:text-xl">
                  OmniDent AI turns your traffic into new patient appointments, without lifting a finger.
                </h2>
                <br />
                <div>
                  <Button Text={"Get Started"} onClick={scrollToBooking} />
                </div>
              </div>

              <div className='hidden md:flex w-full max-w-[600px]  justify-center'>
                {/* Right Hero Images */}
                <div className="hidden md:flex w-full  max-w-[400px] relative overflow-hidden h-[600px] rounded">
                  {/* Fade overlay top */}
                  <div className="absolute top-0 left-0 w-[400px] h-24 bg-gradient-to-b from-white/80 to-transparent z-10 pointer-events-none" />
                  {/* Fade overlay bottom */}
                  <div className="absolute bottom-0 left-0 w-[400px] h-24 bg-gradient-to-t from-white/80 to-transparent z-10 pointer-events-none" />

                  {/* Left Column: scroll up */}
                  <div className="flex flex-col animate-scroll-up space-y-2 w-1/2 h-full items-center">
                    <img src={Boy} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    <img src={Girl} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    <img src={Boy3} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    <img src={Girl2} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    {/* Duplicate for seamless loop */}
                    <img src={Boy} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    <img src={Girl} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    <img src={Boy3} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    <img src={Girl2} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                  </div>

                  {/* Right Column: scroll down */}
                  <div className="flex flex-col animate-scroll-down space-y-2 absolute top-0 w-1/2 right-0 h-full items-center">
                    <img src={Boy2} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    <img src={Girl3} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    <img src={Boy4} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    <img src={Girl4} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    {/* Duplicate for seamless loop */}
                    <img src={Boy2} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    <img src={Girl3} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    <img src={Boy4} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                    <img src={Girl4} alt="" className="w-[190px] h-[300px] object-cover" loading="lazy"/>
                  </div>
                </div>
              </div>

            </div>
            <br /><br />
            <div className="hidden m:flex justify-center items-center gap-10 w-full h-100">
              <div className="flex w-full h-full ">
                {/* Left side - Text */}
                <div className="w-1/2 h-fullp-6">
                  <h1 className="text-TextPrimary text-l font-bold w-full s:text-xl xl:text-5xl">
                    Your favourite tool for
                  </h1>
                  <h2 className="text-xs s:text-lg font-bold text-TextSecondary mt-2 xl:text-2xl">
                    <ul className="list-disc list-inside">
                      <li>Reducing front desk workload</li>
                      <li>Growing your practice</li>
                      <li>Boosting patient engagement</li>
                      <li>Automating appointment scheduling</li>
                    </ul>
                  </h2>
                  <h1 className="text-TextPrimary text-l font-bold w-full mt-10 s:text-xl xl:text-2xl">
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
          <div ref={PatientJourneyRef} className='MainPatientJourney blocK'>
            <div className='PatientJourneyHeader'>
              <ScrambleText 
                text="AI-Powered Automation at every touchpoint"
                className="bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent text-4xl font-bold text-center w-full max-w-5xl mx-auto xl:text-6xl"
              />
              <h2 className='text-TextPrimary text-sm text-center font-semibold w-full max-w-4xl mx-auto mt-4'>
                From first contact to lifetime loyalty, OmniDent AI orchestrates seamless patient experiences that drive practice growth
              </h2>
            </div>
            <div className="FrSlider mt-10 xl:mt-25 " style={{ "--quantity": 5 }}>
              <div className="FrSliderItem" style={{ "--position": 1 }}>
                <div className="FrSliderItem01Content  rounded">
                  <FaBrain className='w-12 h-auto text-TextHeading'/>
                  <h1 className='text-xl font-bold text-TextPrimary'>AI-Powered Scheduling</h1>
                  <h2 className='text-sm font-light text-TextSecondary'>Intelligent appointment booking that understands patient preferences, provider availability, and treatment requirements.</h2>
                </div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 2 }}>
                <div className="FrSliderItem01Content  rounded">
                  <FaBell className='w-12 h-auto text-TextHeading'/>
                  <h1 className='text-xl font-bold text-TextPrimary'>Smart Reminders & Confirmations</h1>
                  <h2 className='text-sm font-light text-TextSecondary'>Proactive patient communication that adapts timing and channel based on patient behavior patterns.</h2>
                </div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 3 }}>
                <div className="FrSliderItem01Content bg-TextPrimary rounded">
                  <BsShieldFillPlus className='w-12 h-auto text-TextHeading'/>
                  <h1 className='text-xl font-bold text-TextPrimary'>Insurance Verification</h1>
                  <h2 className='text-sm font-light text-TextSecondary'>Automated insurance eligibility checks and pre-authorization handling to eliminate billing surprises.</h2>
                </div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 4 }}>
                <div className="FrSliderItem01Content bg-amber-400 rounded">
                  <IoPeople className='w-12 h-auto text-TextHeading'/>
                  <h1 className='text-xl font-bold text-TextPrimary'>Treatment Plan Communication</h1>
                  <h2 className='text-sm font-light text-TextSecondary'>Clear, personalized explanations of procedures, costs, and timelines delivered through preferred channels.</h2>
                </div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 5 }}>
                <div className="FrSliderItem01Content bg-amber-400 rounded">
                 <BsCalendarHeart className='w-12 h-auto text-TextHeading'/>
                  <h1 className='text-xl font-bold text-TextPrimary'>Post-Treatment Follow Up</h1>
                  <h2 className='text-sm font-light text-TextSecondary'>Automated care coordination including medication reminders, healing progress checks, and satisfaction surveys.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='PatientJour02 xl:mt-5 blocK'>
            <div className='PatientJour02Header flex justify-center items-center flex-col '>
              <ScrambleText
                text="Don’t compromise your practice with average solutions"
                className="bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-3xl font-bold text-left m:text-center m:text-5xl w-full s:text-4xl xl:text-center xl:w-screen"
              />
              <h2 className='text-TextSecondary text-sm text-left m:text-center font-semibold m:text-xl w-full m:w-125 s:text-lg '>See how OmniDent AI can automate your practice operations and boost patient satisfaction</h2>
            </div>
            <div className='PatientJour02Buttons py-5'>
              <Button Text={"Get A Demo"} onClick={scrollToBooking}/>
              <Button Text={"View Case Studies"} onClick={scrollToCaseStudies}/>
            </div>
            <div className='PatientJour02Connection w-full'>
              <h1 className='bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-3xl font-bold text-left w-full s:text-4xl xl:text-center xl:text-6xl'>One AI,</h1>
              <h2 className='bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-lg text-left font-semibold w-full s:text-xl xl:text-center xl:text-5xl'>Three Ways to Connect With Patients</h2>
            </div>
            <div className='PatientJour02ConnectionCards pt-35 mb-10 m:pt-5 m:-mb-50'>
              <ConnectionCard Rotation={rotations[0]} Color={"#69F0AE"} Icon={FaMessage} Title={"SMS"} Content={"Patients text your practice number and instantly connect with OmniDent.ai for scheduling, questions, and more."}/>
              <ConnectionCard Rotation={rotations[1]} Color={"#00E5FF"} Icon={PiWechatLogoDuotone} Title={"WEB CHAT"} Content={"A sleek chat bubble on your website connects visitors directly to OmniDent.ai for instant assistance."}/>
              <ConnectionCard Rotation={rotations[2]} Color={"#69F0AE"} Icon={FaPhone} Title={"PHONE"} Content={"Patients call your practice number and speak naturally with OmniDent AI's voice assistant."}/>
            </div>
          </div>
          <div ref={FeaturesRef} className='MainPatientJourney blocK'>
            <div className='PatientJourneyHeader flex justify-center items-center flex-col'>
              <ScrambleText
                text="Transforming Your Patient Journey Experience"
                className="bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent text-4xl font-bold s:w-90 m:text-center m:text-5xl m:w-full"
              />
              <h2 className='text-TextSecondary text-sm text-center m:text-center font-semibold m:text-xl w-full m:w-125 s:text-lg'>At OmniDent.ai, we revolutionize the patient journey with our AI-driven solutions. Experience seamless engagement from initial contact to ongoing care.</h2>
            </div>
            <div className="FrSlider mt-10" style={{ "--quantity": 6 }}>
              <div className="FrSliderItem" style={{ "--position": 1 }}>
                <div className="FrSliderItem01Content  rounded">
                  <FaBrain className='w-12 h-auto text-TextHeading'/>
                  <h1 className='text-xl font-bold text-TextPrimary'>AI-Powered Scheduling</h1>
                  <h2 className='text-sm font-light text-TextSecondary'>Intelligent appointment booking that understands patient preferences, provider availability, and treatment requirements.</h2>
                </div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 2 }}>
                <div className="FrSliderItem01Content  rounded">
                  <FaBell className='w-12 h-auto text-TextHeading'/>
                  <h1 className='text-xl font-bold text-TextPrimary'>Smart Reminders & Confirmations</h1>
                  <h2 className='text-sm font-light text-TextSecondary'>Proactive patient communication that adapts timing and channel based on patient behavior patterns.</h2>
                </div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 3 }}>
                <div className="FrSliderItem01Content bg-TextPrimary rounded">
                  <BsShieldFillPlus className='w-12 h-auto text-TextHeading'/>
                  <h1 className='text-xl font-bold text-TextPrimary'>Insurance Verification</h1>
                  <h2 className='text-sm font-light text-TextSecondary'>Automated insurance eligibility checks and pre-authorization handling to eliminate billing surprises.</h2>
                </div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 4 }}>
                <div className="FrSliderItem01Content bg-amber-400 rounded">
                  <IoPeople className='w-12 h-auto text-TextHeading'/>
                  <h1 className='text-xl font-bold text-TextPrimary'>Treatment Plan Communication</h1>
                  <h2 className='text-sm font-light text-TextSecondary'>Clear, personalized explanations of procedures, costs, and timelines delivered through preferred channels.</h2>
                </div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 5 }}>
                <div className="FrSliderItem01Content bg-amber-400 rounded">
                 <BsCalendarHeart className='w-12 h-auto text-TextHeading'/>
                  <h1 className='text-xl font-bold text-TextPrimary'>Post-Treatment Follow Up</h1>
                  <h2 className='text-sm font-light text-TextSecondary'>Automated care coordination including medication reminders, healing progress checks, and satisfaction surveys.</h2>
                </div>
              </div>
              <div className="FrSliderItem" style={{ "--position": 6 }}>
                <div className="FrSliderItem01Content bg-amber-400 rounded">
                 <LiaChartBarSolid className='w-12 h-auto text-TextHeading'/>
                  <h1 className='text-xl font-bold text-TextPrimary'>Practice Analytics Dashboard</h1>
                  <h2 className='text-sm font-light text-TextSecondary'>Comprehensive insights into pateint engagement, AI efficiency and revenue optimizations.</h2>
                </div>
              </div>
            </div>
            <div className='Cards mb-50'>
            </div>
          </div>
         <div ref={SIntegrationsRef} className='SeamlessIntegration bg-white rounded mt-10'>
          <div className='SeamlessIntegrationHeader'>
            <h1 className='integration-title text-ButtonLight'>
              Seamless Integration With Your Existing PMS
            </h1>
            <div className="integration-scroller">
              <ul className="integration-list">
                {Array(3).fill(0).flatMap(() =>
                  [
                    "https://cdn.prod.website-files.com/68ae4094133a128ca0ec6445/68b22ceb97ac01e26ef1ee92_denticon%20logo.PNG",
                    "https://cdn.prod.website-files.com/68ae4094133a128ca0ec6445/68b22ceb97ac01e26ef1ee85_eaglesoft-logo-white-bkg-1200x628-1-ezgif.com-webp-to-png-converter.png",
                    "https://cdn.prod.website-files.com/68ae4094133a128ca0ec6445/68b22ceb97ac01e26ef1ee8c_Curve%20Dental%20Logo.PNG",
                    "https://cdn.prod.website-files.com/68ae4094133a128ca0ec6445/68b241a868106b95daf41202_1f3c9cc6aa7254d5c6e85e9310bb5fe2_Untitled%20design.png",
                    "https://cdn.prod.website-files.com/68ae4094133a128ca0ec6445/68b22ceb97ac01e26ef1ee8a_LogoBigO_Software_500x180.png",
                  ].map((src, index) => (
                    <li key={index + Math.random()} className="integration-item">
                      <img
                        src={src}
                        alt=""
                        className="integration-img"
                      />
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>

          <div ref={CaseStudiesRef} className='CaseStudies mt-30'>
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
          <div ref={PricingRef} className='Pricing mt-5 blocK'>
             <div className='PatientJour02Header'>
              <ScrambleText
              text="Investment That Transforms Everything" 
              className="bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-3xl font-bold text-left w-full s:text-4xl xl:text-center l:text-center xl:text-6xl"
              />
              <h2 className='text-TextSecondary text-sm text-left font-semibold w-80 s:text-lg l:text-center l:w-screen xl:text-center xl:w-screen'>Join an exclusive cohort of forward-thinking practices. This isn't just software—it's your competitive edge.</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center xl:justify-around gap-6">
              {/* Left Card */}
              <div className="ImplementationPricing bg-gradient-to-r from-pricegradient-left to-pricegradient-right/50 
                p-6 flex flex-col rounded-2xl 
                w-full max-w-[500px] min-h-[500px] h-auto">

                <h1 className="bg-gradient-to-l from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent text-3xl font-bold">
                  Implementation Investment <br /> $5000
                </h1>
                <h2 className="text-TextPrimary text-xl font-bold">Elite Marketing Partner</h2>
                <h3 className="text-TextSecondary text-sm">
                  Your marketing credit is managed by Concepcion.work's dental specialists. Custom campaigns, proven SEO strategies, and high-value patient acquisition—all with OmniDent.ai seamlessly integrated.
                </h3>
                <a
                  href="https://concepcion.work/"
                  className="text-ButtonLight text-xl font-bold pt-3 pb-3 hover:cursor-pointer flex gap-2 items-center"
                >
                  Explore Partnership <FaArrowRight />
                </a>
                <h3 className="text-TextSecondary text-sm">
                  One-time setup includes $1,000 marketing activation credit
                </h3>
                <h1 className="bg-gradient-to-l from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent text-lg font-semibold pt-5">
                  30-Day Performance Guarantee
                </h1>
                <h3 className="text-TextSecondary text-sm pt-5">
                  3+ new patients booked automatically in 30 days or receive a full refund (minus marketing credit deployed)
                </h3>
              </div>

              {/* Right Card */}
              <div className="ImplementationPricing bg-gradient-to-r from-pricegradient-left to-pricegradient-right/50 
                p-6 flex flex-col rounded-2xl 
                w-full max-w-[500px] min-h-[500px] h-auto">

                <h1 className="bg-gradient-to-l from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent text-3xl font-bold">
                  $995/mo
                </h1>
                <h2 className="text-TextPrimary text-xl font-bold">
                  Annual Commitment: $11,940 Save: $1,044
                </h2>
                <br />
                <h3 className="text-TextPrimary text-sm">Includes:</h3>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-ButtonLight font-bold">
                  <li>24/7 Appointment Scheduling</li>
                  <li>Chat Support Available</li>
                  <li>Multi-Channel Communication</li>
                  <li>Reporting and Analytics</li>
                  <li>Priority Support Services</li>
                  <li>Automated SMS Reminders</li>
                  <li>Enhanced Voice Automation</li>
                  <li>Customizable Features</li>
                  <li>Dedicated Account Manager</li>
                  <li>Advanced Integrations</li>
                </ul>
                <br />
                <Button Text={"Get Started"} />
              </div>
            </div>

          </div>
          <div ref={bookingRef} className='Booking mt-5 blocK xl:pl-22 xl:pr-22'>
            <div className='PatientJour02Header m:w-1/2 h-max '>
              <ScrambleText
              text="Your Competitors Are Already Using AI" 
              className="bg-gradient-to-r from-TEXTgradient-left to-TEXTgradient-right bg-clip-text text-transparent  text-3xl font-bold text-left w-full s:text-4xl"
              />
              <h2 className='text-TextSecondary text-sm text-left font-semibold w-full mb-5'>Every day without OmniDent.ai means lost patients and revenue. Transform your practice today.</h2>
              <Button Text={"Request Demo"} onClick={scrollToBooking}/>
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
