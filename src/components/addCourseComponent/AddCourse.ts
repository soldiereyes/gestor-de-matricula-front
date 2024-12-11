import { Properties } from 'csstype';

export const AddCourseStyles: { [key: string]: Properties<string | number> } = {
    formContainer: {
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        fontWeight: 'bold',
        display: 'block',
        marginBottom: '5px',
        fontSize: '14px',
        color: '#333',
    },
    input: {
        width: '95%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '14px',
        width: '100%',
    },
    title: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px',
    },
};
