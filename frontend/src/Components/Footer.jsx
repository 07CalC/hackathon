import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";


export const Footer = () => {


    return (
        <div className="w-full bg-textcol bottom-0 md:flex grid justify-between p-8 text-2xl text-blue bg-text">
        <div className="flex flex-col items-center w-full md:w-1/3 justify-center">
          <strong className="text-7xl text-[#ffffff] font-algerian text-accent">Mango</strong>
          
          <p className="text-2xl text-[#ffffff] mt-5">© 2024 Mango. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center mt-6 md:mt-0 w-full md:w-1/3 justify-center">
          <strong className="text-4xl font-algerian text-[#ffffff]">
            Contact Us
          </strong>
          <p className="text-xl text-[#ffffff] mt-5 ">Email: contact@mango.com</p>
          <p className="text-xl text-[#ffffff] mt-5 ">Mobile: +91 4206942069</p>
          
        </div>
        <div className="flex flex-col items-center mt-6 md:mt-0 w-full md:w-1/3 justify-center">
          <strong className="text-4xl text-[#ffffff] font-algerian text-accent">
            Connect with Us{" "}
          </strong>
          <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noreferrer" className="flex">
            <CiLinkedin className="text-4xl text-[#ffffff] mt-5 text-accent" />
            <p className="text-xl mt-5 text-[#ffffff] text-accent">Mango</p>
            </a>
          </div>
          <div className="flex space-x-4 ">
          <a href="#" target="_blank" rel="noreferrer" className="flex">
            <CiInstagram className="text-4xl mt-5 text-[#ffffff] text-accent" />
            <p className="text-xl mt-5 text-[#ffffff] text-accent">@MangoDotCom</p>
            </a>
          </div>
          <div className="flex space-x-4 ">
              <a href="#" target="_blank" rel="noreferrer" className="flex">
            <FaXTwitter className="text-3xl mt-5 text-[#ffffff] text-accent" />
            <p className="text-xl mt-5 text-[#ffffff] text-accent">@Mango_On_X</p>
            </a>
          </div>
        </div>
      </div>
    )
}