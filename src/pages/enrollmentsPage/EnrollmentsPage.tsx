import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { EnrollmentsPageStyles } from './EnrollmentsStyles.ts';

interface Enrollment {
    id: string;
    studentName: string;
    courseName: string;
}

const EnrollmentsPage: React.FC = () => {
    const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
    const [students, setStudents] = useState<{ id: string; name: string }[]>([]);
    const [courses, setCourses] = useState<{ id: string; name: string }[]>([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentsResponse = await api.get('/students');
                const coursesResponse = await api.get('/courses');
                setStudents(studentsResponse.data);
                setCourses(coursesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchEnrollments = async () => {
            try {
                const response = await api.get('/enrollments');
                setEnrollments(response.data);
            } catch (error) {
                console.error('Error fetching enrollments:', error);
            }
        };
        fetchEnrollments();
    }, []);

    const handleEnrollment = async () => {
        try {
            const response = await api.post('/enrollments', {
                studentId: selectedStudent,
                courseId: selectedCourse,
            });

            const newEnrollment: Enrollment = {
                id: response.data.id,
                studentName: students.find((s) => s.id === selectedStudent)?.name || '',
                courseName: courses.find((c) => c.id === selectedCourse)?.name || '',
            };

            setEnrollments((prev) => [...prev, newEnrollment]);
            setSelectedStudent('');
            setSelectedCourse('');

            alert('Enrollment successful!');
        } catch (error) {
            console.error('Error creating enrollment:', error);
            alert('Failed to create enrollment.');
        }
    };

    return (
        <div style={EnrollmentsPageStyles.container}>
            <h1 style={EnrollmentsPageStyles.title}>Enrollments Page</h1>
            <div>
                <select
                    value={selectedStudent}
                    onChange={(e) => setSelectedStudent(e.target.value)}
                    style={EnrollmentsPageStyles.select}
                >
                    <option value="">Select a Student</option>
                    {students.map((student) => (
                        <option key={student.id} value={student.id}>
                            {student.name}
                        </option>
                    ))}
                </select>
                <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    style={EnrollmentsPageStyles.select}
                >
                    <option value="">Select a Course</option>
                    {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                            {course.name}
                        </option>
                    ))}
                </select>
                <button style={EnrollmentsPageStyles.button} onClick={handleEnrollment}>
                    Enroll
                </button>
            </div>
            <ul style={EnrollmentsPageStyles.list}>
                {enrollments.map((enrollment) => (
                    <li key={enrollment.id} style={EnrollmentsPageStyles.listItem}>
                        <span style={EnrollmentsPageStyles.listItemStrong}>
                            {enrollment.studentName}
                        </span>
                        <span> matriculado em </span>
                        <span style={EnrollmentsPageStyles.listItemStrong}>
                            {enrollment.courseName}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EnrollmentsPage;
