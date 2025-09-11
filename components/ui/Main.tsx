import About from "./About";
import Hero from "./Hero";

export default function Main(){
    return(
        <main className="container mx-auto  max-w-full space-y-0">
            <Hero/>
            <About/>
        </main>
    )
}