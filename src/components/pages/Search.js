import React from "react";
import API from "../../utils/API";
import SearchCard from "../SearchCard";

class Search extends React.Component {

  state = {
    dogBreed:"",
    breeds:[],
    pictureMap: []
  };


  apiDogCeo = (mySearch) => {
    API.search(mySearch)
      .then(res => this.setState({ pictureMap: res.data.message }))
      .catch(err => console.log(err));
  };

  getAllBreeds(){
    API.search("https://dog.ceo/api/breeds/list")
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getAllBreeds();
    this.apiDogCeo("https://dog.ceo/api/breed/hound/images");
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value =  event.target.value.toLowerCase().trim();
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
      dogBreed:"",
      pictureMap: []
    });
  };

  render() {
    return (

      <div>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <datalist id="breeds">
{this.state.breeds.map(breed=> <option>{breed}</option>)}
          </datalist>
          <input
            value={this.state.dogBreed}
            name="dogBreed"
            list="breeds"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Pick the Dog Breed"
          />
          <button>Submit</button>
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
