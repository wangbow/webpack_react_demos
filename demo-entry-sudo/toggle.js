import React, { Component } from "react";

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            number: 0
        }
    }

    handClick = (id) => (e) => {
        this.setState((preState) => ({
            number: preState.number + 1,
            toggle: !preState.toggle
        }))
    }

    render() {
        return <div>
            <button onClick={this.handClick("22")}> {this.state.toggle ? "on" : "off"}</button>
            <div> {this.state.number} </div>
        </div >
    }
}

export default Toggle;