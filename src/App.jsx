import { useState, useEffect } from 'react'
import axios from 'axios'






function App() {

  const actorsApi = () => {
    axios
      .get('https://lanciweb.github.io/demo/api/actors/')
      .then((response) => {
        console.log(response.data)
      })
  }

  useEffect(() => {
    actorsApi();
  }, []);

  return (
    <>

    </>
  )
}

export default App
