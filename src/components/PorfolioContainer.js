import React, { useState } from 'react';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Project from './pages/Project';

export default function PorfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <AboutMe />;
        }
        if (currentPage === 'Project') {
            return <Project />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}