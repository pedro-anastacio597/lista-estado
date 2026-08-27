function Estados({key, nome, sigla, regiao}) {
    return(
        <div className="card-state">
             <h1>{sigla}</h1>
             <p>{nome}</p>
             <p id="regiao">Região{regiao}</p>
        </div>
    )
}

export default Estados;