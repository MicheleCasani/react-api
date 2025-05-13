import { useState, useEffect } from 'react'
import axios from 'axios'






function App() {
  const [actors, setActors] = useState([])



  const actorsApi = () => {
    axios
      .get('https://lanciweb.github.io/demo/api/actors/')
      .then((response) => {
        setActors(response.data)
      })
      .catch((error) => {
        console.error(error)
      });
  }

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

                  <div className="col-5 d-flex align-items-center">
                    <img
                      src={actor.image}
                      alt={actor.name}
                      className="img-fluid rounded"
                    />
                  </div>


                  <div className="col-7">
                    <div className="card-body">
                      <h5 className="card-title">{actor.name}</h5>
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
      </div>



    </>
  )
}

export default App
