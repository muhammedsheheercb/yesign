import Contact from '@/app/contact/section/Contact';
<<<<<<< HEAD
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
=======
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from './section/Hero';
>>>>>>> dbe9b69 (all section added)

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
<<<<<<< HEAD
        <div
          className="h-[14vh] w-full bg-black/30 backdrop-blur-3xl md:h-[12vh]"
          id="hero"
        ></div>
=======
        <Hero />
>>>>>>> dbe9b69 (all section added)
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default page;
