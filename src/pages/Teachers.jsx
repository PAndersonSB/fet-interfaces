import SimpleList from "../components/SimpleList";

export default function Teachers({ state }) {
  return (
    <SimpleList
      label="Professores"
      items={state.teachers}
      setItems={state.setTeachers}
    />
  );
}