
import React, { useState } from 'react'
import { StudentCard } from './components/StudentCard'
import { StudentForm } from './components/StudentForm'
import { StudentStats } from './components/StudentStats'

export const App = () => {
  const [data, setData] = useState({
    1: {
      id: 1,
      name: "Carlos",
      age: 23,
      career: "Ingeniería de Sistemas",
      grade: 5,
    },
    2: {
      id: 2,
      name: "Ana",
      age: 22,
      career: "Diseño Gráfico",
      grade: 3.5,
    },
    3: {
      id: 3,
      name: "Luis",
      age: 21,
      career: "Ciencias de la Computación",
      grade: 2.9,
    }
  })

  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleAddStudent = (newStudent) => {
    setData(prevData => ({
      ...prevData,
      [newStudent.id]: newStudent
    }))
  }

  const handleEditStudent = (editId, form) => {
    setData({
      ...data,
      [editId]: { ...form, id: editId }
    });
  };

  const handleDeleteStudent = (id) => {
    setData(prevData => {
      const newData = { ...prevData };
      delete newData[id];
      return newData;
    });
  };

  const openForm = () => {
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ 
        position: 'fixed', 
        bottom: '30px', 
        right: '30px', 
        zIndex: 999 
      }}>
        <button 
          onClick={openForm}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            fontSize: '24px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 123, 255, 0.4)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#0056b3'
            e.target.style.transform = 'scale(1.1)'
            e.target.style.boxShadow = '0 6px 16px rgba(0, 123, 255, 0.6)'
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#007bff'
            e.target.style.transform = 'scale(1)'
            e.target.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.4)'
          }}
          title="Agregar estudiante"
        >
          +
        </button>
      </div>

  
      <StudentForm 
        onAddStudent={handleAddStudent}
        isOpen={isFormOpen}
        onClose={closeForm}
      />
      
  
      <StudentStats data={data} />


      <StudentCard {...data} onEditStudent={handleEditStudent}
        onDeleteStudent={handleDeleteStudent} 
        isFormOpen={isFormOpen}
        onClose={closeForm}
      />
    </div>
  )
}