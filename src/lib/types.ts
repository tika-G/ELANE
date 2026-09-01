export type TreatmentCategory = "facial" | "corporal" | "masaje" | "bienestar";

export type BookingStatus =
  | "pendiente"
  | "confirmada"
  | "completada"
  | "cancelada";

export type ProfessionalStatus = "disponible" | "ausente";

export type ClientStatus = "activa" | "nueva" | "inactiva";

export type AppointmentStatus = BookingStatus;

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
  fallbackSrc?: string;
  frame?: ImageFrame;
  grade?: ImageGrade;
}

export type ImageFrame = "cinematic" | "portrait" | "landscape" | "square";
export type ImageGrade = "none" | "subtle";

export interface Treatment {
  id: string;
  slug: string;
  name: string;
  category: TreatmentCategory;
  durationMinutes: number;
  price: number;
  shortDescription: string;
  description: string;
  benefits: string[];
  whatToExpect: string[];
  recommendedFrequency: string;
  image: ImageAsset;
  featured?: boolean;
  active: boolean;
}

export interface Professional {
  id: string;
  slug: string;
  name: string;
  firstName: string;
  specialty: string;
  specialties: string[];
  bio: string;
  about: string;
  yearsOfExperience: number;
  treatmentIds: string[];
  portrait: ImageAsset;
  availability: string;
  status: ProfessionalStatus;
  featured?: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  date: string;
  image: ImageAsset;
}

export interface GuestDetails {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  notas?: string;
}

export interface Booking {
  id: string;
  treatmentId: string;
  professionalId: string;
  date: string;
  time: string;
  location: string;
  status: BookingStatus;
  guest: GuestDetails;
  createdAt: string;
}

export interface StudioClient {
  id: string;
  name: string;
  email: string;
  lastAppointment: string;
  totalAppointments: number;
  status: ClientStatus;
}

export interface FavoritesState {
  treatments: string[];
  professionals: string[];
}

export interface DashboardMetric {
  id: string;
  label: string;
  value: string;
}

export interface AgendaEntry {
  id: string;
  date: string;
  time: string;
  professionalId: string;
  bookingId?: string;
  clientName: string;
  treatmentName: string;
  status: BookingStatus;
}

export type DurationFilter = "todas" | "60" | "75" | "90";
export type PriceFilter = "todos" | "hasta100" | "100a140" | "mas140";

/**
 * Shape prepared for a later Supabase `Database` generic.
 * Tables are not queried yet; this keeps UI types aligned with the planned schema.
 */
export interface Database {
  public: {
    Tables: {
      treatments: {
        Row: Treatment;
        Insert: Omit<Treatment, "id">;
        Update: Partial<Treatment>;
      };
      professionals: {
        Row: Professional;
        Insert: Omit<Professional, "id">;
        Update: Partial<Professional>;
      };
      bookings: {
        Row: Booking;
        Insert: Omit<Booking, "id" | "createdAt">;
        Update: Partial<Booking>;
      };
      articles: {
        Row: Article;
        Insert: Omit<Article, "id">;
        Update: Partial<Article>;
      };
      clients: {
        Row: StudioClient;
        Insert: Omit<StudioClient, "id">;
        Update: Partial<StudioClient>;
      };
    };
  };
}
