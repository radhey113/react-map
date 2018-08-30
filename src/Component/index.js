
import React from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../Actions/GetAction'; 
import GMap from './Home/Map/Map';
import Search from './Home/SearchPlace/Search';
import ListOfLocations from './Home/ListOfLocations/LocationList';
import './style.css';

class MapDashboard extends React.Component {

    constructor(props){

        /** Pass props to base class **/ 
        super(props);

        /** Current state **/ 
        this.state = {
           activeAddress: '',
           allAddress: [],
           searchValue: ''
        }
        
        /** bind events with class local refference **/ 
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


    /** component will receive props event receive props when they changed **/
    componentWillReceiveProps(props){
        
        let allAddress = this.state.allAddress;
        let index = allAddress.findIndex(location => location.place.formatted_address === props.activeAddress.place.formatted_address);

        /** check duplicacy **/ 
        if(index < 0){
            this.setState({
                searchValue: '',
                activeAddress: '',
                allAddress: [...this.state.allAddress, props.activeAddress],
                duplicateLocation: false
            });    
        }
    }

    /** Submit location to state **/ 
    async submit(e){
        e.preventDefault(); 
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


