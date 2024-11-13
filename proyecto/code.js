// TODO -> Añade más estudiantes y sus calificaciones a STUDENT_GRADES.
// TODO -> Añade o modifica los pesos de las materias en SUBJECT_WEIGHTS.
// TODO -> Modifica la función calculateFinalGrade para manejar casos donde una materia no tiene un peso definido.

// Paso 1: Definir las estructuras de datos
const STUDENT_GRADES = {
  alice: { math: 90, science: 80, english: 85 },
  bob: { math: 70, science: 75, english: 65 },
  charlie: { math: 85, science: 95, english: 80 },
  dallana: { math: 60, science: 90, english: 100 },
  sebastian: { math: 95, science: 80, english: 90 },
};

const SUBJECT_WEIGHTS = {
  math: 0.4,
  science: 0.35,
  english: 0.25,
};

// Paso 2: Crear la función para calcular la calificación final ponderada
function calculateFinalGrade(studentName) {
  const grades = STUDENT_GRADES[studentName];
  if (!grades) {
    console.log(
      `No se encontraron calificaciones para el estudiante: ${studentName}`
    );
    return;
  }

  let finalGrade = 0;
  for (const subject in grades) {
    if (SUBJECT_WEIGHTS[subject] !== undefined) {
      finalGrade += grades[subject] * SUBJECT_WEIGHTS[subject];
    } else {
      console.log(`No se encontró el peso para la materia: ${subject}`);
    }
  }

  return finalGrade;
}

// Paso 3: Mostrar las calificaciones finales de cada estudiante
for (const student in STUDENT_GRADES) {
  const finalGrade = calculateFinalGrade(student);
  console.log(
    `La calificación final de ${student} es: ${finalGrade.toFixed(2)}`
  );
}
