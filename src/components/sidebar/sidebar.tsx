'use client';
import { usePathname } from 'next/navigation';
import { Enterprise, SidePanelCloseFilled, Upgrade } from '@carbon/icons-react';
import { Command, Search } from 'lucide-react';
import { SidebarItem, row } from './sidebar-item';
import { sidebarItems, type SidebarItemData } from './sidebar-items';
export function Sidebar({ items = sidebarItems }: { items?: SidebarItemData[] }) {
  const pathname = usePathname();
  return (
    <aside className='h-full w-55 flex flex-col justify-between shrink-0 bg-misenow-sidebar-bg'>
      <div className='flex flex-col'>
        <div className='px-3 pt-1.5'>
          <span className='font-brand text-misenow-ink-strong opacity-[var(--misenow-opacity-idle)] text-[24px] leading-tight tracking-tight lowercase'>misenow</span>
        </div>
        <nav className='pt-5 px-3 gap-0.5 flex flex-col'>
          <button type='button' aria-label='Búsqueda' className='flex items-center gap-3.5 p-1.5 px-2.5 [corner-shape:squircle] rounded-4xl cursor-pointer border border-black/[0.02] bg-white/20 opacity-80 shadow-[inset_0_1px_0_rgb(255_255_255/0.5),0_1px_2px_rgb(0_0_0/0.04)] hover:bg-white/30 hover:border-black/[0.03] hover:opacity-100 hover:text-black hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.6),0_1px_2px_rgb(0_0_0/0.05)] mb-2 w-full'>
            <Search size={16} className='shrink-0' />
            <span className='text-[15px] font-medium'>Búsqueda</span>
            <kbd className='ml-auto inline-flex items-center gap-1 text-[11px] font-medium opacity-50 border border-black/10 bg-black/10 rounded-md px-1.5 py-0.5 leading-none'><Command size={11} className='shrink-0' />K</kbd>
          </button>
          {items.map((item) => (
            <SidebarItem key={item.id} item={item} pathname={pathname} />
          ))}
        </nav>
      </div>
      <div className='px-3 pb-3 flex flex-col gap-0.5'>
        <button type='button' className='flex items-center gap-3.5 p-1.5 mb-1 px-2.5 [corner-shape:squircle] rounded-4xl cursor-pointer w-full bg-misenow-blue text-white border border-white/[0.08] border-b-black/10 shadow-[inset_0_1px_0_var(--misenow-highlight),0_1px_2px_rgb(0_0_0/0.1)]'>
          <Upgrade size={16} />
          <span className='text-[15px] font-medium'>Upgrade</span>
        </button>
        <button type='button' className={row(false) + ' w-full'}>
          <Enterprise size={16} />
          <span className='text-[15px] font-medium'>Restaurant</span>
        </button>
        <button type='button' className={row(false) + ' w-full'}>
          <SidePanelCloseFilled size={16} />
          <span className='text-[15px] font-medium'>Collapse</span>
        </button>
      </div>
    </aside>
  );
}

