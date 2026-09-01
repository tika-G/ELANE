import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/AuthForms";

export const metadata: Metadata = {
  title: "Registro",
  description: "Crea una cuenta en ÉLANE.",
};

export default function RegisterPage() {
  return (
    <main className="mx-auto max-w-lg px-5 py-16 sm:px-8 lg:py-24">
      <p className="eyebrow">Cuenta</p>
      <h1 className="display mt-4 text-6xl">Registro</h1>
      <p className="mt-6 text-sm leading-7 text-muted">
        Completa tus datos. La cuenta se activará cuando el estudio conecte el
        acceso.
      </p>
      <RegisterForm />
    </main>
  );
}
