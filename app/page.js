import Image from "next/image";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mx-auto py-4 px-12 mt-24">
        <Herosection />
      </div>
    </main>
  );
}
