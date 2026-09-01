"use client";

import { useState } from "react";
import { getAllTreatments } from "@/lib/catalog";
import { categoryLabels } from "@/data/treatments";
import { formatDuration, formatPrice } from "@/lib/format";
import type { Treatment } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TreatmentsAdminPage() {
  const [items, setItems] = useState<Treatment[]>(getAllTreatments());
  const [editingId, setEditingId] = useState<string | null>(null);

  const editing = items.find((item) => item.id === editingId);

  function save(updated: Treatment) {
    setItems((current) =>
      current.map((item) => (item.id === updated.id ? updated : item)),
    );
    setEditingId(null);
  }

  return (
    <main className="px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
      <p className="eyebrow">Catálogo</p>
      <h1 className="display mt-4 text-5xl">Tratamientos</h1>
      <p className="mt-4 max-w-xl text-sm text-muted">
        Edición de demostración. Los cambios viven en esta sesión y no se
        publican.
      </p>
      <ul className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {items.map((item) => (
          <li key={item.id} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="display text-2xl">{item.name}</p>
              <p className="mt-1 text-[11px] tracking-[0.18em] uppercase text-muted">
                {categoryLabels[item.category]} · {formatDuration(item.durationMinutes)} · {formatPrice(item.price)} · {item.active ? "Activo" : "Inactivo"}
              </p>
            </div>
            <button
              type="button"
              className="self-start text-[11px] tracking-[0.22em] uppercase text-gold"
              onClick={() => setEditingId(item.id)}
            >
              Editar
            </button>
          </li>
        ))}
      </ul>
      {editing ? (
        <TreatmentEditor
          treatment={editing}
          onCancel={() => setEditingId(null)}
          onSave={save}
        />
      ) : null}
    </main>
  );
}

function TreatmentEditor({
  treatment,
  onSave,
  onCancel,
}: {
  treatment: Treatment;
  onSave: (treatment: Treatment) => void;
  onCancel: () => void;
}) {
  const [draft, setDraft] = useState(treatment);

  return (
    <form
      className="mt-12 max-w-xl space-y-8"
      onSubmit={(event) => {
        event.preventDefault();
        onSave(draft);
      }}
    >
      <h2 className="display text-3xl">Editar</h2>
      <div className="space-y-3">
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          value={draft.name}
          onChange={(event) => setDraft({ ...draft, name: event.target.value })}
        />
      </div>
      <div className="space-y-3">
        <Label htmlFor="category">Categoría</Label>
        <select
          id="category"
          className="h-12 w-full border-b border-[var(--line)] bg-transparent text-sm"
          value={draft.category}
          onChange={(event) =>
            setDraft({
              ...draft,
              category: event.target.value as Treatment["category"],
            })
          }
        >
          {Object.entries(categoryLabels).map(([value, label]) => (
            <option key={value} value={value} className="bg-ink">
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <Label htmlFor="duration">Duración (min)</Label>
          <Input
            id="duration"
            type="number"
            min={15}
            value={draft.durationMinutes}
            onChange={(event) =>
              setDraft({
                ...draft,
                durationMinutes: Number(event.target.value),
              })
            }
          />
        </div>
        <div className="space-y-3">
          <Label htmlFor="price">Precio (€)</Label>
          <Input
            id="price"
            type="number"
            min={0}
            value={draft.price}
            onChange={(event) =>
              setDraft({ ...draft, price: Number(event.target.value) })
            }
          />
        </div>
      </div>
      <div className="space-y-3">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          value={draft.description}
          onChange={(event) =>
            setDraft({ ...draft, description: event.target.value })
          }
        />
      </div>
      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={draft.active}
          onChange={(event) =>
            setDraft({ ...draft, active: event.target.checked })
          }
        />
        Activo
      </label>
      <div className="flex gap-4">
        <Button type="submit">Guardar</Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </form>
  );
}
