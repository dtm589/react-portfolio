import React from 'react';
import '../styles/Navigation.css';

export default function Navigation() {
    return (
        <nav className='navbar navbar-expand nav'>
            <div className='container-fluid'>
                <span className='navbar-brand person-title'>Derek Marchese</span>
                <span className='navbar-brand person-subtitle'>Full Stack Developer</span>
                <div className='collapse navbar-collapse'>
                    <div className='navbar-nav'>
                        <a className='nav-link' href='#'>About Me</a>
                        <a className='nav-link' href='#'>Portfolio</a>
                        <a className='nav-link' href='#'>Contact</a>
                        <a className='nav-link' href='#'>Resume</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
