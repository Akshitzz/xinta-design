
import HeroSection from "./components/HeroSection";
import Container from "./components/container";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center h-screen relative 
    [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.98%,#FFF_100%)]
      ">
        <Container>
        <Navbar />
          <HeroSection />
        </Container>
      </div>
    </div>
  );
}
