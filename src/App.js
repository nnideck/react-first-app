import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem('novaTarefa')
    return tarefasStorage ? JSON.parse(tarefasStorage) : [];})


  useEffect(() => {
    localStorage.setItem('novaTarefa', JSON.stringify(tarefas))
  }, [tarefas]) 

  function handleRegister(e) {
    e.preventDefault();
    if (input.trim() === '') return;
    setTarefas([...tarefas, input]);
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
        <button type="submit">
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
