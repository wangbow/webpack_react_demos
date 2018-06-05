import React, { Component } from "react";
import Remarkable from "remarkable";

class Remark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
  
    getRawMarkup = () => {
        let md = new Remarkable();
        return {
            __html :md.render(this.state.text)
        }
    }

    render() {
        return <div>
            <div> Input</div>
            <input type="text" value={this.state.text} onChange={this.handleChange} />
            <h3>Output</h3>
            <div dangerouslySetInnerHTML={this.getRawMarkup()}></div>
        </div>
    }
}

export default Remark;