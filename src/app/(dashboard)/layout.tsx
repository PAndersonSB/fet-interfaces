"use client";

import Link from "next/link";
import { InstituicaoProvider, useInstituicao } from "@/src/app/context/InstituicaoContext";

import { DisciplinasProvider, useDisciplinas } from "@/src/app/context/DisciplinasContext";

import { ProfessoresProvider, useProfessores } from "@/src/app/context/ProfessoresContext";

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { instituicao, setInstituicao } = useInstituicao();

  function editarNome() {
    const novoNome = prompt("Nome da instituição:", instituicao.nome);
    if (novoNome) {
      setInstituicao({ ...instituicao, nome: novoNome });
    }
  }

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h2 
          onClick={editarNome}
          className="text-lg font-bold mb-6 cursor-pointer hover:underline"
        >
          {instituicao.nome}
        </h2>

        <nav className="flex flex-col gap-2">
          <Link href="/instituicao">Instituição</Link>
          <Link href="/turmas">Turmas</Link>
          <Link href="/professores">Professores</Link>
          <Link href="/disciplinas">Disciplinas</Link>
          <Link href="/horarios">Gerar Horário</Link>
        </nav>
      </aside>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className="h-14 bg-gray-100 flex items-center justify-between px-6 border-b">
          <span className="font-semibold">
            {instituicao.nome}
          </span>

          <span className="text-sm text-gray-500">
            Ano Letivo 2026
          </span>
        </header>

        <main className="p-6 overflow-auto">
          {children}
        </main>

      </div>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <InstituicaoProvider>
      <DisciplinasProvider>
      <ProfessoresProvider>
      <DashboardContent>{children}</DashboardContent>
      </ProfessoresProvider>
      </DisciplinasProvider>
    </InstituicaoProvider>
  );
}