import { Bot, Box, CalendarHeatMap, Events, Restaurant, Scales, Settings, ShoppingCart, UserMultiple } from '@carbon/icons-react';
import { House } from 'lucide-react';
import type { ComponentType } from 'react';
export type SidebarIcon = ComponentType<{ size?: number | string; className?: string }>;
export type SidebarSublink = { id: string; label: string; href: string };
export type SidebarItemData = { id: string; label: string; icon: SidebarIcon; href: string; sublinks?: SidebarSublink[] };
export const sidebarItems: SidebarItemData[] = [
  { id: 'hoy', label: 'Hoy', icon: House, href: '/dashboard' },
  { id: 'reservas', label: 'Reservas', icon: CalendarHeatMap, href: '/dashboard/reservas' },
  { id: 'pedidos', label: 'Pedidos', icon: ShoppingCart, href: '/dashboard/pedidos' },
  {
    id: 'clientes',
    label: 'Clientes',
    icon: UserMultiple,
    href: '/dashboard/clientes',
    sublinks: [
      { id: 'clientes', label: 'Resumen', href: '/dashboard/clientes' },
      { id: 'reputacion', label: 'Reputación', href: '/dashboard/clientes/reputacion' },
    ],
  },
  {
    id: 'operaciones',
    label: 'Operaciones',
    icon: Box,
    href: '/dashboard/operaciones',
    sublinks: [
      { id: 'recetas', label: 'Recetas', href: '/dashboard/operaciones/recetas' },
      { id: 'inventario', label: 'Inventario', href: '/dashboard/operaciones/inventario' },
      { id: 'compras', label: 'Compras', href: '/dashboard/operaciones/compras' },
      { id: 'proveedores', label: 'Proveedores', href: '/dashboard/operaciones/proveedores' },
      { id: 'mermas', label: 'Mermas', href: '/dashboard/operaciones/mermas' },
      { id: 'ordenes-trabajo', label: 'Órdenes de trabajo', href: '/dashboard/operaciones/ordenes-trabajo' },
      { id: 'listas-control', label: 'Listas de control', href: '/dashboard/operaciones/listas-control' },
      { id: 'appcc', label: 'APPCC', href: '/dashboard/operaciones/appcc' },
    ],
  },
  {
    id: 'equipo',
    label: 'Equipo',
    icon: Events,
    href: '/dashboard/equipo',
    sublinks: [
      { id: 'personal', label: 'Personal', href: '/dashboard/equipo/personal' },
      { id: 'turnos', label: 'Turnos', href: '/dashboard/equipo/turnos' },
      { id: 'nominas', label: 'Nóminas', href: '/dashboard/equipo/nominas' },
      { id: 'accesos', label: 'Accesos', href: '/dashboard/equipo/accesos' },
      { id: 'mi-portal', label: 'Mi portal', href: '/dashboard/equipo/mi-portal' },
    ],
  },
  {
    id: 'sala',
    label: 'Sala',
    icon: Restaurant,
    href: '/dashboard/sala',
    sublinks: [
      { id: 'tpv', label: 'TPV', href: '/dashboard/sala/tpv' },
      { id: 'cocina', label: 'Cocina', href: '/dashboard/sala/cocina' },
      { id: 'plano-sala', label: 'Plano de sala', href: '/dashboard/sala/plano-sala' },
      { id: 'studio', label: 'Studio', href: '/dashboard/sala/studio' },
    ],
  },
  {
    id: 'direccion',
    label: 'Dirección',
    icon: Scales,
    href: '/dashboard/direccion',
    sublinks: [
      { id: 'analiticas', label: 'Analíticas', href: '/dashboard/direccion/analiticas' },
      { id: 'finanzas', label: 'Finanzas', href: '/dashboard/direccion/finanzas' },
    ],
  },
  { id: 'automatizacion', label: 'Automatización', icon: Bot, href: '/dashboard/automatizacion' },
  {
    id: 'configuracion',
    label: 'Configuración',
    icon: Settings,
    href: '/dashboard/configuracion',
    sublinks: [
      { id: 'general', label: 'General', href: '/dashboard/configuracion' },
      { id: 'restaurante', label: 'Restaurante', href: '/dashboard/configuracion/restaurante' },
      { id: 'locales', label: 'Locales', href: '/dashboard/configuracion/locales' },
      { id: 'facturacion', label: 'Facturación', href: '/dashboard/configuracion/facturacion' },
      { id: 'sitio-web', label: 'Sitio web', href: '/dashboard/configuracion/sitio-web' },
    ],
  },
];
