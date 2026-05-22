import { useState } from 'react';
// useState cria um "estado" dentro do componente.
// Quando o estado muda, o componente é renderizado novamente.
function Contador() {
    const [contagem, setContagem] = useState(0);
    function aumentar() {
        setContagem(contagem + 1);
    }
    function mais10() {
        setContagem(contagem + 10);
    }
    function diminuir() {
        if (contagem > 0) setContagem(contagem - 1);
    }
    function menos10() {
        if (contagem > 0) setContagem(contagem - 10);
    }
    function reiniciar() {
        setContagem(0);
    }
    return (
        <div className="text-center mt-4">
            <h3>Contador: {contagem}</h3>
            {/* Cada botão altera o estado de forma diferente */}
            <button className="btn btn-primary mr-2" onClick={aumentar}>
                +
            </button>
            <button className="btn btn-info mr-2" onClick={mais10}>
                +10
            </button>
            <button className="btn btn-secondary mr-2" onClick={diminuir}>
                -
            </button>
            <button className="btn btn-secondary mr-2" onClick={menos10}>
                -10
            </button>
            <button className="btn btn-danger" onClick={reiniciar}>
                Reset
            </button>
        </div>
    );
}
export default Contador;