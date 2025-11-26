import Navbar from '@/components/Navbar';

import { Footer } from '@/components/Footer';
import Gallery from './section/Gallery';
import Hero from './section/Hero';

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000]">
        <Navbar position="absolute" />
        <Hero />
        <Gallery />
        <Footer />
      </div>
    </main>
  );
};

export default page;
