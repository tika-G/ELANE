export const siteNav = [
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/profesionales", label: "Profesionales" },
  { href: "/estudio", label: "El estudio" },
  { href: "/journal", label: "Journal" },
] as const;

export const bookingHref = "/reservar";

export const dashboardNav = [
  { href: "/dashboard", label: "Resumen" },
  { href: "/dashboard/agenda", label: "Agenda" },
  { href: "/dashboard/reservas", label: "Reservas" },
  { href: "/dashboard/clientes", label: "Clientes" },
  { href: "/dashboard/tratamientos", label: "Tratamientos" },
  { href: "/dashboard/profesionales", label: "Profesionales" },
  { href: "/dashboard/configuracion", label: "Configuración" },
] as const;

export const statusLabels = {
  pendiente: "Pendiente",
  confirmada: "Confirmada",
  completada: "Completada",
  cancelada: "Cancelada",
  activa: "Activa",
  nueva: "Nueva",
  inactiva: "Inactiva",
  disponible: "Disponible",
  ausente: "Ausente",
} as const;
