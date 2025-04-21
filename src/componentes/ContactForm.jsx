import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section id="formulario" className="contact-form">
      <h2>Quer saber mais?</h2>
      <p>Preencha o formulário abaixo e entraremos em contato:</p>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="cidade">Cidade:</label>
        <input type="text" id="cidade" name="cidade" required />

        <label htmlFor="estado">Estado:</label>
        <input type="text" id="estado" name="estado" required />

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;