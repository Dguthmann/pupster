import React from "react";
import API from "../../utils/API";
import SearchCard from "../SearchCard";

class Search extends React.Component {

  state = {
    dogBreed:"",
    pictureMap: []
  };


  apiDogCeo = (mySearch) => {
    API.search(mySearch)
      .then(res => this.setState({ pictureMap: res.data.message }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.apiDogCeo("https://dog.ceo/api/breed/hound/images");
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value =  event.target.value.toLowerCase();
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.apiDogCeo(`https://dog.ceo/api/breed/${this.state.dogBreed}/images`)

    this.setState({
      dogBreed:""
    });
  };

  render() {
    return (

      <div>
        <form className="form">
          <input
            value={this.state.dogBreed}
            name="dogBreed"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Pick the Dog Breed"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>

        {this.state.pictureMap.map(mydog => (
          <SearchCard
            mydog={mydog}
          />
        ))}
      </div>
    );
  }
}

export default Search;
