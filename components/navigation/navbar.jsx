import { Heart } from 'lucide-react';
import NavigationRoutes from './navbar-routes';
import Link from 'next/link';
import MobileSidebar from './mobile-sidebar';

const Navbar = () => {
  return (
    <div className=" bg-slate-800 text-white px-5 jp-navbar flex justify-between items-center h-16 sticky top-0 z-20">
      <div className="py-4 pl-5 text-pink-600">
        <Link href="/">
          <Heart size={40} />
        </Link>
      </div>
      <MobileSidebar />
      <div className="hidden md:flex flex-1 justify-end">
        <NavigationRoutes />
      </div>
    </div>
  );
};
export default Navbar;
