
import React from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../Actions/GetAction'; 
import GMap from './Home/Map/Map';
import Search from './Home/SearchPlace/Search';
import ListOfLocations from './Home/ListOfLocations/LocationList';
import './style.css';

class MapDashboard extends React.Component {

    constructor(props){
        super(props);

        this.state = {
           activeAddress: '',
           allAddress: [{
            place:"Chandigarh",
            country: "india"
          }],
           searchValue: ''
        }
        
        this.changeAddress = this.changeAddress.bind(this);
        this.submit = this.submit.bind(this);
        this.deleteLocation = this.deleteLocation.bind(this);
    }

    /** Delete location from the state **/ 
    deleteLocation(index){
        let allAddress = this.state.allAddress;
        allAddress.splice(index, 1);
        this.setState({ allAddress: allAddress })
    }

    /** Change address or location**/ 
    changeAddress(ele){
        
        this.setState({
            searchValue: ele.target.value
        });
        let newElement = ele.target;
        this.props.getLocation(newElement);  
    }

    /** Submit location to state **/ 
    async submit(e){
        e.preventDefault();
        this.setState({
            searchValue: '',
            activeAddress: '',
            allAddress: [...this.state.allAddress, this.props.activeAddress]
        });    
    }

    render(){

        return (
            <div>
                <div className="mapStyle">
                    <GMap
                        markersLocations={this.state.allAddress}
                    />
                </div>
                <div className="searchStyle">
                    <Search 
                        address={this.state.activeAddress} 
                        handleChange={this.changeAddress} 
                        searchValue={this.state.searchValue}
                        eRef={this.myRef}
                        submit={this.submit}    
                        />
                </div>
                <div>
                    <ListOfLocations locationList={this.state.allAddress} removeLocation={(index)=> this.deleteLocation(index)} />
                </div>
            </div>
            

        )
    }
}

const mapStateToProps = state => {
    return ({
        activeAddress: state.activeAddress
    })
}


// export default MapDashboard;
export default connect(mapStateToProps, { getLocation })(MapDashboard);


