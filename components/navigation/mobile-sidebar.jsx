import NavigationRoutes from './navbar-routes';

function MobileSidebar() {
  return (
    <div className="block md:hidden">
      <NavigationRoutes />
    </div>
  );
}
export default MobileSidebar;
