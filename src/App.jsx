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
        {/* Intestazione con titolo*/}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <h1>Actors API</h1>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {actors.map((actor) => (
            <div key={actor.id} className="col-12">
              <div className="card p-3">
                <h3 className="card-title">{actor.name}</h3>
                <p className="card-text">Age: {actor.birth_year}</p>
                <p className="card-text">Nationality: {actor.nationality}</p>
                <p className="card-text">Birth: {actor.birth_year}</p>
                <p className="card-text">Biography: {actor.biography}</p>
                <p className="card-text">Awards: {actor.awards}</p>
                <img src={actor.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>



    </>
  )
}

export default App
