export function generateFetXML(state) {
  const { institution, days, hours, subjects, teachers } = state;

  return `
<FET>
  <Institution_Name>${institution.name}</Institution_Name>
  <Comments>${institution.comments}</Comments>

  <Days_List>
    <Number_of_Days>${days.numeroDeDias}</Number_of_Days>
    ${days.dias
      .map((d) => `<Day><Name>${d.nome}</Name></Day>`)
      .join("")}
  </Days_List>

  <Hours_List>
    <Number_of_Hours>${hours.numeroDeHoras}</Number_of_Hours>
    ${hours.horas
      .map((h) => `<Hour><Name>${h.nome}</Name></Hour>`)
      .join("")}
  </Hours_List>

  <Subjects_List>
    ${subjects
      .map((s) => `<Subject><Name>${s.nome}</Name></Subject>`)
      .join("")}
  </Subjects_List>

  <Teachers_List>
    ${teachers
      .map(
        (t) => `
      <Teacher>
        <Name>${t.nome}</Name>
        ${
          t.cargaHorariaAlvo
            ? `<Target_Number_of_Hours>${t.cargaHorariaAlvo}</Target_Number_of_Hours>`
            : ""
        }
        ${
          t.disciplinasHabilitadas?.length
            ? t.disciplinasHabilitadas
                .map(
                  (d) =>
                    `<Qualified_Subject>${d}</Qualified_Subject>`
                )
                .join("")
            : ""
        }
        <Comments>${t.comentarios || ""}</Comments>
      </Teacher>
    `
      )
      .join("")}
  </Teachers_List>
</FET>
`;
}