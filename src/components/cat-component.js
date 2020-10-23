import React from "react";
import { Card, CardActions, Container } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const CatContainer = ({ cat }) => {
  return (
    <Card key={cat.id} variant="outlined">
      <CardContent style={{ paddingBottom: 0, marginBottom: 0 }}>
        <img src={cat.url} style={{ height: 300 }}></img>
      </CardContent>
      <CardActions>
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Container>
      </CardActions>
    </Card>
  );
};

export default CatContainer;
