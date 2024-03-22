import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import NavigationRoutes from './navbar-routes';
import { Menu } from 'lucide-react';

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <div className="jp-menu-mobile">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 bg-white">
        <div className="block md:hidden">
          <NavigationRoutes mobileView />
        </div>
      </SheetContent>
    </Sheet>
  );
}
export default MobileSidebar;
