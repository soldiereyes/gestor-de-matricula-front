// src/App.tsx
import React, { useState } from 'react';
import AddStudent from "./components/addStudentComponent/AddStudent.tsx";
import StudentsList from "./components/studentListComponent/StudentsList.tsx";

interface Student {
    id: string;
    name: string;
    email: string;
}

const App: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);

    const addStudentToList = (newStudent: Student) => {
        setStudents((prevStudents) => [...prevStudents, newStudent]);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
            <h1 style={{ textAlign: 'center', color: '#4CAF50' }}>Student Management</h1>
            <AddStudent onAddStudent={addStudentToList} />
            <StudentsList students={students} />
        </div>
    );
};

export default App;
