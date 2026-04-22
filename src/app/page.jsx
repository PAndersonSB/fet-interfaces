"use client";

import { useState } from "react";
import { useAppState } from "../store/useStore";

import Teachers from "../pages/Teachers";
import Subjects from "../pages/Disciplinas";
import Activities from "../pages/Activities";

export default function Page() {
  const state = useAppState();
  const [page, setPage] = useState("teachers");

  return (
    <div style={{ padding: 20 }}>
      <h1>FET Editor</h1>

      {/* Menu */}
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setPage("teachers")}>Professores</button>
        <button onClick={() => setPage("subjects")}>Disciplinas</button>
        <button onClick={() => setPage("activities")}>Atividades</button>
      </div>

      {/* Telas */}
      {page === "teachers" && <Teachers state={state} />}
      {page === "subjects" && <Subjects state={state} />}
      {page === "activities" && <Activities state={state} />}
    </div>
  );
}