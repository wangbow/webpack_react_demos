import React,{Component} from "react";


class TimePicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            senconds : 0
        }
    }

    componentDidMount(){
        this.time = window.setInterval( ()=>{
            this.ticker();
        },1000)
    }

    ticker = () =>{
        this.setState((preState)=>({
            senconds:preState.senconds +1
        }))
    }

    componentWillUnmount(){
        window.clearInterval(this.time);
    }

    render(){
        return <div> senconds: {this.state.senconds} </div>
    }
}

export default TimePicker;