import type { ReactNode } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-svh bg-ink lg:grid lg:grid-cols-[16rem_1fr]">
      <DashboardSidebar />
      <div className="min-w-0">
        <p className="border-b border-[var(--line)] px-5 py-3 text-[10px] tracking-[0.24em] uppercase text-muted lg:px-10">
          Entorno de demostración del estudio
        </p>
        {children}
      </div>
    </div>
  );
}
