
import Main from "@/components/ui/Main";


export default function Home() {
  return (
    <div className=" bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}>
      <Main/>
    </div>
  );
}