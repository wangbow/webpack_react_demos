import React,{Component} from "react";

export function Comment(){
    let auth = {
        url:"www.baidu",
        name:"benben"
    }
   return (<div className="comment">
             <UserInfo auth={auth} />
             <CommentInfo text="text" date="2121" />
       </div>)
}

export function UserInfo(props){
    return <div ClassName="UserInfo">
        <img src={props.auth.url} alt={props.auth.name}/>
        <div className="user-info-name">{props.auth.name} </div>
      </div>
}

export function CommentInfo(props){
    return <div>
                <div className="comment-text"> {props.text}</div>
                <div className="comment-date"> {props.date} </div>
        </div>
}