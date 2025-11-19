import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MenuPage from './section/MenuPage';

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000]">
        <Navbar position="absolute" />
        <div className="h-[10vh] w-full" />
        <div className="h-full w-full">
          <MenuPage />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default page;
