import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-5 py-24">
        <p className="eyebrow">404</p>
        <h1 className="display mt-4 text-6xl">Esta página no existe.</h1>
        <p className="mt-6 text-sm leading-7 text-muted">
          Puede que el enlace haya cambiado. Vuelve al inicio o elige un
          tratamiento.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild>
            <Link href="/">Inicio</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tratamientos">Tratamientos</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
