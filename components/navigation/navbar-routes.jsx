'use client';

import Link from 'next/link';
//import NavbarItem from './navbar-item';

import { cn } from '@/lib/utils';

import { usePathname } from 'next/navigation';
import NavigationItems from './navbar-item';

const routes = [
  {
    label: 'home',
    href: '/'
  },
  {
    label: 'about',
    href: '/about'
  },
  {
    label: 'services',
    href: 'services',
    subMenu: [
      {
        label: 'web design',
        href: '/web-design'
      },
      {
        label: 'web development',
        href: '/web-development'
      },
      {
        label: 'web hosting',
        href: '/web-hosting'
      }
    ]
  },
  {
    label: 'portfolio',
    href: '/portfolio'
  },
  {
    label: 'blog',
    href: '/blog'
  },
  {
    label: 'contact',
    href: '/contact'
  }
];

function NavigationRoutes() {
  const pathname = usePathname();

  return (
    <div className="flex flex-1 justify-end">
      {routes.map(route => (
        <NavigationItems key={route.href} route={route} pathname={pathname} />
      ))}
    </div>
  );
}

export default NavigationRoutes;
