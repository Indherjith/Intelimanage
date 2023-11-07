import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <main>
        <section className="hero">
          <h1>Welcome to Intelimanage Project Management System</h1>
          <p>Effortlessly manage your projects, tasks, and teams in one place.</p>
          <a href="/projects" className="cta-button">Get Started</a>
        </section>

        <section className="features">
          <div className="feature">
            <i className="fas fa-tasks"></i>
            <h2>Task Management</h2>
            <p>Organize tasks and track progress efficiently.</p>
          </div>
          <div className="feature">
            <i className="fas fa-project-diagram"></i>
            <h2>Project Planning</h2>
            <p>Plan and manage projects with ease.</p>
          </div>
          <div className="feature">
            <i className="fas fa-users"></i>
            <h2>Team Collaboration</h2>
            <p>Collaborate seamlessly with your team.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
