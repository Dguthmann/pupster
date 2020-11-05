import React from "react";
import DiscoverCard from "../DiscoverCard";
import API from "../utils/API";

class Discover extends React.Component {

  state = {
    count: 0,
    currentPic: {}
  };
  

  apiDogCeo = () => {
    API.search("https://dog.ceo/api/breeds/image/random")
      .then(res => this.setState({ currentPic: res.data.message }))
      .catch(err => console.log(err));
  };

  componentDidMount(){
   this.apiDogCeo(); 
  }
  

  handleSkipChange = event => {

    // Updating the input's state
    this.apiDogCeo();
  };

  handleMeetChange = event => {
    let yaaas = Math.floor(Math.random() * 5)
    // Updating the input's state
    if (yaaas == 0) {
      this.setState({
        count: this.state.count + 1,
      });
      this.apiDogCeo();
    }
    else {
      this.apiDogCeo();
    }
  }



  render() {
    return (
      
      <div>
        <DiscoverCard backgroundImage={this.state.currentPic} count={this.state.count} handleSkipChange={this.handleSkipChange} handleMeetChange={this.handleMeetChange}/>
      </div>
    );
  }
}

export default Discover;
