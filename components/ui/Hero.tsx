import Image from "next/image";
import planet from '@/public/images/HeroPlanet.png'

export default function Hero(){
    return(
        <section className=" px-[1rem] sm:px-[1.5rem] lg:px-[2rem] xl:px-[7rem] text-white">
               <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center animate-rotate-planet">
          <Image
            src={planet}
            alt="Animated Planet"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full animate-rotate-planet opacity-40"
          />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.9) 100%)' }}></div>
      </div>
      
      <div className="relative z-10 space-y-8 mt-20 md:mt-0">
        <p className="text-xl md:text-2xl font-montserrat animate-fade-in-up delay-100">
          SACRED HEART COLLEGE PRESENTS
        </p>
        <h1 className="text-6xl md:text-9xl font-extrabold font-montserrat animate-fade-in-up delay-300">
          ASTRA
        </h1>
        <p className="text-lg md:text-xl font-montserrat animate-fade-in-up delay-500">
          Where Innovation Meets Excellence. Join Us For the Ultimate Tech Festival
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-center mt-10">
          
        </div>
      </div> 
        </section>
    )
}