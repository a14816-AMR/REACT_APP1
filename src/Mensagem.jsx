// Um componente pode receber "props" (dados enviados pelo componente pai)
function Mensagem(props) {
// Aqui usamos props.texto, enviada pelo componente App
    return (
        <div className="alert alert-info text-center" role="alert">
            {props.mytext}
        </div>
        );
    }
export default Mensagem;