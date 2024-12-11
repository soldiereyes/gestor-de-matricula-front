import React from 'react';
import { StudentsListStyles } from '../studentListComponent/StudentListStyles.ts';

interface Course {
    id: string;
    name: string;
    description: string;
}

interface CoursesListProps {
    courses: Course[];
}

const CoursesList: React.FC<CoursesListProps> = ({ courses }) => {
    return (
        <div style={StudentsListStyles.listContainer}>
            <h2 style={StudentsListStyles.title}>Lista de Cursos</h2>
            <ul style={StudentsListStyles.list}>
                {courses.map((course) => (
                    <li key={course.id} style={StudentsListStyles.listItem}>
                        <strong>{course.name}</strong>
                        <p>{course.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoursesList;
