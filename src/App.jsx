import { useState } from 'react'
import Mensagem from './Mensagem'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Alerta from './Alerta'
import Formulario from './Formulario'
import Contador from './Contador'
function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Olá React!</h1>
      <p className="lead text-center">
        Este é o teu primeiro componente React.
      </p>
      {/* Evento onClick em React usa camelCase e chama uma função */}
      <button
        className="btn btn-success d-block mx-auto"
        onClick={() => alert('Olá, André !')}
      >
        Clica-me!
      </button>
     
     <Contador />


    <h1 className="text-center">Componentes e Props</h1>
    {/* Cada componente recebe props diferentes */}
    <Mensagem mytext="Bem-vindo à tua primeira aplicação React!" />
    <Mensagem mytext="Os componentes permitem reutilizar código!" />

    <h1 className="text-center">Tipos de alertas</h1>
    <Alerta tipo="success" texto="É um alerta de sucesso" />
    <Alerta tipo="warning" texto="É um alerta de aviso" />
    <Alerta tipo="danger" texto="É um alerta de perigo!!!" />

    <h1>Formulário</h1>
    <Formulario/>

    </div>
  );
}
export default App
