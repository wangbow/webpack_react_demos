import React,{Component} from "react";
import {Comment} from "../util";

class Hello extends Component{

    render(){
        return <h1> hell0,"::"+{this.props.name} 
                    <Comment />
        
                </h1>
    }
}

export default Hello;