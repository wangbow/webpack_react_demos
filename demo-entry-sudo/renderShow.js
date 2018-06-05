import React, { Component } from "react";

class ShowWarning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true
        }
    }

    handleClick = () => {
        this.setState((preState) => ({
            flag: !preState.flag
        }))
    }

    render() {

        return <div>
            <WarningBanner warn={this.state.flag}/>
            <button onClick={this.handleClick}>
                {this.state.flag ? "hide" : "show"}
            </button>
        </div>
    }
}

export default ShowWarning;


function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (<div>
        warning
        </div>)
}