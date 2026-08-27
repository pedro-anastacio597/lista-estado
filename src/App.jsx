import { useState, useEffect } from 'react'
import Estados from './componentes/Estados'
import './App.css'

function App() {
  const [estados, seEstados] = useState([])

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((resposta) => resposta.json())
    .then((dados) => seEstados(dados))
  }, [])

  return(
    <div className='body'>
      {estados.map((dados) => (
        <Estados 
          key= {dados.id} 
          nome= {dados.nome} 
          sigla= {dados.sigla} 
          regiao= {dados.regiao.nome}/>
      ))}
    </div>
  )
}

export default App
