import React, { useState } from 'react'
import '../styles/StudentForm.css'

export const StudentForm = ({ onAddStudent, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    career: '',
    grade: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.age || !formData.career || !formData.grade) {
      alert('Por favor, completa todos los campos')
      return
    }

    if (formData.age < 1 || formData.age > 100) {
      alert('La edad debe estar entre 1 y 100 años')
      return
    }

    if (formData.grade < 0 || formData.grade > 10) {
      alert('El promedio debe estar entre 0 y 10')
      return
    }


    const newStudent = {
      id: Date.now(),
      name: formData.name,
      age: parseInt(formData.age),
      career: formData.career,
      grade: parseFloat(formData.grade)
    }

    onAddStudent(newStudent)
    

    setFormData({
      name: '',
      age: '',
      career: '',
      grade: ''
    })
    
    onClose()
  }

  const handleCancel = () => {
    setFormData({
      name: '',
      age: '',
      career: '',
      grade: ''
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="form-header">
          <h2>Agregar Nuevo Estudiante</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="student-form">
          <div className="form-group">
            <label htmlFor="name">Nombre completo:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingresa el nombre del estudiante"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Edad:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Ingresa la edad"
              min="1"
              max="100"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="career">Carrera:</label>
            <input
              type="text"
              id="career"
              name="career"
              value={formData.career}
              onChange={handleChange}
              placeholder="Ingresa la carrera"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="grade">Promedio académico:</label>
            <input
              type="number"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              placeholder="Ingresa el promedio (0-5)"
              min="0"
              max="10"
              step="0.1"
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancelar
            </button>
            <button type="submit" className="btn-submit">
              Agregar Estudiante
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}