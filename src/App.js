
import { useState } from "react"; 

function App(){
const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [idade, setIdade] = useState("");

const [user, setUser] = useState({});

function handleRegister(e) {
  e.preventDefault();
alert("Usuário cadastrado com sucesso!");
// console.log("Usuário cadastrado com sucesso!");

  setUser({
    nome: nome,
    email: email,
    idade: idade
  })
}

  return(
    <div>
      <h1>Cadastrando usuário</h1>
      <form onSubmit={handleRegister}>
       <label>Nome:
        </label>
        <br/>
        <input placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}
        ></input>
        
        <br/>
           <label>Email:
        </label>
        <br/>
        <input placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br/>
           <label>Idade:
        </label>
        <br/>
        <input placeholder="Digite seu Idade" value={idade} onChange={(e) => setIdade(e.target.value)}
        ></input>
        <br/>
        <button type="submit" onClick={handleRegister}>Registrar</button>
      </form>
       <br/>
        <br/>
        <div>
          <span>
            Bem vindo: {user.nome}
          </span>
          <br/>
          <span>
            Idade: {user.idade}
          </span>
          <br/>
          <span>
            Email: {user.email}
          </span>

        </div>

    </div>
  )

  
}

export default App;

