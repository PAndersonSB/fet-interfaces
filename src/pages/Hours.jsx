"use client";

import SimpleList from "../components/SimpleList";

export default function Hours({ state }) {
  return (
    <SimpleList
      label="Horários"
      items={state.hours}
      setItems={state.setHours}
    />
  );
}