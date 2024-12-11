import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentsPage from "./pages/studentPage/StudentPage.tsx";
import CoursesPage from "./pages/cousesPage/CousesPage.tsx";
import EnrollmentsPage from "./pages/enrollmentsPage/EnrollmentsPage.tsx";
import {GlobalStyles} from "./styles/GlobalStyles.ts";

const App: React.FC = () => {
    return (
        <Router>
            <nav style={GlobalStyles.navbar}>
                <ul style={GlobalStyles.navList}>
                    <li style={GlobalStyles.navItem}>
                        <Link to="/" style={GlobalStyles.navLink}>Alunos</Link>
                    </li>
                    <li style={GlobalStyles.navItem}>
                        <Link to="/courses" style={GlobalStyles.navLink}>Cursos</Link>
                    </li>
                    <li style={GlobalStyles.navItem}>
                        <Link to="/enrollments" style={GlobalStyles.navLink}>Matriculas</Link>
                    </li>
                </ul>
            </nav>

                <Routes>
                    <Route path="/" element={<StudentsPage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/enrollments" element={<EnrollmentsPage />} />
                </Routes>

        </Router>
    );
};


export default App;
