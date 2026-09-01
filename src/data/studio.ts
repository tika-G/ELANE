import type { StudioClient, AgendaEntry, DashboardMetric } from "@/lib/types";

export const studioName = "ÉLANE";
export const studioCity = "Barcelona";
export const studioNeighborhood = "Eixample";
export const studioAddressLine = "Carrer de Provença, Eixample, Barcelona";
export const studioEmail = "estudio@elane.barcelona";
export const studioInstagram = "@elane.estudio";
export const studioHours = "De martes a sábado, 10:00–19:00";

export const dashboardGreetingName = "Anna";

export const dashboardMetrics: DashboardMetric[] = [
  { id: "today", label: "Citas de hoy", value: "6" },
  { id: "pending", label: "Reservas pendientes", value: "4" },
  { id: "clients", label: "Nuevas clientas", value: "3" },
  { id: "revenue", label: "Ingresos del mes", value: "4.280 €" },
];

export const demoClients: StudioClient[] = [
  {
    id: "c1",
    name: "Clara Puig",
    email: "clara.puig@correo.es",
    lastAppointment: "2026-08-28",
    totalAppointments: 8,
    status: "activa",
  },
  {
    id: "c2",
    name: "Núria Bosch",
    email: "nuria.bosch@correo.es",
    lastAppointment: "2026-08-21",
    totalAppointments: 3,
    status: "activa",
  },
  {
    id: "c3",
    name: "Irene Soler",
    email: "irene.soler@correo.es",
    lastAppointment: "2026-09-01",
    totalAppointments: 1,
    status: "nueva",
  },
  {
    id: "c4",
    name: "Laia Font",
    email: "laia.font@correo.es",
    lastAppointment: "2026-06-12",
    totalAppointments: 5,
    status: "inactiva",
  },
  {
    id: "c5",
    name: "Mireia Costa",
    email: "mireia.costa@correo.es",
    lastAppointment: "2026-08-30",
    totalAppointments: 12,
    status: "activa",
  },
];

export const demoAgenda: AgendaEntry[] = [
  {
    id: "a1",
    date: "2026-09-01",
    time: "10:00",
    professionalId: "anna-serra",
    clientName: "Clara Puig",
    treatmentName: "Ritual Facial ÉLANE",
    status: "confirmada",
  },
  {
    id: "a2",
    date: "2026-09-01",
    time: "11:30",
    professionalId: "marta-vidal",
    clientName: "Núria Bosch",
    treatmentName: "Masaje Relajante",
    status: "confirmada",
  },
  {
    id: "a3",
    date: "2026-09-01",
    time: "13:00",
    professionalId: "elena-roca",
    clientName: "Irene Soler",
    treatmentName: "Limpieza Profunda",
    status: "pendiente",
  },
  {
    id: "a4",
    date: "2026-09-01",
    time: "16:30",
    professionalId: "lucia-ferrer",
    clientName: "Mireia Costa",
    treatmentName: "Ritual de Calma",
    status: "confirmada",
  },
  {
    id: "a5",
    date: "2026-09-01",
    time: "18:00",
    professionalId: "anna-serra",
    clientName: "Laia Font",
    treatmentName: "Hidratación Intensa",
    status: "pendiente",
  },
  {
    id: "a6",
    date: "2026-09-02",
    time: "10:00",
    professionalId: "marta-vidal",
    clientName: "Clara Puig",
    treatmentName: "Ritual Corporal",
    status: "confirmada",
  },
  {
    id: "a7",
    date: "2026-09-02",
    time: "13:00",
    professionalId: "elena-roca",
    clientName: "Núria Bosch",
    treatmentName: "Contorno de Ojos",
    status: "completada",
  },
  {
    id: "a8",
    date: "2026-09-03",
    time: "11:30",
    professionalId: "lucia-ferrer",
    clientName: "Mireia Costa",
    treatmentName: "Masaje Relajante",
    status: "cancelada",
  },
];
