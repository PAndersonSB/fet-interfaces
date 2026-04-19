"use client";

import { Disciplina } from "@/src/model/Disciplina";

type Props = {
  lista: Disciplina[];
  onDelete: (id: string) => void;
  onRename: (id: string) => void;
};

export default function ListaDisciplinas({ lista, onDelete, onRename }: Props) {
  return (
    <ul className="space-y-2 mt-4">
      {lista.map((d) => (
        <li key={d.id} className="border p-3 flex justify-between items-center">
          <div>
            <strong>{d.nome}</strong> ({d.codigo})
          </div>

          <div className="flex gap-2">
            <button onClick={() => onRename(d.id)} className="text-blue-600">
              Renomear
            </button>

            <button onClick={() => onDelete(d.id)} className="text-red-600">
              Deletar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}