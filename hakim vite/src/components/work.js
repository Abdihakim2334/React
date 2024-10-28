// src/components/Work.js
import React from 'react';

const Work = () => (
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
);

export default Work;
