import React from "react";
import "./App.css";

import CatListing from "./components/cat-listing";
import DogListing from "./components/dog-listing";

function App() {
  return (
    <div className="App">
      <div style={{ width: "100%" }}>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <CatListing></CatListing>
          <DogListing></DogListing>
        </div>
      </div>
      );
    </div>
  );
}

export default App;
