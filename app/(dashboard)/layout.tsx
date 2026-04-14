import Link from "next/link";

export default function DashboardLayout({ children, }: {children: React.ReactNode;}) {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h2 className="text-lg font-bold mb-6">
          Minha Instituição
        </h2>

        <nav className="flex flex-col gap-2">
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
            Nome da Instituição
          </span>

          <span className="text-sm text-gray-500">
            Ano Letivo 2026
          </span>
        </header>

        {/* Página dinâmica */}
        <main className="p-6 overflow-auto">
          {children}
        </main>

      </div>
    </div>
  );
}