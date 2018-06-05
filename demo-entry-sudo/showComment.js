import React, { Component } from "react";

class ShowComment extends Component {

    static defaultProps = {
        userInfo: {
            img: "http://www.baidu.com",
            imgInfo: "百度图片",
            name: "benben",
            text:"提取组件",
            date:new Date().toLocaleTimeString()
        }
    }

    render() {

        return <div>
            <div className="comment">
                <UserInfo userInfo={this.props.userInfo} />
            </div>

            <div className="">
                {this.props.userInfo.text}
            </div>

            <div>
                {this.props.userInfo.date}
            </div>

        </div>
    }
}

export default ShowComment;

function Avatar(props) {
    return <img className="img-wraper" src={props.user.img} alt={props.user.imgInfo} />
}

function UserInfo(props) {
    return <div>
        <Avatar user={props.userInfo} />
        <div className="user">
            {props.userInfo.name}
        </div>
    </div>
}