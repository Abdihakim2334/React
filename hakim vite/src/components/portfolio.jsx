// src/components/Portfolio.js
import React from 'react';

const Portfolio = () => (
    <div>
        <header>
            <nav>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#work">My Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <h1>Abdihakim Abdirahman</h1>
            <img src="/assets/avatar.jpg" alt="Hakim's Portfolio" className="avatar" />
        </header>

        <section id="about">
            <h2>About Me</h2>
            <p>Welcome to my portfolio! I am a web developer with skills in HTML, CSS, and JavaScript. I also know how to work with APIs, Node.js, Express, and SQL.</p>
        </section>

        <section id="work">
            <h2>My Work</h2>
            <div className="projects">
                <a href="https://silentspaces.onrender.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/project1.jpg" alt="Project 1" className="featured" />
                </a>
                <a href="https://abdihakim2334.github.io/Weather-API/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/project2.jpg" alt="Project 2" />
                </a>
                <a href="https://abdihakim2334.github.io/Personal-Blog/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/project3.jpg" alt="Project 3" />
                </a>
                <a href="https://anewbil.github.io/Parks-and-respiration/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/project4.jpg" alt="Project 4" />
                </a>
            </div>
        </section>

        <section id="contact">
            <h2>Contact Me</h2>
            <p>Email: <a href="mailto:abdihakim2334@gmail.com">abdihakim2334@gmail.com</a></p>
        </section>

        <footer>
            <p>&copy; 2024 Abdihakim Abdirahman. All rights reserved.</p>
        </footer>
    </div>
);

export default Portfolio;
