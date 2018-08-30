
import React from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import './style.css';

export class GMap extends React.Component {

    render() {        
        /** Markers **/ 
        let markersData =  this.props.markersLocations;

        /** Map data to handle multiple markeres with location name **/ 
        let markers = markersData.map((marker, index) => {
            
            return <Marker key={index}
                        title={((marker || {}).place || {}).formatted_address}
                        name={((marker || {}).place || {}).formatted_address}
                        position={{lat: (marker || {}).lat, lng: (marker || {}).long}} />
        })        


        return (
            <Map 
                className='mapWrapperStyle'
                google={this.props.google} 
                zoom={14}  
                center={{ 
                    lat: ((markersData.length && markersData[markersData.length-1]) || {}).lat || 37, 
                    lng: ((markersData.length && markersData[markersData.length-1]) || {}).long || -122.405640 
                }}
                scrollwheel={true}
                >
                {markers}

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({})(GMap);