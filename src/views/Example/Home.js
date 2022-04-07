import React from 'react';
import { withRouter } from "react-router";
//HOC: higher order component
import Color from '../HOC/Color';
class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    render() {
        console.log('>>> Check props: ', this.props)
        return (
            <div>
                Hello from Home
            </div>
        )
    }
}
// export default withRouter(Home);
export default Color(Home);