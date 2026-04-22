import SimpleList from "../components/SimpleList";

export default function Subjects({ state }) {
  return (
    <SimpleList
      label="Disciplinas"
      items={state.subjects}
      setItems={state.setSubjects}
    />
  );
}