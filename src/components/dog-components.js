import React from "react";
import Card from "@material-ui/core/Card";
import { CardActions, CardContent, Container } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";

const DogContainer = (props) => {
  const { dog, index } = props;

  return (
    <Card variant="outlined">
      <CardContent style={{ paddingBottom: 0, marginBottom: 0 }}>
        <img src={dog} style={{ height: 300 }}></img>
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

export default DogContainer;
