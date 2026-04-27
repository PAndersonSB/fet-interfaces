import { useState } from "react";

export function useAppState() {
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [students, setStudents] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [activities, setActivities] = useState([]);
  const [institution, setInstitution] = useState({
  nome: "",
  comments: ""
  });

  const [days, setDays] = useState({
  numeroDeDias: 0,
  dias: []
  });
  const [hours, setHours] = useState({
  numeroDeHoras: 0,
  horas: []
  });

  return {
    teachers, setTeachers,
    subjects, setSubjects,
    students, setStudents,
    rooms, setRooms,
    activities, setActivities,
    institution, setInstitution,
    days, setDays,
    hours, setHours
  };
}