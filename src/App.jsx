import "./App.css";

function App() {
  
  const enviar = async (event) => {
    event.preventDefault();

    const dados = {
      nome: document.getElementById('noume').value,
      sobrenome: document.getElementById('sobren').value,
      email: document.getElementById('edress').value,
      senha: document.getElementById('senha').value,
      termos: document.getElementById('check').checked
    };

    try {
      
      await fetch("https://webhook.site/f0f653b9-dd8f-4158-9974-bf26c53c8160", {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      event.target.reset();
      console.log("Dados enviados com sucesso para o servidor!");

  } catch (error) {
    console.error("Erro ao enviar os dados:", error);
  }

  }; 

  return (
    <div className="fundo">
      <div className="caixa">
        <h1>Crie sua conta</h1>
        <div className="inputs">
          <form onSubmit={enviar}>
            <fieldset className="fild-one">
              <label htmlFor="noume">Nome: 
                <input type="text" required name="nome" id="noume" placeholder="clique aqui"  />
              </label>
              <label htmlFor="sobren">Sobrenome: 
                <input type="text" name="sobrenome" id="sobren" placeholder="clique aqui" required />
              </label>
            </fieldset>

            <fieldset className="fild-two">
              <label htmlFor="edress">Email: 
                <input type="email" id="edress" placeholder="clique aqui" required/>
              </label>
              <label htmlFor="senha">Senha: 
                <input type="password" id="senha" required placeholder="clique aqui"/>
              </label>
            </fieldset>

            <fieldset className="fild-three">
              
              <label htmlFor="check">
              <input type="checkbox" name="accept" id="check" required/>
              Aceitar os Termos de Uso
              </label>
              <button type="submit" className="bt" >Enviar</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;