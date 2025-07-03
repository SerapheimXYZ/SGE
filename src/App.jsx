import React, { useState } from 'react'
import { StudentCard } from './components/StudentCard'
import { DATA } from './utils/StudentList.jsx'

export const App = () => {
    const [studentData, setStudentData] = useState(DATA)
  return (
    <div>
        <StudentCard {...studentData} />
    </div>
  )
}
