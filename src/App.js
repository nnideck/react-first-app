import Nome from "./components/Nome"; 
import { useState } from "react"; 

function App(){
  const [nome, setNome] = useState("João");
  const [idade, setIdade] = useState(15);

 function handleChangeNome(novoNome, novaIdade){
        setNome(novoNome);
        setIdade(novaIdade);
 }  

  return(
    <div>
      <h1>
        Component App
      </h1>
      <Nome aluno={nome} idade={idade} />
      <br/>
      <button onClick={() => {handleChangeNome('José', 29)}}>
        Mudar nome
      </button>
    </div>
  
  )

  
}

export default App;

