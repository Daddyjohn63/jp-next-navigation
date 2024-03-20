import NavigationRoutes from './navbar-routes';

function MobileSidebar() {
  return (
    <div className="block md:hidden">
      <NavigationRoutes mobileView />
    </div>
  );
}
export default MobileSidebar;
