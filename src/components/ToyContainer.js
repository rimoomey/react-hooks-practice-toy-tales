import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({isNewToySubmitted}) {
  const api = "http://localhost:3001/toys";

  const [toyList, setToyList] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setToyList(data);
      });
  }, [isNewToySubmitted]);

  const mappedCards = toyList.map(toy => {
    const {id} = toy;
    return <ToyCard key={id} toyInfo={toy}/>
  })

  console.log(toyList);

  return <div id="toy-collection">{mappedCards}</div>;
}

export default ToyContainer;
