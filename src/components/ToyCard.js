import React from "react";

function ToyCard({id, name, image, likes, handleDelete}) {


  function deleteFromDatabase(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(()=> handleDelete(id))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={deleteFromDatabase}>
        Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;