import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  // Stato per memorizzare la lista degli attori ottenuti dalla chiamata API
  const [actors, setActors] = useState([])

  const [actresses, setActresses] = useState([])


  // Funzione per effettuare la chiamata HTTP e recuperare i dati degli attori
  const actorsApi = () => {
    axios
      // URL dell'API
      .get('https://lanciweb.github.io/demo/api/actors/')
      .then((response) => {
        setActors(response.data) // Salva i dati ottenuti nello stato
      })
      .catch((error) => {
        console.error(error) // Mostra errori in console in caso di problemi
      });

    // seconda chiamata axios
    axios
      // URL dell'API
      .get('https://lanciweb.github.io/demo/api/actresses/')
      .then((response) => {
        setActresses(response.data) // Salva i dati ottenuti nello stato
      })
      .catch((error) => {
        console.error(error) // Mostra errori in console in caso di problemi
      });


  }

  // useEffect che chiama actorsApi() al primo caricamento del componente
  useEffect(() => {
    actorsApi();
  }, []);

  return (
    <>
      <div className="container mt-4">

        {/* Intestazione con titolo */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <h1>Actors API</h1>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {actors.map((actor) => (
            <div key={actor.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 p-3">
                <div className="row g-0">
                  {/* Griglia per mostrare l'immagine degli atttori */}
                  <div className="col-5 d-flex align-items-center">
                    <img
                      src={actor.image}
                      alt={actor.name}
                      className="img-fluid rounded"
                    />
                  </div>
                  {/* Griglia per mostrare i dati degli atttori */}
                  <div className="col-7">
                    <div className="card-body">
                      <h5>{actor.name}</h5>
                      <p className="card-text"><strong>Age:</strong> {actor.birth_year}</p>
                      <p className="card-text"><strong>Nationality:</strong> {actor.nationality}</p>
                      <p className="card-text"><strong>Birth:</strong> {actor.birth_year}</p>
                      <p className="card-text"><strong>Biography:</strong> {actor.biography}</p>
                      <p className="card-text"><strong>Awards:</strong> {actor.awards}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
        {/* Intestazione con titolo */}
        <div className="row mb-4 mt-4">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <h1>Actresses API</h1>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {actresses.map((actress) => (
            <div key={actress.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 p-3">
                <div className="row g-0">
                  {/* Griglia per mostrare l'immagine degli atttori */}
                  <div className="col-5 d-flex align-items-center">
                    <img
                      src={actress.image}
                      alt={actress.name}
                      className="img-fluid rounded"
                    />
                  </div>
                  {/* Griglia per mostrare i dati degli atttori */}
                  <div className="col-7">
                    <div className="card-body">
                      <h5>{actress.name}</h5>
                      <p className="card-text"><strong>Age:</strong> {actress.birth_year}</p>
                      <p className="card-text"><strong>Nationality:</strong> {actress.nationality}</p>
                      <p className="card-text"><strong>Birth:</strong> {actress.birth_year}</p>
                      <p className="card-text"><strong>Biography:</strong> {actress.biography}</p>
                      <p className="card-text"><strong>Awards:</strong> {actress.awards}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
