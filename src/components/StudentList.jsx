import React from 'react'

export const StudentList = (data) => {
  console.log(data);
  return (
    <div>
      <table>

        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Carrera</th>
            <th>Promedio</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((value, index) => (
          <tr key={index}>
            <td>{value.name}</td>
            <td>{value.age}</td>
            <td>{value.career}</td>
            <td>{value.grade}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
