export function exportFET(state) {
  const xml = `
<FET>
<Institution_Name>${state.institution.name}</Institution_Name>
<Comments>${state.institution.comments}</Comments>

<Days_List>
  <Number_of_Days>${state.days.length}</Number_of_Days>
  ${state.days.map(d => `
    <Day>
      <Name>${d.name}</Name>
    </Day>
  `).join("")}
</Days_List>

<Hours_List>
  <Number_of_Hours>${state.hours.length}</Number_of_Hours>
  ${state.hours.map(h => `
    <Hour>
      <Name>${h.name}</Name>
    </Hour>
  `).join("")}
</Hours_List>
  <Teachers_List>
    ${state.teachers.map(t => `<Teacher><Name>${t.name}</Name></Teacher>`).join("")}
  </Teachers_List>
</FET>
  `;

  const blob = new Blob([xml], { type: "text/xml" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "file.fet";
  a.click();
}