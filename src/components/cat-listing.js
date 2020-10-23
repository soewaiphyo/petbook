import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import CatContainer from "./cat-component";

function CatListing() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.thecatapi.com/v1/images/search?limit=15&order=Desc&apikey=6097d30a-d890-4c07-b605-b798e19a7a80"
    )
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Cat Listing</h1>

      <Grid container spacing={1}>
        {cats.map((cat, i) => (
          <Grid key={i} item xs={12} md={4}>
            <CatContainer cat={cat} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CatListing;
