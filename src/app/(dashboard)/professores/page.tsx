"use client";

import FormProfessor from "./components/FormProfessor";
import { useProfessores } from "@/src/app/context/ProfessoresContext";

export default function Page() {
  const { professores, remove } = useProfessores();

  return (
    <div className="space-y-6">
      <FormProfessor />

      <ul className="space-y-2">
        {professores.map(p => (
          <li key={p.id} className="border p-3 flex justify-between">
            <span>{p.nome}</span>
            <button onClick={() => remove(p.id)} className="text-red-600">
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}