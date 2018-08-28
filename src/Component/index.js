
import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../Actions/PostActions'; 
import { GMap } from './Home/Map/Map'

class MapDashboard extends React.Component {

    componentWillMount(){
        this.props.fetchData();
        console.log('this.props.First', this.props)
    }

    render(){
        // console.log('this.props.First', this.props, this.state)
        // this.state.data = (this.state || {}).data || [];
        // let posts = this.state.data.map(post => (
        //     <div key={post.id}>
        //         <h3>{post.title}</h3>
        //         <h6>{post.body}</h6>
        //     </div>
        // ));
        return (
            <div>
                {/* fhello budy {JSON.stringify(this.props.First)} */}
                <GMap/>
            </div>

        )
    }
}

const mapStateToProps = state => {
    console.log('items: ', state.items);
    return ({
        data: state.items
    })
}


// export default MapDashboard;
export default connect(mapStateToProps, { fetchData })(MapDashboard);


