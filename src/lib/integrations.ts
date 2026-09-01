export type PersistenceMode = "local" | "supabase";

export const integrations = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    isConfigured: Boolean(
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    ),
  },
  persistence: {
    favorites: "local" as PersistenceMode,
    bookings: "local" as PersistenceMode,
    catalog: "mock" as "mock" | "supabase",
    auth: "prepared" as "prepared" | "supabase",
  },
} as const;

export function isSupabaseReady() {
  return integrations.supabase.isConfigured;
}
