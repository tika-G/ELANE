import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/lib/types";
import { isSupabaseReady } from "@/lib/integrations";

export function createClient() {
  if (!isSupabaseReady()) {
    return null;
  }

  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
