import React,{Component} from "react";
import Hello from "../react_first/demo1";
import TimePicker from "../react_first/demo2";
import TodoListApp from "../react_first/todoListApp";
class Entry extends Component{
     
    render(){
        return <div>
                    <Hello name="world" />
                    <TimePicker />
                    <TodoListApp />
            </div>
    }
}

export default Entry;