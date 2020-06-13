import React from "react"
class LandingPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const data= this.props.location;
        // console.log(data['data']);
        return(
            <div>
                <div style = {{color:data['data']['color'],width:300,height:500}}>{data['data']['cust_name']}</div>
            </div>
        )
    }
}
export default LandingPage;