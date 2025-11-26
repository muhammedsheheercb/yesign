import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
<<<<<<< HEAD
=======
import { Instagram } from 'lucide-react';
>>>>>>> dbe9b69 (all section added)
import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center justify-center pt-16 pb-8 md:pt-20">
              <Image
                src="/images/logo.webp"
                width={197}
                height={192}
                alt="Foodo"
                className="w-24"
              />
            </div>
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-center justify-center gap-7">
            <Link
              href="/"
              className="font-plafair flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              Home
            </Link>
            <Link
<<<<<<< HEAD
              href="/menu"
              className="font-plafair flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              Menu
=======
              href="/our-services"
              className="font-plafair flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              Our Services
            </Link>
            <Link
              href="/gallery"
              className="font-plafair flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              Gallery
>>>>>>> dbe9b69 (all section added)
            </Link>

            <Link
              href="/contact"
              className="font-plafair flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
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
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
