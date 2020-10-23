import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";

const DogContainer = (props) => {
  const { isFav, onChangeFav } = props; //Destructring
  const dog = props.dog;

  return (
    <Card
      style={{
        marginBottom: "25px",
        backgroundColor: "#FFEDF9",
        textAlign: "left",
      }}
    >
      <CardContent>
        <img src={dog.imageUrl} style={{ maxWidth: "100%" }} />

        <Typography variant="h5" component="h2">
          My Name is <b style={{ color: "red" }}>{dog.name}</b>
        </Typography>
        <Typography color="textSecondary">Breed: {dog.type}</Typography>
        <Typography variant="body2" component="p">
          <b>Intro about me : </b>
          {dog.intro}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="fav" onClick={onChangeFav}>
          {isFav && <FavoriteIcon style={{ color: "red" }} />}
          {!isFav && <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default DogContainer;
