import React, { useState } from "react";

function ToyCard({ toyInfo }) {
  const { id, name, image, likes } = toyInfo;
  const [likesState, setLikesState] = useState(likes);
  const [isDisplayCard, setIsDisplayCard] = useState(true);
  const api = "http://localhost:3001/toys";

  const handleDelete = () => {
    fetch(api + `/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        setIsDisplayCard(false);
      });
  };

  const handleLike = () => {
    fetch(api + `/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: likesState + 1 }),
    })
      .then((res) => res.json())
      .then(() => {
        setLikesState(likesState + 1);
      });
  };

  if (isDisplayCard) {
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likesState} Likes </p>
        <button className="like-btn" onClick={handleLike}>
          Like {"<3"}
        </button>
        <button className="del-btn" onClick={handleDelete}>
          Donate to GoodWill
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default ToyCard;
