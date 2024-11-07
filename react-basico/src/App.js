import logo from './logo.svg';
import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu Projeto</h1>
      <Comentario nome='João' email='joao@mailcom' data={new Date(2024, 11, 6)}>
        Olá, tudo bem?
      </Comentario>
      <Comentario nome='Maria' email='maria@mailcom' data={new Date(2024, 11, 4)}>
        Olá, tudo bem sim
      </Comentario>
    </div>
  );
}

export default App;
