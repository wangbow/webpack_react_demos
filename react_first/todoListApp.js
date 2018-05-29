import React, { Component } from "react";
import TodoList from "./todoList";

class TodoListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text:""
        }
    }

    /**
     * 监听输入框的值变化
     */
    handleChange = (e) => {
        this.setState({
            text:e.target.value
        })
    }

    /**
     * 点击btn，提交数据
     */

    handleSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.text){
            return ;
        }

        let newItem = {
            text:this.state.text,
            date:new Date().getTime()
        }

        this.setState((preState)=>({
            text:"",
            items:preState.items.concat(newItem)
        }))
    }

    render() {
        let { items, text } = this.state;
        return <div>
            <h3> todolist</h3>
            <TodoList items={items} />
            <form>
                <input type="text" value={text} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}> add# {items.length+1}</button>
            </form>
            
        </div>
    }
}

export default TodoListApp;