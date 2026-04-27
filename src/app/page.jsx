"use client";

import { useState } from "react";
import { useAppState } from "../store/useStore";

import Teachers from "../pages/Teachers";
import Subjects from "../pages/Disciplinas";
import Activities from "../pages/Activities";

import Institution from "../pages/Institution";
import Days from "../pages/Days";
import Hours from "../pages/Hours";

import { generateFetXML } from "../utils/fetExport";

export default function Page() {
  const state = useAppState();
  const [page, setPage] = useState("teachers");
  const handleExport = () => {
    const xml = generateFetXML(state);

    const blob = new Blob([xml], { type: "text/xml" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "timetable.fet";
    a.click();

    URL.revokeObjectURL(url);
  };
  
  return (
    <div style={{ padding: 20 }}>
      <input
        placeholder="Nome da instituição"
        value={state.institution?.name || ""}
        onChange={(e) =>
          state.setInstitution({
            ...state.institution,
            name: e.target.value
          })
        }
        style={{
          fontSize: 24,
          fontWeight: "bold",
          padding: 5,
          width: "100%"
        }}
      />
      <textarea
        placeholder="Comentários"
        value={state.institution?.comments || ""}
        onChange={(e) =>
          state.setInstitution({
            ...state.institution,
            comments: e.target.value
          })
        }
        style={{
          width: "100%",
          marginTop: 5
        }}
      />
      <button onClick={handleExport}>
      Exportar FET
      </button>

      {/* Menu */}
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setPage("days")}>Dias</button>
        <button onClick={() => setPage("hours")}>Horários</button>

        <button onClick={() => setPage("teachers")}>Professores</button>
        <button onClick={() => setPage("subjects")}>Disciplinas</button>
        <button onClick={() => setPage("activities")}>Atividades</button>
      </div>

      {/* Telas */}
      {page === "days" && <Days state={state} />}
      {page === "hours" && <Hours state={state} />}

      {page === "teachers" && <Teachers state={state} />}
      {page === "subjects" && <Subjects state={state} />}
      {page === "activities" && <Activities state={state} />}
    </div>
  );
}