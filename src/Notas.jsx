import React, { useState } from 'react';

function Notas() {


    function receberDados(e) {
        const [notaTeste, setNotaTeste] = useState(0);
        const [percentagemTeste, setPercentagemTeste] = useState(0);
        const [notaTrabalho, setNotaTrabalho] = useState(0);
        const [percentagemTrabalho, setPercentagemTrabalho] = useState(0);
        const [notaAtitudes, setNotaAtitudes] = useState(0);
        const [percentagemAtitudes, setPercentagemAtitudes] = useState(0);
        
    }
    function calcularNotaFinal(e) {
        e.preventDefault(); // impede o recarregamento da página
        // Aqui irias buscar os valores dos campos do formulário, calcular a nota final e mostrar o resultado
        const notaFinal = (notaTeste * percentagemTeste / 100) + (notaTrabalho * percentagemTrabalho / 100) + (notaAtitudes * percentagemAtitudes / 100);

        alert('Nota final calculada: ' + notaFinal.toFixed(2));

    }




    return (
        <div>
            <h1>Calculo Nota Final</h1>
            <h3>Dados do aluno</h3>
            <form>

                {/* Primeira linha */}
                <div class="row g-3">
                    <div className="col-md-8">
                        <label>Nome do Aluno:</label>
                        <input type="text" className="form-control md-8"/>
                    </div>
                    <div className="col-md-4">
                        <label>Disciplina:</label>
                        <input type="text" className="form-control" />
                    </div>                  
                </div>

                {/* Segunda linha */}
                <div class="row g-3">
                    <div className="col-md-3">
                        <label>Nota do Teste:</label>
                        <input type="number" className="form-control" min="0" max="20" onChange={receberDados.setNotaTeste} />
                    </div>
                    <div className="col-md-3">
                        <label>(%) Testes:</label>
                        <input type="number" className="form-control" min="0" max="100" onChange={receberDados.setPercentagemTeste} />
                    </div>                  
                </div>


                {/* terceira linha */}
                <div class="row g-3">
                    <div className="col-md-3">
                        <label>Nota do Trabalho:</label>
                        <input type="number" className="form-control" min="0" max="20" onChange={receberDados.setNotaTrabalho} />
                    </div>
                    <div className="col-md-3">
                        <label>(%) Trabalhos:</label>
                        <input type="number" className="form-control" min="0" max="100" onChange={receberDados.setPercentagemTrabalho} />
                    </div>                  
                </div>

                {/* Quarta linha */}
                <div class="row g-3">
                    <div className="col-md-3">
                        <label>Nota das Atitudes</label>
                        <input type="number" className="form-control" min="0" max="20" onChange={receberDados.setNotaAtitudes} />
                    </div>
                    <div className="col-md-3">
                        <label>(%) Atitudes</label>
                        <input type="number" className="form-control" min="0" max="100" onChange={receberDados.setPercentagemAtitudes} />
                    </div>                  
                </div>

                <button type="submit" className="btn btn-primary mt-3" onClick={calcularNotaFinal}>
                    Calcular Nota Final
                </button>

            </form>
        </div>
    );
}

export default Notas;
