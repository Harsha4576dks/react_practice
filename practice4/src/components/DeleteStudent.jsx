import React from 'react';
import Button from './button';
import { deleteStudent } from "../services/studentService";


function StudentList({students = [], onDelete, onStartEdit}){
    if (students.length === 0) return <p>No students found</p>;

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
      {students.map((students) => (
        <li
          key={students.id}
          style={{
            display: 'flex',
            justify: 'space-between',
            padding: '8px 0',
            borderBottom: '1px solid #1e293b',
          }}
        >
          <span>
            <strong>{students.name}</strong> - {students.phone}
          </span>
          <div>

            <Button onClick={() => onStartEdit(students)}>Edit</Button>

            <Button
              onClick={() => onDelete(students.id)}
              style={{ marginLeft: '8px', color: 'white', background: 'red' }}
            >
              Delete
            </Button>
            
          </div>
        </li>
      ))}
    </ul>
    );

}

export default StudentList;