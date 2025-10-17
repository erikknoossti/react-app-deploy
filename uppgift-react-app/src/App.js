import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a>Hej! Jag heter Erik Knöös och jag är 22 år gammal. Jag gillar programmering och teknik.</a>


      <a>Jag har bra kunskaper i frontend, backend, databaser och ramverk. Jag skulle säga att jag är bäst på java.</a>
        <h3>
          Projekt:
        </h3>
        <a
          className="App-link"
          href="https://github.com/erikknoossti/TDD-blackjack-uppgift"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blackjack Projekt
        </a>
      </header>
    </div>
  );
}

export default App;
