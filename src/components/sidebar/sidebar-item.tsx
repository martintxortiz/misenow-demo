'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { SidebarItemData } from './sidebar-items';
export const row = (active?: boolean) =>
  'flex items-center gap-3.5 p-1.5 px-2.5 [corner-shape:squircle] rounded-4xl cursor-pointer border border-transparent select-none text-[var(--misenow-ink)] ' +
  (active
    ? 'bg-[var(--misenow-row-bg-active)] border-[var(--misenow-row-border)] opacity-[var(--misenow-opacity-active)] text-[var(--misenow-ink-strong)] shadow-[inset_0_1px_0_var(--misenow-highlight),0_1px_2px_var(--misenow-row-shadow-soft)]'
    : 'opacity-[var(--misenow-opacity-idle)] hover:border-[var(--misenow-row-border)] hover:bg-[var(--misenow-row-bg-hover)] hover:opacity-[var(--misenow-opacity-active)] hover:text-[var(--misenow-ink-strong)] hover:shadow-[inset_0_1px_0_var(--misenow-highlight),0_1px_2px_var(--misenow-row-shadow-soft)]');
const isActiveHref = (href: string, pathname: string) => pathname === href || pathname.startsWith(href + '/');
export function SidebarItem({ item, pathname }: { item: SidebarItemData; pathname: string }) {
  const Icon = item.icon;
  const hasSublinks = Boolean(item.sublinks?.length);
  const sectionActive = hasSublinks ? isActiveHref(item.href, pathname) || (item.sublinks ?? []).some((sub) => isActiveHref(sub.href, pathname)) : pathname === item.href;
  const [open, setOpen] = useState(sectionActive);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the open state follows the route since parent rows navigate instead of toggling
    setOpen(sectionActive);
  }, [sectionActive]);
  if (hasSublinks) {
    return (
      <div className='flex flex-col'>
        <Link href={(item.sublinks ?? [])[0]?.href ?? item.href} className={row(sectionActive) + ' w-full'}>
          <Icon size={16} />
          <span className='text-[15px] font-medium'>{item.label}</span>
        </Link>
        {open ? (
          <div className='border-l border-[var(--misenow-rail)] ml-4.5 pl-5.5 my-0.5'>
            {(item.sublinks ?? []).map((sub) => {
              const subActive = pathname === sub.href;
              return (
                <Link key={sub.id} href={sub.href} className={'block text-[14px] font-medium py-1.5 opacity-[var(--misenow-opacity-idle)] hover:opacity-[var(--misenow-opacity-active)]' + (subActive ? ' text-[var(--misenow-ink-strong)] opacity-[var(--misenow-opacity-active)]' : ' text-[var(--misenow-ink)]')}>
                  {sub.label}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
  return (
    <Link href={item.href} className={row(sectionActive)}>
      <Icon size={16} />
      <span className='text-[15px] font-medium'>{item.label}</span>
    </Link>
  );
}

