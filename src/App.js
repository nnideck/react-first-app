import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState(["Pagar contas", "Estudar React"]);

  function handleRegister(e) {
    e.preventDefault();
    setTarefas(input ? [...tarefas, input] : tarefas);
    setInput("");
  }

  return (
    <div>
      <h1>Cadastrando usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label>
        <br />
        <input
          placeholder="Digite sua tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <br />
        <br />
        <button type="submit" onClick={handleRegister}>
          Registrar
        </button>
      </form>
      <br />
      <br />
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
