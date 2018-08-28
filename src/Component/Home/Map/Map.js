
import React from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

export class GMap extends React.Component {

    constructor(){
        super();
        this.state = {
            selectedPlace: {
                name: "chandigarh"
            }
        }
    }

    render(){
        return (
            <Map google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick} name={'current-locaiotn'} />
                <InfoWindow onClose = {this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

GoogleApiWrapper({
    apiKey: 'AIzaSyBIENN3PQIH8VO3x1vBEl7TG9Tmtuq88CM'
})(GMap);
export default GMap;