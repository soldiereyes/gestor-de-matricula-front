import { Properties } from 'csstype';

export const GlobalStyles: { [key: string]: Properties<string | number> } = {
    navbar: {
        backgroundColor: '#4CAF50',
        padding: '10px',
    },
    navList: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        margin: 0,
        padding: 0,
    },
    navItem: {
        margin: '0 10px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '16px',
    },
    content: {
        margin: '20px',
    },
};
