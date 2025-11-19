import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
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
              href="/menu"
              className="font-plafair flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              Menu
            </Link>

            <Link
              href="/contact"
              className="font-plafair flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              Contact
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
