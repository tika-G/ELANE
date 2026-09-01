"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <AuthNotice>
        El acceso con cuenta se activará cuando el estudio conecte
        autenticación. Mientras tanto, puedes reservar como invitada y consultar
        tus citas en este dispositivo.
      </AuthNotice>
    );
  }

  return (
    <form className="mt-12 space-y-8" onSubmit={onSubmit}>
      <div className="space-y-3">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="space-y-3">
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
      </div>
      <Button type="submit">Continuar</Button>
      <p className="text-sm text-muted">
        ¿Aún no tienes cuenta?{" "}
        <Link href="/registro" className="text-ivory hover:text-gold">
          Crear cuenta
        </Link>
      </p>
    </form>
  );
}

export function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <AuthNotice>
        La cuenta no se crea todavía: falta conectar el acceso. Tus datos no se
        envían a ningún servidor. Puedes seguir explorando el estudio y reservar
        una cita.
      </AuthNotice>
    );
  }

  return (
    <form className="mt-12 space-y-8" onSubmit={onSubmit}>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <Label htmlFor="nombre">Nombre</Label>
          <Input id="nombre" name="nombre" autoComplete="given-name" required />
        </div>
        <div className="space-y-3">
          <Label htmlFor="apellidos">Apellidos</Label>
          <Input
            id="apellidos"
            name="apellidos"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div className="space-y-3">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="space-y-3">
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
        />
      </div>
      <Button type="submit">Continuar</Button>
      <p className="text-sm text-muted">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="text-ivory hover:text-gold">
          Entrar
        </Link>
      </p>
    </form>
  );
}

function AuthNotice({ children }: { children: ReactNode }) {
  return (
    <div className="mt-12 max-w-md">
      <p className="text-sm leading-7 text-ivory-soft">{children}</p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button asChild>
          <Link href="/reservar">Reservar cita</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/mis-citas">Mis citas</Link>
        </Button>
      </div>
    </div>
  );
}
