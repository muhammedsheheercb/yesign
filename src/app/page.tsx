import Hero from './section/hero/Hero';
<<<<<<< HEAD
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SpicySquareMenu from './section/menu/SpicySquareMenu';
import ReviewsSection from './section/review/ReviewCarousal';
=======
import Navbar from '@/components/Navbar';
import Reviews from './section/review/Review';
import About from './section/about/About';
import { ServicesSection } from './section/service/Service';
import { Footer } from '@/components/Footer';
>>>>>>> dbe9b69 (all section added)

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
        <Navbar position="absolute" />
        <Hero />
<<<<<<< HEAD
        <SpicySquareMenu />
        <ReviewsSection />
=======
        <About />
        <ServicesSection />
        <Reviews />
>>>>>>> dbe9b69 (all section added)
        <Footer />
      </div>
      <div className="fixed right-2 bottom-6 z-50 flex md:right-[48px] md:bottom-[54px]"></div>
    </main>
  );
}
