import React from 'react'

export default function DiscoverCard(props) {
    return (
        <div>
            <div>
                <h1>Make New Friends</h1>
                <h2>Click the thumbs up on any pup you'd love to pet</h2>
                <div className="card" style={{ width: "15vw" ,height: "5vh" }}>
                    <img className="card-img-top" src={props.backgroundImage}></img>
                    <button className="card-btn pass" onClick={props.handleSkipChange}>
                        Skip this Pupper
                    </button>
                    <button className="card-btn pick" onClick={props.handleMeetChange}>
                        Meet this Doggo
                     </button>
                     <h2>You've Pet {props.count} Best Friends</h2>
                </div>
        
            </div>
        </div>
    )
}
