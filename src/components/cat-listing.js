import React from "react";

import CatContainer from "./cat-component";

class Cat {
  constructor(name, age, eyeColor, profileUrl) {
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
    this.profileUrl = profileUrl;
  }
}

function CatListing() {
  const catA = new Cat(
    "Phyu lay",
    2,
    "green",
    "https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg?w=590&h=800&62C6A28D-D2CA-4635-AA7017C94E6DDB72"
  );
  const catB = new Cat(
    "MeeNyoung",
    7,
    "yellow",
    "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2"
  );

  const catC = new Cat(
    "MeeNyoung",
    7,
    "yellow",
    "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2"
  );

  const cats = [catA, catB, catC];

  return (
    <div>
      <h1>Cat Listing</h1>
      <div style={{ width: "100%" }}>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {cats.map((cat) => (
            <CatContainer cat={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatListing;
