'use client';

import Link from 'next/link';

function NavigationItems({ route, pathname }) {
  // Check if the route or any of its subMenu items is active
  const isParentActive = pathname === route.href || pathname.startsWith(`${route.href}/`);
  const isSubMenuActive = route.subMenu?.some(
    subItem => pathname === subItem.href || pathname.startsWith(`${subItem.href}/`)
  );

  return (
    <div className="hover:bg-slate-700 cursor-pointer relative group">
      <Link
        href={route.href}
        className={`p-5 block capitalize ${
          isParentActive || isSubMenuActive ? 'text-sky-700 hover:text-sky-700' : ''
        }`}
      >
        {route.label}
      </Link>
      {!!route.subMenu?.length && (
        <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-0">
          {route.subMenu.map(subItem => {
            const isSubItemActive =
              pathname === subItem.href || pathname.startsWith(`${subItem.href}/`);

            return (
              <Link
                className={`block whitespace-nowrap p-5 hover:bg-slate-700 ${
                  isSubItemActive ? 'text-sky-700' : ''
                }`}
                key={subItem.href}
                href={subItem.href}
              >
                {subItem.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default NavigationItems;
