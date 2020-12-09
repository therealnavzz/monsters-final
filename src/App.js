import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list-component";
import { Search } from "./components/search/search-component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsterNames: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((resp) => this.setState({ monsterNames: resp }));
  }
  render() {
    const { monsterNames, searchField } = this.state;
    const filteredMons = monsterNames.filter((monst) =>
      monst.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search
          handlerEvent={(e) => {
            this.setState({ searchField: e.target.value });
          }}
          placeholder="Search Monsters"
        ></Search>
        <CardList monster={filteredMons}></CardList>
      </div>
    );
  }
}
export default App;
