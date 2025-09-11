import Image from "next/image";
import planet from '@/public/images/HeroPlanet.png'
import logo from '@/public/images/AstraLogo.png'
import Button from "../elements/Button";
import linkIcon from '@/public/images/ExternalLink.png';
import arrowDownIcon from '@/public/images/DoubleDown.png';


export default function Hero(){
    return(
    <section className="flex items-center justify-center h-screen px-[1rem] sm:px-[1.5rem] lg:px-[2rem] xl:px-[7rem] text-white text-center" id="home">
      <div className="absolute inset-0 z-0">
       <div className="overflow-hidden absolute inset-0 bg-cover bg-center z-[80] animate-planet-entrance">
  <Image
    src={planet}
    alt="Animated Planet"
    className="top-0 -mt-35 md:-mt-155 left-0 animate-planet-rotate w-100 h-95 md:w-230 md:h-230 mx-auto"
  />
</div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.9) 100%)' }}></div>
      </div>
      
      <div className="relative z-10 space-y-3 ">
        <p className="text-md md:text-2xl font-montserrat animate-fade-in-up delay-100 tracking-wider sm:tracking-widest md:tracking-[20px]">
          SACRED HEART COLLEGE PRESENTS
        </p>
        <Image src={logo} alt="Astra Logo" className="w-3/4 md:w-1/2 mx-auto animate-fade-in-up delay-300"/>
        <p className="text-sm md:text-xl font-montserrat animate-fade-in-up delay-500 tracking-widest">
          Where Innovation Meets Excellence. Join Us For the Ultimate Tech Festival
        </p>
        <div className="flex md:flex-row justify-evenly space-x-2 sm:space-x-5 sm:justify-center mt-10">
          <Button href="#register" className="animate-fade-in-up delay-100 bg-gradient-to-r from-[#6D5FB2] to-[#322A58] hover:from-[#907ee8] hover:to-[#534791] text-[#fff]">
            Register Now <Image src={linkIcon} alt="external linking" width={16} height={16} />
          </Button>
          <Button href="#events" className="animate-fade-in-up delay-100  bg-transparent hover:bg-[#9C87FF] text-[#9C87FF] hover:text-[#fff] border border-[#9C87FF]">
            View Events <Image src={arrowDownIcon} alt="Scroll down icon " width={16} height={16} className="animate-scroll-down" />
          </Button>
        </div>
      </div> 
        </section>
    )
}