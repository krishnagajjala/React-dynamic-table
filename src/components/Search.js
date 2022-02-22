import React, { Component } from "react";
import List from "./List";

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      places: [],
      splaces: [],
      value : ""
    };

  }

  /* DO NOT MODIFY */
  componentDidMount() {
    const allPlaces = [];
    const endpoint =
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    fetch(endpoint)
      .then(data => data.json())
      .then(results => {
        allPlaces.push(...results)
        console.log(allPlaces)
        this.setState({ places: allPlaces })
      })
      .catch(error => console.log(error));
  }

  handleChange(event) {
    var value2 = event.target.value;
    this.setState({value: value2});
    this.handlelist(value2)
  }

  handlelist(searchr) {
    if (searchr == '' || searchr == " "){
      let splaces2 = []
      this.setState({splaces : splaces2});
    } else {
      let re = new RegExp(searchr, 'i')
      let splaces1 = this.state.places
      let splaces2 = splaces1.filter(x => x.city.match(re) || x.state.match(re));
      this.setState({splaces : splaces2});
    };
  }


  render() {
    return (
      <div>
      <fieldset>
        <legend>Search for city or state:</legend>
        <input value={this.state.value}
               onChange={this.handleChange} />
      </fieldset>
      <List listr={this.state.splaces}/>
      </div>
    );
    
  }

}
export default Search;
