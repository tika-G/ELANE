import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/AuthForms";

export const metadata: Metadata = {
  title: "Acceder",
  description: "Accede a tu cuenta de ÉLANE.",
};

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-lg px-5 py-16 sm:px-8 lg:py-24">
      <p className="eyebrow">Cuenta</p>
      <h1 className="display mt-4 text-6xl">Entrar</h1>
      <p className="mt-6 text-sm leading-7 text-muted">
        El acceso se preparará con el estudio. El formulario está listo; no
        inicia sesión todavía.
      </p>
      <LoginForm />
    </main>
  );
}
