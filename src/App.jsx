import React, { useState } from 'react'
import { StudentCard } from './components/StudentCard'
import { StudentForm } from './components/StudentForm'
import { StudentStats } from './components/StudentStats'

export const App = () => {
  const [data, setData] = useState ({
    1:{
      id: 1,
      name: "Carlos",
      age: 23,
      career: "Ingeniería de Sistemas",
      grade: 8.5
      },
    2:{
      id: 2,
      name: "Ana",
      age: 22,
      career: "Diseño Gráfico",
      grade: 9.0,
      },
    3:{
      id: 3,
      name: "Luis",
      age: 21,
      career: "Ciencias de la Computación",
      grade: 7.5,
      }
  });
  
  return (
    <div>
      <StudentForm/>
      <StudentStats/>
      <StudentCard {...data} />
    </div>
  )
}
