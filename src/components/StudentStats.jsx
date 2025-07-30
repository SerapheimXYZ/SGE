import React from 'react'
import '../styles/StudentStats.css'

export const StudentStats = ({ data }) => {

  const students = Object.values(data || {})
  

  const totalStudents = students.length
  
  const averageGrade = students.length > 0 
    ? (students.reduce((sum, student) => sum + student.grade, 0) / students.length).toFixed(1)
    : 0

  return (
    <div className="stats-container">
      <h2 className="stats-title">Estadísticas</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-content">
            <h3 className="stat-number">{totalStudents}</h3>
            <p className="stat-label">Total de Estudiantes</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <h3 className="stat-number">{averageGrade}</h3>
            <p className="stat-label">Promedio General</p>
          </div>
        </div>
      </div>

      {totalStudents === 0 && (
        <div className="no-data-message">
          <p>No hay estudiantes registrados</p>
        </div>
      )}
    </div>
  )
}