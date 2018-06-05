import React, { Component } from "React";
import TodoList from "./todoList";

class TodoListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        if (!this.state.text) {
            return;
        }

        let newItem = {
            text: this.state.text
        }

        this.setState((preState) => ({
            items: preState.items.concat(newItem),
            text: ""
        }))
    }

    render() {
        return <div>

            <div>TO DO </div>
            <TodoList items={this.state.items} />

            <input type="text" onChange={this.handleChange} value={this.state.text} />
            <button onClick={this.handleClick}> Add#{this.state.items.length}</button>

        </div>
    }
}

export default TodoListApp;