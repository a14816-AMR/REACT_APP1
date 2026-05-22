import React, { useState } from 'react';

function Tarefas() {

    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        data: '',
        descricao: '',
    });

    const [Tarefas, setTarefas] = useState([]);

    // Guarda os dados submetidos (para mostrar depois do envio)
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);
    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setDadosSubmetidos(formData); // guarda os dados preenchidos

        const novaTarefa = {
            id: Date.now(),
            titulo: formData.titulo,
            data: formData.data,
            descricao: formData.descricao
        };
        setTarefas([...Tarefas, novaTarefa]);

    }

    // Limpa o formulário e os dados apresentados
    function limparFormulario() {
        setFormData({ id: '', titulo: '', telefone: '', data: '', descricao: '' });
        setDadosSubmetidos(null);
    }

    function newtarefa() {
        const novaTarefa = {
            id: Date.now(),
            titulo: formData.titulo,
            data: formData.data,
            descricao: formData.descricao
        };
        setFormData(novaTarefa);
        setTarefas([...Tarefas, novaTarefa]);
        setDadosSubmetidos(null);
    }

    return (
        <div className="mt-4 row">

            <div class="col-6">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}

                    <div className="form-group">
                        <label>Título</label>
                        <input type="text" className="form-control" value={formData.titulo} onChange={(e) =>

                            setFormData({ ...formData, titulo: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Data</label>
                        <input type="date" className="form-control" value={formData.data} onChange={(e) =>

                            setFormData({ ...formData, data: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Descrição</label>
                        <input type="text" className="form-control" value={formData.descricao} onChange={(e) =>

                            setFormData({ ...formData, descricao: e.target.value })} />
                    </div>

                    {/* Botões de ação */}
                    <button className="btn btn-success mr-2">Enviar</button>

                    <button type="button" className="btn btn-outline-secondary"

                        onClick={limparFormulario}>Limpar</button>

                    <button type="button" className="btn btn-outline-secondary"
                        onClick={newtarefa}> Adicionar Tarefa </button>
                </form>
            </div>

            <div class="col-6">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Id:</strong> {dadosSubmetidos.id}</p>
                            <p><strong>Título:</strong> {dadosSubmetidos.titulo}</p>
                            <p><strong>Data:</strong> {dadosSubmetidos.data}</p>
                            <p><strong>Descrição:</strong> {dadosSubmetidos.descricao}</p>
                        </div>
                    </div>
                )}
                <ul className="list-group mt-4">
                    {Tarefas.map((tarefa) => (
                        <li key={tarefa.id} className="list-group-item">
                            <p><strong>Título:</strong> {tarefa.titulo}</p>
                            <p><strong>Data:</strong> {tarefa.data}</p>
                            <p><strong>Descrição:</strong> {tarefa.descricao}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Tarefas;