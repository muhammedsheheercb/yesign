import Navbar from '@/components/Navbar';
import { ServicesSection } from './section/Services';
import Hero from './section/Hero';
import { Footer } from '@/components/Footer';

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000]">
        <Navbar position="absolute" />
        <Hero />
        <ServicesSection />
        <Footer />
      </div>
    </main>
  );
};

export default page;
