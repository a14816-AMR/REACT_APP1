import React, { useState } from 'react';
function Formulario() {
    // Estado único "formData" guarda todos os campos do formulário num objeto
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        morada: '',
        codigoPostal:'',
        mensagem: ''
    });
    // Guarda os dados submetidos (para mostrar depois do envio)
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);
    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setDadosSubmetidos(formData); // guarda os dados preenchidos
    }
    // Limpa o formulário e os dados apresentados
    function limparFormulario() {
        setFormData({ nome: '', email: '', telefone: '', morada: '',codigoPostal: '',mensagem: '' });
        setDadosSubmetidos(null);
    }
    return (
        <div className="mt-4 row">
            <div class="col-8">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-control" value={formData.nome} onChange={(e) =>

                            setFormData({ ...formData, nome: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={formData.email} onChange={(e) =>

                            setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <input type="tel" className="form-control" value={formData.telefone} onChange={(e) =>

                            setFormData({ ...formData, telefone: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Morada</label>
                        <input type="text" className="form-control" value={formData.morada} onChange={(e) =>

                            setFormData({ ...formData, morada: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Codigo Postal</label>
                        <input type="text" className="form-control" value={formData.codigoPostal} onChange={(e) =>

                            setFormData({ ...formData, codigoPostal: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Mensagem</label>
                        <textarea className="form-control" rows="3" value={formData.mensagem} onChange={(e) =>

                            setFormData({ ...formData, mensagem: e.target.value })}></textarea>
                    </div>


                    {/* Botões de ação */}
                    <button className="btn btn-success mr-2">Enviar</button>

                    <button type="button" className="btn btn-outline-secondary"

                        onClick={limparFormulario}>Limpar</button>
                </form>
            </div>
            
            <div class="col-4">
                {/* Mostra os dados submetidos se existirem */}
                    {dadosSubmetidos && (
                        <div className="card mt-4">
                            <div className="card-body">
                                <h5 className="card-title">Dados Recebidos</h5>
                                <p><strong>Nome:</strong> {dadosSubmetidos.nome}</p>
                                <p><strong>Email:</strong> {dadosSubmetidos.email}</p>
                                <p><strong>Telefone:</strong> {dadosSubmetidos.telefone}</p>
                                <p><strong>Morada:</strong> {dadosSubmetidos.morada}</p>
                                <p><strong>Codigo Postal:</strong> {dadosSubmetidos.codigoPostal}</p>
                                <p><strong>Mensagem:</strong> {dadosSubmetidos.mensagem}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
    );
}
export default Formulario;