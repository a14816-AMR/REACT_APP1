import { useState } from 'react'
import Mensagem from './Mensagem'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Alerta from './Alerta'
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
     


    <h1 className="text-center">Componentes e Props</h1>
    {/* Cada componente recebe props diferentes */}
    <Mensagem mytext="Bem-vindo à tua primeira aplicação React!" />
    <Mensagem mytext="Os componentes permitem reutilizar código!" />

    <h1 className="text-center">Tipos de alertas</h1>
    <Alerta tipo=" Success " texto=" Feito !!!" />
 

    </div>
  );
}
export default App
