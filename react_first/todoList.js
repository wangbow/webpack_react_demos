import React ,{Component} from "react";

class TodoList extends Component{
    render(){
        let {items} = this.props;
        return <ul>
              { items&&items.length>0 ?  items.map((item)=>{
                  return <li show_key={item.date}> {item.text}</li>
              }):""}
            </ul>
    }
}

export default TodoList;