import './App.css';
import Header from './componentes/Header';
import NavBar from './componentes/NavBar';
import Services from './componentes/Services';
import Team from './componentes/Team';
import ContactForm from './componentes/ContactForm';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main>
        <Services />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
