'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
<<<<<<< HEAD
=======
import { Instagram } from 'lucide-react';
>>>>>>> dbe9b69 (all section added)

const Navbar = ({
  position = 'static',
}: {
  position?: 'static' | 'fixed' | 'absolute';
}) => {
  useEffect(() => {
    const d = localStorage.getItem('positiond');
    if (d !== null) {
      setPositiond(d);
    }
  }, []);

  const [positiond, setPositiond] = useState<string>('');

  useEffect(() => {
    if (positiond) {
      localStorage.setItem('positiond', positiond);
    }
  }, [positiond]);

  const pathname = usePathname();

  return (
    <nav
      className={cn(
<<<<<<< HEAD
        `${position} top-0 z-50 h-[13vh] w-full bg-black/10 pt-4 backdrop-blur-3xl transition-all duration-300 md:h-[12vh] md:pt-5`
=======
        `${position} top-0 z-50 h-[9vh] w-full bg-black/30 pt-4 backdrop-blur-3xl transition-all duration-300 md:pt-5`,
        pathname === '/menu' && 'bg-menubackground pt-4'
>>>>>>> dbe9b69 (all section added)
        // isScrolled && "h-[15vh] bg-[#013827] backdrop-blur-sm md:h-[11vh]",
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 lg:block lg:px-20">
        <div className="flex flex-row items-center justify-between gap-16 px-8">
          <div>
            <Link href={'/'}>
              <Image
                src={'/images/logo.webp'}
                width={171}
                height={74}
                alt="logo"
<<<<<<< HEAD
                className="w-16"
=======
                className="w-32"
>>>>>>> dbe9b69 (all section added)
              />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-16">
            <Link
              href={'/'}
              className={`font-plafair text-base font-[500] tracking-[2px] capitalize hover:underline ${
                pathname === '/' ? 'text-white' : 'text-white'
              }`}
            >
              Home
            </Link>

            <Link
<<<<<<< HEAD
              href={'/menu'}
=======
              href={'/our-services'}
>>>>>>> dbe9b69 (all section added)
              className={`font-plafair text-base font-[500] tracking-[2px] capitalize hover:underline ${
                pathname === '/' ? 'text-white' : 'text-white'
              }`}
            >
<<<<<<< HEAD
              Menu
=======
              Our Services
            </Link>
            <Link
              href={'/gallery'}
              className={`font-plafair text-base font-[500] tracking-[2px] capitalize hover:underline ${
                pathname === '/' ? 'text-white' : 'text-white'
              }`}
            >
              Gallery
>>>>>>> dbe9b69 (all section added)
            </Link>
            <Link
              href={'/contact'}
              className={`font-plafair text-base font-[500] tracking-[2px] capitalize hover:underline ${
                pathname === '/' ? 'text-white' : 'text-white'
              }`}
            >
              Contact
            </Link>
<<<<<<< HEAD
=======
            <Link
              href="https://www.instagram.com/yesign0fficial/?igsh=dnd4ZGk1MDVjcHY2"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
>>>>>>> dbe9b69 (all section added)
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 lg:hidden lg:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={'/'}>
              <Image
                src={'/images/logo.webp'}
                width={281}
                height={74}
                alt="logo"
<<<<<<< HEAD
                className="w-16"
=======
                className="w-24"
>>>>>>> dbe9b69 (all section added)
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="text-primary hover:text-primary flex px-1 py-1 hover:bg-transparent"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{' '}
          </div>
        </div>
      </div>
      <div className="mt-4 w-full border-b-[1px] border-b-[#ffff]" />
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="equalizer-icon rotate">
      <div
        className={`bar ${pathname === '/' ? 'bg-white' : 'bg-white'}`}
      ></div>
      <div
        className={`bar ${pathname === '/' ? 'bg-white' : 'bg-white'}`}
      ></div>
      <div
        className={`bar ${pathname === '/' ? 'bg-white' : 'bg-white'}`}
      ></div>
    </div>
  );
};
