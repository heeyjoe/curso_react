import logo from './logo.svg';
import './App.css';
import Comentario from './components/Comentario';
import { Component } from 'react';

class App extends Component {
  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joao@email.com',
        data: new Date(2020, 3, 19),
        mensagem: 'Olá mundo'
      },
      { 
        nome: 'Maria',
        email: 'maria@email.com',
        data: new Date(2020, 3, 25),
        mensagem: 'Olá mundo novo'
      },
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = evento => {
    evento.preventDefault();
    const novoComentario = {...this.state.novoComentario, data: new Date()}
    this.setState( { 
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email: '', mensagem: ''}
    } )
  }

  digitacao = evento =>{
    const {name, value} = evento.target;
    this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
  }

  render(){
    return (
      <div className="App">
        <h1>Meu Projeto</h1>
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            email={comentario.email} 
            data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
        ))}
        
        <form method='post' onSubmit={this.adicionarComentario}>
          <h2>Adicionar Comentário</h2>
          <div>
            <input 
            type='text' 
            name='nome'
            value={this.state.novoComentario.nome} 
            onChange={this.digitacao}
            placeholder='Digite seu nome'></input>
          </div>
          <div>
            <input 
            type='email' 
            name='email' 
            value={this.state.novoComentario.email} 
            onChange={this.digitacao}
            placeholder='Digite seu e-mail'></input>
          </div>
          <div>
            <textarea 
              name='mensagem' 
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao} 
              rows='4'/>
          </div>
          <button type='submit'>Adicionar Comentário</button>
        </form>
      </div>
    );
  }
}

export default App;
