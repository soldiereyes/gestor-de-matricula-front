import React, { useState, useEffect } from 'react';
import AddStudent from "../../components/addStudentComponent/AddStudent.tsx";
import StudentsList from "../../components/studentListComponent/StudentsList.tsx";
import api from '../../services/api';

interface Student {
    id: string;
    name: string;
    email: string;
}

const StudentsPage: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await api.get('/students');
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };
        fetchStudents();
    }, []);

    const addStudentToList = (newStudent: Student) => {
        setStudents((prevStudents) => [...prevStudents, newStudent]);
    };

    return (
        <div>
            <AddStudent onAddStudent={addStudentToList} />
            <StudentsList students={students} />
        </div>
    );
};

export default StudentsPage;
