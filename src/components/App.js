import React from "react";
import axios from "axios";
//import axios from "axios";

class App extends React.Component {
  state = {};

  render() {
    // const url = "";
    // fetch(url).then(data => console.log(data));

    const fetchData = axios.get("https://www.marvel.com/characters/");
    console.log(fetchData);

    // const fetchData = async () => {
    //   const theData = await fetch("https://www.marvel.com/characters/").then(
    //     function(response) {
    //       return response.json();
    //     }
    //   );
    // };
    //console.log(fetchData);
    return (
      <div>
        <h1>Hi</h1>
        <h2>Morales</h2>
      </div>
    );
  }
}

export default App;
