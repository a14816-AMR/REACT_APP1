import React, { useState } from 'react';
function Tarefas() {
    // Estado único "formData" guarda todos os campos do formulário num objeto



    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        data: '',
        descricao: '',
    });

    const id = Date.now();

    const [Tarefas, setTarefas] = useState() ;
    

    // Guarda os dados submetidos (para mostrar depois do envio)
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);
    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        const novoId = Date.now();
        e.preventDefault(); // impede o recarregamento da página
        setDadosSubmetidos(formData); // guarda os dados preenchidos
    }

    function espalhamento () {
        
    }


    // Limpa o formulário e os dados apresentados
    function limparTarefas() {
        setFormData({ titulo: '', data: '', descricao: '' });
        setDadosSubmetidos(null);
    }
    
    return (
        <div className="mt-4 row">
            <div class="col-8">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}

                    <div className="form-group">
                        <label>titulo</label>
                        <input type="titulo" className="form-control" value={formData.titulo} onChange={(e) =>

                            setFormData({ ...formData, titulo: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>data</label>
                        <input type="tel" className="form-control" value={formData.data} onChange={(e) =>

                            setFormData({ ...formData, data: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>descricao</label>
                        <input type="text" className="form-control" value={formData.descricao} onChange={(e) =>

                            setFormData({ ...formData, descricao: e.target.value })} required />
                    </div>
                    


                    {/* Botões de ação */}
                    <button className="btn btn-success mr-2">Enviar</button>

                    <button type="button" className="btn btn-outline-secondary"

                        onClick={limparTarefas}>Limpar</button>
                </form>
            </div>
            
            <div class="col-4">
                {/* Mostra os dados submetidos se existirem */}
                    {dadosSubmetidos && (
                        <div className="card mt-4">
                            <div className="card-body">
                                <h5 className="card-title">Dados Recebidos</h5>
                                <p><strong>id:</strong> {id}</p>
                                <p><strong>titulo:</strong> {dadosSubmetidos.titulo}</p>
                                <p><strong>data:</strong> {dadosSubmetidos.data}</p>
                                <p><strong>descricao:</strong> {dadosSubmetidos.descricao}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
    );
}
export default Tarefas;