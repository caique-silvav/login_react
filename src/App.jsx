import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cadastro enviado com sucesso!');
  };

  return (
    <div className="App">
      <div className="card">
        <h1>Crie sua conta</h1>
        <p>Junte-se a nós e comece hoje mesmo.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" required minLength="6" />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        <p className="footer-text">
          Já tem conta? <a href="#login">Entrar</a>
        </p>
      </div>
    </div>
  );
}

export default App;