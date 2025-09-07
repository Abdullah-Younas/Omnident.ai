import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CompLogo from "../assets/Logo.svg";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar Top */}
      <div className="Nav-bar m-2 fixed z-50 w-full p-2 flex justify-between items-center">
        <img src={CompLogo} alt="Logo" className="h-12 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden nm:flex flex-row items-center space-x-8 text-sm text-TextPrimary font-semibold">
          <li className="hover:text-ButtonLight cursor-pointer">Features</li>
          <li className="hover:text-ButtonLight cursor-pointer">Patient Journey</li>
          <li className="hover:text-ButtonLight cursor-pointer">Integrations</li>
          <li className="hover:text-ButtonLight cursor-pointer">Pricing</li>
          <li className="hover:text-ButtonLight cursor-pointer">SmileNexus</li>
          <li>
            <Button Text={"Book Demo"} />
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
          <li className="hover:text-ButtonLight cursor-pointer">Features</li>
          <li className="hover:text-ButtonLight cursor-pointer">Patient Journey</li>
          <li className="hover:text-ButtonLight cursor-pointer">Integrations</li>
          <li className="hover:text-ButtonLight cursor-pointer">Pricing</li>
          <li className="hover:text-ButtonLight cursor-pointer">SmileNexus</li>
          <li>
            <Button Text={"Book Demo"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
