import React from 'react';
import { StudentsListStyles } from './StudentListStyles.ts';

interface Student {
    id: string;
    name: string;
    email: string;
}

interface StudentsListProps {
    students: Student[];
}

const StudentsList: React.FC<StudentsListProps> = ({ students }) => {
    return (
        <div style={StudentsListStyles.listContainer}>
            <h2 style={StudentsListStyles.title}>Lista de Estudantes</h2>
            <ul style={StudentsListStyles.list}>
                {students.map((student) => (
                    <li key={student.id} style={StudentsListStyles.listItem}>
                        <strong>{student.name}</strong> - {student.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentsList;
