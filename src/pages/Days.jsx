"use client";

import SimpleList from "../components/SimpleList";

export default function Days({ state }) {
  return (
    <SimpleList
      label="Dias da Semana"
      items={state.days}
      setItems={state.setDays}
    />
  );
}