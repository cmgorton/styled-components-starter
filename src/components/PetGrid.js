import React, { useEffect, useState } from "react";
import axios from "axios";
import PetCard from "./PetCard";

// Define Styled Components outside of the render method
// It is important to define your styled components outside of the render method, otherwise it will be recreated on every single render pass. Defining a styled component within the render method will thwart caching and drastically slow down rendering speed, and should be avoided.

export default function PetGrid() {
  // https://dog.ceo/api/breed/hound/images/random/15
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("mix");

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/15`)
      .then(response => {
        const doggos = response.data.message;
        console.log(doggos);
        setPets(doggos);
      })
      .catch(error => {
        console.log("Sorry no doggos", error);
      });
  }, [breed]);

  return (
    <div className="container">
      <button onClick={() => setBreed("mastiff")}>Mastiff</button>
      <button onClick={() => setBreed("labrador")}>Labrador</button>
      <div className="entry">
        {pets.map(item => {
          return <PetCard key={item} breed={breed} imgUrl={item} />;
        })}
      </div>
    </div>
  );
}
