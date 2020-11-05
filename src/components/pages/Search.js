import React from "react";
import API from "../utils/API";
import SearchCard from "../SearchCard";

class Search extends React.Component {

  state = {
    pictureMap: []
  };
  

  apiDogCeo = (mySearch) => {
    API.search(mySearch)
      .then(res => this.setState({ pictureMap: res.data.message }))
      .catch(err => console.log(err));
  };

  componentDidMount(){
   this.apiDogCeo("https://dog.ceo/api/breed/hound/images"); 
  }
  

  render() {
    return (
      
      <div>
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
