import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import DogContainer from "./dog-components";

function DogListing() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/15")
      .then((response) => response.json())
      .then((data) => setDogs(data.message))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Dog Listing</h1>

      <Grid container spacing={1}>
        {dogs.map((dog, i) => (
          <Grid key={i} item xs={12} md={4}>
            <DogContainer dog={dog} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DogListing;
