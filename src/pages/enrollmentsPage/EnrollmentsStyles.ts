import { Properties } from 'csstype';

export const EnrollmentsPageStyles: { [key: string]: Properties<string | number> } = {
    container: {
        margin: '20px auto',
        maxWidth: '800px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
        textAlign: 'center',
        color: '#4CAF50',
        marginBottom: '20px',
        fontSize: '24px',
    },
    formGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '15px',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginRight: '10px',
        fontSize: '16px',
    },
    select: {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
        width: '100%',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '14px',
        marginTop: '10px',
        display: 'block',
        width: '100%',
    },
    list: {
        marginTop: '20px',
        listStyleType: 'none',
        padding: '0',
    },
    listItem: {
        padding: '10px',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemStrong: {
        color: '#333',
        fontWeight: 'bold',
    },
};
