import React from 'react'

export default function SearchCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.mydog} src={props.mydog} />
            </div>
        </div>
    )
}
