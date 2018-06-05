import React, { Component } from "react";
import Hello from "../demo-shouye-list/hello";
import TimePicker from "../demo-shouye-list/timePicker";
import TodoListApp from "../demo-shouye-list/todo/todoListApp";
import Remark from "../demo-shouye-list/remark";
import ShowComment from "../demo-entry-sudo/showComment";
import Toggle from "../demo-entry-sudo/toggle";
import ShowWarning from "../demo-entry-sudo/renderShow";
import ListItem from "../demo-entry-sudo/listItem";
import FormTest from "../demo-entry-sudo/formTest";


class Entry extends Component {

    render() {
        return <div>
            <h3>静态输出hello,world </h3>
            <Hello name="hello world" />
            <h3>时间显示: </h3>
            <TimePicker />
            <h3>todo列表: </h3>
            <TodoListApp />
            <h3>text输入转markdown格式: </h3>
            <Remark />
            <h3>组件提取</h3>
            <ShowComment />
            <h3>按钮通过点击切换on/off</h3>
            <Toggle />
            <h3>文件提示组件要不要显示</h3>
            <ShowWarning />
            <h3>list列表</h3>
            <ListItem />
            <h3>form表单</h3>
            <FormTest />
            
            
        </div>
    }
}

export default Entry;