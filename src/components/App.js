import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((response) => response.json())
    .then(toysArray=> setToys(toysArray))
  }, [])
 
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addedToy(submittedToy){
    setToys = (toys=> [... toys, submittedToy])
  }

 function handleDelete(id){
  const updatedToyArray = toys.filter((toy)=> toy.id !== id)
  setToys(updatedToyArray)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addedToy={addedToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleDelete}/>
    </>
  );
}

export default App;