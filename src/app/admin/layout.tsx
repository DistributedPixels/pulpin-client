'use client';

import { ROUTES } from '@/router/routes.const';
import { Navbar, NavbarContent, NavbarItem, Link } from '@heroui/react';
import layout from './layout.module.scss';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const linksClassName = (linkRoute: string) =>
    pathname === linkRoute
      ? [layout['admin-layout__navbar-link'], layout['admin-layout__navbar-link--active']].join(' ')
      : layout['admin-layout__navbar-link'];

  return (
    <div className={layout['admin-layout']}>
      <Navbar isBordered isBlurred={false} className={layout['admin-layout__navbar']}>
        <NavbarContent justify="end" className={layout['admin-layout__navbar-content']}>
          <NavbarItem>
            <Link className={linksClassName(ROUTES.ORGANIZERS)} href={ROUTES.ORGANIZERS}>
              Organizers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className={linksClassName(ROUTES.EVENTS)} href={ROUTES.EVENTS}>
              Events
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className={layout['admin-layout__content']}>{children}</main>
    </div>
  );
}
