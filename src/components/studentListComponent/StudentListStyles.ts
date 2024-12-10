import { Properties } from 'csstype';

export const StudentsListStyles: { [key: string]: Properties<string | number> } = {
    listContainer: {
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        maxWidth: '600px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '20px',
        marginBottom: '10px',
        textAlign: 'center',
        color: '#4CAF50',
    },
    list: {
        listStyleType: 'none',
        padding: '0',
    },
    listItem: {
        padding: '10px',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between',
    },
};
