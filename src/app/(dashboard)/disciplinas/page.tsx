"use client";

import FormDisciplina from "./components/FormDisciplina";
import ListaDisciplinas from "./components/ListaDisciplinas";
import { useDisciplinas } from "@/src/app/context/DisciplinasContext";

export default function Page() {
  const { disciplinas, remove, update } = useDisciplinas();

  function renomear(id: string) {
    const novoNome = prompt("Novo nome:");
    if (!novoNome) return;

    update(id, novoNome);
  }

  return (
    <div className="space-y-6">
      <FormDisciplina />

      <ListaDisciplinas
        lista={disciplinas}
        onDelete={remove}
        onRename={renomear}
      />
    </div>
  );
}