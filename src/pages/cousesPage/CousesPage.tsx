import React, { useState, useEffect } from 'react';
import AddCourse from "../../components/addCourseComponent/AddCourse.tsx";
import api from '../../services/api';
import CoursesList from "../../components/courseListComponent/CoursesList.tsx";

interface Course {
    id: string;
    name: string;
    description: string;
}

const CoursesPage: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await api.get('/courses');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();
    }, []);

    const addCourseToList = (newCourse: Course) => {
        setCourses((prevCourses) => [...prevCourses, newCourse]);
    };

    return (
        <div>
            <AddCourse onAddCourse={addCourseToList} />
            <CoursesList courses={courses} />
        </div>
    );
};

export default CoursesPage;
