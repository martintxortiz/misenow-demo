import React from 'react'
import { Sidebar } from '@/components/sidebar/sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-misenow-sidebar-bg text-misenow-ink">
      <Sidebar />
      <main className="min-w-0 flex-1 overflow-hidden rounded-l-[30px] border-l border-misenow-content-border bg-misenow-content-bg [corner-shape:squircle] flex-col">
        {children}
      </main>
    </div>
  )
}
