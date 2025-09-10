import Hero from "./Hero";

export default function Main(){
    return(
        <div className=" bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}>
            <Hero/>
        </div>
    )
}