"use client";

import { useState } from "react";
import { useProfessores } from "@/src/app/context/ProfessoresContext";
import { useDisciplinas } from "@/src/app/context/DisciplinasContext";

export default function FormProfessor() {
  const { add } = useProfessores();
  const { disciplinas } = useDisciplinas();

  const [nome, setNome] = useState("");
  const [nomeLongo, setNomeLongo] = useState("");
  const [codigo, setCodigo] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState(0);
  const [selecionadas, setSelecionadas] = useState<string[]>([]);

  function toggleDisciplina(id: string) {
    setSelecionadas(prev =>
      prev.includes(id)
        ? prev.filter(d => d !== id)
        : [...prev, id]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const novo = {
      id: crypto.randomUUID(),
      nome,
      nomeLongo,
      codigo,
      cargaHoraria,
      disciplinas: selecionadas,
    };

    add(novo);

    // limpar form
    setNome("");
    setNomeLongo("");
    setCodigo("");
    setCargaHoraria(0);
    setSelecionadas([]);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">

      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} className="border p-2 w-full" />
      <input placeholder="Nome longo" value={nomeLongo} onChange={e => setNomeLongo(e.target.value)} className="border p-2 w-full" />
      <input placeholder="Código" value={codigo} onChange={e => setCodigo(e.target.value)} className="border p-2 w-full" />

      <input
        type="number"
        placeholder="Carga horária"
        value={cargaHoraria}
        onChange={e => setCargaHoraria(Number(e.target.value))}
        className="border p-2 w-full"
      />

      <div>
        <p className="font-semibold">Disciplinas</p>

        {disciplinas.length === 0 && (
          <p className="text-sm text-gray-500">
            Nenhuma disciplina cadastrada
          </p>
        )}

        {disciplinas.map(d => (
          <label key={d.id} className="block">
            <input
              type="checkbox"
              checked={selecionadas.includes(d.id)}
              onChange={() => toggleDisciplina(d.id)}
            />
            {d.nome}
          </label>
        ))}
      </div>

      <button className="bg-green-600 text-white px-4 py-2">
        Adicionar Professor
      </button>
    </form>
  );
}