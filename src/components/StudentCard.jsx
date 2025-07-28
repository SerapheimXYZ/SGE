import React from 'react'
import '../styles/card.css'

export const StudentCard = (DATA) => {
  return (
    <div className="card-container">
      {Object.values(DATA).map((value, index) => (
        <div key={index} className="card">
          <h2 className="card-title">{value.name}</h2>
          <div className="card-content">
            <p><strong>Edad:</strong> {value.age} años</p>
            <p><strong>Carrera:</strong> {value.career}</p>
            <p><strong>Promedio académico:</strong> {value.grade}/10</p>
          </div>
          <div className="card-actions">
            <button>Editar</button>
            <button>Eliminar</button>
          </div>  
        </div>
      ))}
    </div>
  )
}