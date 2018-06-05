import React,{Component} from "react";

class ListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : [1,2,3,4,5]
        }

    }

    render(){
        let showItems = this.state.items.map( (item,index)=>{
            return <li key={index}>  {item} </li>
        })
        return <div>
                 <ul> {showItems}</ul>
            </div>
    }
}

export default ListItem;