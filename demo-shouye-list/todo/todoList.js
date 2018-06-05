import React, { Component } from "react";

class TodoList extends Component {

    render() {
        return <div>
            <ul>
                {this.props.items && this.props.items.length > 0 ? this.props.items.map((item, index) => {
                    return <li>{item.text} </li>
                }) : ""
                }

            </ul>
        </div>
    }
}

export default TodoList;