'use client';

import { cn } from '@/lib/utils';

import { usePathname, useRouter } from 'next/navigation';

function NavbarItem({ label, href }) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      className={cn(
        'flex capitalize items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-300',
        isActive && 'text-sky-700 hover:text-sky-700'
      )}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}
export default NavbarItem;
