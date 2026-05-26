import React, { useState } from 'react';

function Notas() {

    const [NotaTeste, setNotaTeste] = useState({
        nomeAluno: '',
        disciplina: '',
        notaTeste: 0,
        porcentagemTeste: 0,
        notaTrabalho: 0,
        porcentagemTrabalho: 0,
        notaAtitudes: 0,
        porcentagemAtitudes: 0,
    });


    function limparFormulario() {
        setNotaTeste({
            nomeAluno: '',
            disciplina: '',
            notaTeste: 0,
            porcentagemTeste: 0,
            notaTrabalho: 0,
            porcentagemTrabalho: 0,
            notaAtitudes: 0,
            porcentagemAtitudes: 0,
        });
    }
    function calcularNotaFinal(e) {

        e.preventDefault(); // impede o recarregamento da página
        // Aqui irias buscar os valores dos campos do formulário, calcular a nota final e mostrar o resultado
        
        /*if (NotaTeste.porcentagemTeste + NotaTeste.porcentagemTrabalho + NotaTeste.porcentagemAtitudes !== 100) {
            alert('A soma das porcentagens deve ser igual a 100%. Por favor, ajuste as porcentagens e tente novamente.');
            return;
        }*/
        
        const nota = (NotaTeste.notaTeste * NotaTeste.porcentagemTeste / 100) + (NotaTeste.notaTrabalho * NotaTeste.porcentagemTrabalho / 100) + (NotaTeste.notaAtitudes * NotaTeste.porcentagemAtitudes / 100);

        //notaArredondada = nota.toFixed(2);

            if (NotaTeste.notaTeste == 0 || NotaTeste.notaTrabalho == 0 || NotaTeste.notaAtitudes == 0) {
                alert('Por favor, preencha todas as notas antes de calcular a nota final.');
            } else {
                if (nota >= 9.5) {
                    alert(' Parabens ' + NotaTeste.nomeAluno + ' voce passou! Sua nota final foi: ' + nota + ' valores');
                } else {
                    alert(' Infelizmente ' + NotaTeste.nomeAluno + ', voce nao passou. Sua nota final foi: ' + nota + ' valores');
                }
            }

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
                        <input type="text" className="form-control md-8" value={NotaTeste.nomeAluno} onChange={(e) =>
                            setNotaTeste({ ...NotaTeste, nomeAluno: e.target.value })} required />
                    </div>
                    <div className="col-md-4">
                        <label>Disciplina:</label>
                        <input type="text" className="form-control" value={NotaTeste.disciplina} onChange={(e) =>
                            setNotaTeste({ ...NotaTeste, disciplina: e.target.value })} required />
                    </div>
                </div>

                {/* Segunda linha */}
                <div class="row g-3">
                    <div className="col-md-3">
                        <label>Nota do Teste:</label>
                        <input type="number" className="form-control" min="0" max="20" value={NotaTeste.notaTeste} onChange={(e) =>
                            setNotaTeste({ ...NotaTeste, notaTeste: e.target.value })} required />

                    </div>
                    <div className="col-md-3">
                        <label>(%) Testes:</label>
                        <input type="number" className="form-control" min="0" max="100" value={NotaTeste.porcentagemTeste} onChange={(e) =>
                            setNotaTeste({ ...NotaTeste, porcentagemTeste: e.target.value })} required />
                    </div>
                </div>


                {/* terceira linha */}
                <div class="row g-3">
                    <div className="col-md-3">
                        <label>Nota do Trabalho:</label>
                        <input type="number" className="form-control" min="0" max="20" value={NotaTeste.notaTrabalho} onChange={(e) =>
                            setNotaTeste({ ...NotaTeste, notaTrabalho: e.target.value })} required />
                    </div>
                    <div className="col-md-3">
                        <label>(%) Trabalhos:</label>
                        <input type="number" className="form-control" min="0" max="100" value={NotaTeste.porcentagemTrabalho} onChange={(e) =>
                            setNotaTeste({ ...NotaTeste, porcentagemTrabalho: e.target.value })} required />
                    </div>
                </div>

                {/* Quarta linha */}
                <div class="row g-3">
                    <div className="col-md-3">
                        <label>Nota das Atitudes</label>
                        <input type="number" className="form-control" min="0" max="20" value={NotaTeste.notaAtitudes} onChange={(e) =>
                            setNotaTeste({ ...NotaTeste, notaAtitudes: e.target.value })} required />
                    </div>
                    <div className="col-md-3">
                        <label>(%) Atitudes</label>
                        <input type="number" className="form-control" min="0" max="100" value={NotaTeste.porcentagemAtitudes} onChange={(e) =>
                            setNotaTeste({ ...NotaTeste, porcentagemAtitudes: e.target.value })} required />
                    </div>
                </div>

                <button type="button" className="btn btn-primary mt-3" onClick={calcularNotaFinal}>
                    Calcular Nota Final
                </button>

                <button type="button" className="btn btn-outline-secondary mt-3" onClick={limparFormulario}>
                    Limpar Formulário
                </button>

            </form>
        </div>
    );
}

export default Notas;
