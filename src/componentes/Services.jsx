import React from 'react';
import './Services.css';
import foto1 from '../assets/charles1.webp'; 
import foto2 from '../assets/dustin1.webp';

const Services = () => {
  return (
    <section id="servicos" className="services">
      <h2>Nossos Serviços</h2>
      <div className="service-cards">
        <div className="card">
          <img src={foto1} alt="Atendimento Médico" />
          <div className="card-content">
            <h3>Atendimento Médico</h3>
            <p>Consultas com profissionais especializados em diversas áreas da saúde.</p>
          </div>
        </div>

        <div className="card">
          <img src={foto2} alt="Exames" />
          <div className="card-content">
            <h3>Exames Laboratoriais e de Imagem</h3>
            <p>Resultados rápidos com equipamentos modernos e equipe técnica capacitada.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;