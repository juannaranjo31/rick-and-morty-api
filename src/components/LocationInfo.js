import React from 'react'

export default function LocationInfo ({locationData}) {

    const {name, type, dimension, residents, id} = locationData;

    return (
            <div className="locationInfo-container">
                <div className="card-header">
                    Info Location
                </div>
                <div className="card-body">
                    <h3 className="card-title">Name: {name}</h3>
                    <h4 className="card-text">Type: {type}</h4>
                    <h4 className="card-text">Dimension: {dimension}</h4>
                    <h4 className="card-text">Residents: {residents.length}</h4>
                    <h4 className="card-text">Id: {id}</h4>

                </div>
            </div>
    )
}