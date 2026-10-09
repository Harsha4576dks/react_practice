import React, { useState } from 'react';
import { useStudents } from './hooks/studentHook';
import Navbar from './components/Navbar';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import DeleteStudent from './components/DeleteStudent'; 
import Button from './components/button'; 
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('get');
  const {
    students,
    editingStudent,
    status,
    setEditingStudent,
    handleAdd,
    handleUpdate,
    handleDelete,
  } = useStudents();

  const handleStartEdit = (student) => {
    setEditingStudent(student);
    setActivePage('update');
  };

  return (
    <div className="app-layout">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="content-container">
        <h2>Student Management</h2>

        {status.message && (
          <div className={`status-banner ${status.type}`}>
            {status.message}
          </div>
        )}

        {/* 1. GET (READ VIEW) */}
        {activePage === 'get' && (
          <div className="page-view">
            <h3>All Students (Read View)</h3>
            <DeleteStudent
              students={students}
              onDelete={handleDelete}
              onStartEdit={handleStartEdit}
            />
          </div>
        )}

        {/* 2. ADD (CREATE VIEW) */}
        {activePage === 'add' && (
          <div className="page-view">
            <AddStudent
              onAdd={(data) => {
                handleAdd(data);
                setActivePage('get');
              }}
            />
          </div>
        )}

        {/* 3. UPDATE VIEW */}
        {activePage === 'update' && (
          <div className="page-view">
            {editingStudent ? (
              <EditStudent
                currentStudent={editingStudent}
                onUpdate={(id, data) => {
                  handleUpdate(id, data);
                  setActivePage('get');
                }}
                onCancel={() => {
                  setEditingStudent(null);
                  setActivePage('get');
                }}
              />
            ) : (
              <div>
                <p>No student selected for editing.</p>
                <Button onClick={() => setActivePage('get')}>
                  Select Student from List
                </Button>
              </div>
            )}
          </div>
        )}


        {/* 4. DELETE VIEW */}
        {activePage === 'delete' && (
          <div className="page-view">
            <h3>Delete Students View</h3>
            <p>Click Delete next to any student below:</p>
            <DeleteStudent
              students={students}
              onDelete={handleDelete}
              onStartEdit={handleStartEdit}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;