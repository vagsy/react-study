import React,{Component} from 'react';
import {render} from 'react-dom';
/**
 * 受控组件 受状态控制
 * 非受控组件
 *
 */
class Input extends React.Component{
    constructor(){
        super();
        this.state = {val:''};
    }
    handleChange = (event)=>{
        let val = event.target.value;
        this.setState({val});
    }
    render(){
        return (
            <div>
                <input onChange={this.handleChange} type="text" value={this.state.val}/>
                <p>{this.state.val}</p>
            </div>
        )
    }
}
render(<Input/>,window.app);