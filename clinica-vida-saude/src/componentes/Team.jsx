import React from 'react';
import './Team.css';
import foto3 from '../assets/jean1.avif';
import foto4 from '../assets/poatan 1.jpg';
import foto5 from '../assets/jiri1.webp';

const Team = () => {
  return (
    <section id="equipe" className="team">
      <h2>Nossa Equipe</h2>
      <div className="team-cards">
        <div className="card">
          <img src={foto3} alt="Dr. Carlos" />
          <div className="card-content">
            <h3>Dr. Jean Silva</h3>
            <p>Médico Clínico Geral</p>
          </div>
        </div>

        <div className="card">
          <img src={foto4} alt="Dr. Poatan" />
          <div className="card-content">
            <h3>Dr. Poatan</h3>
            <p>Nutricionista</p>
          </div>
        </div>

        <div className="card">
          <img src={foto5} alt="Dr. Eduardo" />
          <div className="card-content">
            <h3>Dr. Jiri</h3>
            <p>Radiologista</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;