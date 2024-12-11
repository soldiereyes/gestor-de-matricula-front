import React, { useState } from 'react';
import api from "../../services/api.ts";
import {AddStudentStyles} from "./AddStudentStyles.ts";

interface AddStudentProps {
    onAddStudent: (student: { id: string; name: string; email: string }) => void;
}

const AddStudent: React.FC<AddStudentProps> = ({ onAddStudent }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await api.post('/students', { name, email });
            const newStudent = response.data;
            onAddStudent(newStudent);
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Error adding student:', error);
            alert('Failed to add student. Check console for details.');
        }
    };

    return (
        <div style={AddStudentStyles.formContainer}>
            <h2 style={AddStudentStyles.title}>Cadastrar Aluno</h2>
            <form onSubmit={handleSubmit}>
                <div style={AddStudentStyles.formGroup}>
                    <label htmlFor="name" style={AddStudentStyles.label}>Nome:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={AddStudentStyles.input}
                        required
                    />
                </div>
                <div style={AddStudentStyles.formGroup}>
                    <label htmlFor="email" style={AddStudentStyles.label}>Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={AddStudentStyles.input}
                        required
                    />
                </div>
                <button type="submit" style={AddStudentStyles.button}>
                    Adicionar
                </button>
            </form>
        </div>
    );
};

export default AddStudent;
