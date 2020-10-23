import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const CatContainer = ({ cat }) => {
  return (
    <Card style={{ marginBottom: 20 }}>
      <CardContent>
        <div>
          <div>
            <img
              alt={cat.name}
              src={cat.profileUrl}
              style={{ maxWidth: "100%" }}
            ></img>
            <div style={{ textAlign: "left" }}>
              <div> Name: {cat.name}</div>
              <div> Age: {cat.age}</div>
              <div> Eye Color: {cat.eyeColor}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CatContainer;
