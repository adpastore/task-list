import {Task} from "./task"
export const TASKS: Task[] = [
  {
    id: 1,
    text: "Editar el modulo de Angular",
    day: 'Mayo 31 a las 20hs.',
    reminder: true
  },
  {
    id: 2,
    text: "Revizar el modulo de Angular",
    day: 'Mayo 31 a las 21hs.',
    reminder: true
  },
  {
    id: 3,
    text: "Ultimo control del modulo de Angular",
    day: 'Mayo 31 a las 22hs.',
    reminder: false
  },
  {
    id: 4,
    text: "Grabar el modulo de Angular",
    day: 'Mayo 31 a las 24hs.',
    reminder: false
  }
]
// emula una base de datos, y es un arreglo de las tareas, o sea, una simple lista de tareas en forma de arreglo. import { Task } from "./task" para tener toda la integridad de los datos.