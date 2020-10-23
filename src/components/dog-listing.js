import React, { useState, useEffect } from "react";
import DogContainer from "./dog-components";

class Dog {
  constructor(name, type, age, imageUrl, intro) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.imageUrl = imageUrl;
    this.intro = intro;
  }
}
const dogOne = new Dog(
  "Casifier",
  "Pull Dog",
  "6 months",
  "http://cdn.akc.org/content/article-body-image/pugsmalldogs.jpg",
  "Super active type. Love chicken wings and carrots."
);

const dogTwo = new Dog(
  "Howl",
  "Havanese Dog",
  "2 years",
  "http://cdn.akc.org/content/article-body-image/havanesesmalldogs.jpg",
  "love to play in sunlight. scare of height."
);
const dogThree = new Dog(
  "Sophie",
  "Papillon",
  "4 months",
  "http://cdn.akc.org/content/article-body-image/papillonsmalldogs.jpg",
  "Love beach and swimming pool. love brocoli and banana."
);
const dogFour = new Dog(
  "Snowy",
  "Cavking Charless",
  "9 months",
  "http://cdn.akc.org/content/article-body-image/cavkingcharlessmalldogs.jpg",
  "Love Steak and bacon. love to play with buddies"
);
const dogFive = new Dog(
  "Jackie",
  "Bostonterrier",
  "11 months",
  "http://cdn.akc.org/content/article-body-image/bostonterriersmalldogs.jpg",
  "Love Steak and bacon. love to play with buddies"
);
const dogs = [dogOne, dogTwo, dogThree, dogFour, dogFive];
const FAVOURITE_DOGS = "favourite-dogs";

function DogListing() {
  const [favItems, setFavItems] = useState([]);

  useEffect((props) => {
    // first time running
    const favouriteItems = JSON.parse(localStorage.getItem(FAVOURITE_DOGS));
    if (favouriteItems) setFavItems(favouriteItems);
  }, []);

  return (
    <div className="App">
      <div className="container-center">
        <h1>Cute Dogs are here!</h1>
        {dogs.map((dog, i) => (
          <DogContainer
            dog={dog}
            key={i}
            isFav={favItems.findIndex((item) => item === dog.name) >= 0} //default false
            onChangeFav={() => {
              const newFavItems =
                favItems.findIndex((item) => item === dog.name) >= 0
                  ? favItems.filter((item) => item !== dog.name)
                  : [...favItems, dog.name];
              localStorage.setItem(FAVOURITE_DOGS, JSON.stringify(newFavItems));
              setFavItems(newFavItems);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default DogListing;
