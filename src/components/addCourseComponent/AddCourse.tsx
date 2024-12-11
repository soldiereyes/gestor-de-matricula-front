// src/components/AddCourse.tsx
import React, { useState } from 'react';
import api from "../../services/api.ts";
import {AddStudentStyles} from "../addStudentComponent/AddStudentStyles.ts";
import {AddCourseStyles} from "./AddCourse.ts";

interface AddCourseProps {
    onAddCourse: (course: { id: string; name: string; description: string }) => void;
}

const AddCourse: React.FC<AddCourseProps> = ({ onAddCourse }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await api.post('/courses', { name, description });
            const newCourse = response.data;
            onAddCourse(newCourse);
            setName('');
            setDescription('');
        } catch (error) {
            console.error('Error adding course:', error);
            alert('Failed to add course. Check console for details.');
        }
    };

    return (
        <div style={AddCourseStyles.formContainer}>
            <h2 style={AddCourseStyles.title}>Cadatro de Cursos</h2>
            <form onSubmit={handleSubmit}>
                <div style={AddCourseStyles.formGroup}>
                    <label htmlFor="name" style={AddStudentStyles.label}>Nome do Curso:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={AddCourseStyles.input}
                        required
                    />
                </div>
                <div style={AddCourseStyles.formGroup}>
                    <label htmlFor="description" style={AddCourseStyles.label}>Descrição:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={AddCourseStyles.input}
                        required
                    />
                </div>
                <button type="submit" style={AddCourseStyles.button}>
                    Adicionar
                </button>
            </form>
        </div>
    );
};

export default AddCourse;
