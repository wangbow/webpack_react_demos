import React, { Component } from "react";

class FormTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            value:"lime"
        }
    }

    handClickSubmit = () => {
        alert(this.state.text +"seect:" +this.state.value);
    }

    handChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleChangeSelect = (e) =>{
        this.setState({
            value: e.target.value
        })
    }


    render() {
        return <form onSubmit={this.handClickSubmit}>
            <input type="text" value={this.state.text} onChange={this.handChange} />
            <select value={this.state.value} onChange={this.handleChangeSelect}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            <input type="submit" value="submit" />
        </form>
    }
}

export default FormTest;