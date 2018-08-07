import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {done: false};
        this.removeTodo = this.removeTodo.bind(this);
        this.checkboxChanged = this.checkboxChanged.bind(this);
    }

    removeTodo(){
        this.props.removeTodo(this.props.entry);
    }

    checkboxChanged(event){
        if (event.target.checked){
            this.setState({done: true});
            this.props.check(this.props.entry);
        }else{
            this.setState({done: false});
            this.props.uncheck(this.props.entry);
        }
    }

    render(){
        let todo_entry_class = this.state.done ? "Todo-entry-done" : "Todo-entry-notdone";

        return(
            <ul>
                <li className="Todo">
                    <input type="checkbox" onChange={this.checkboxChanged}/>
                    <div className={todo_entry_class}>{this.props.entry}</div> 
                    <div className="Todo-delete" onClick={this.removeTodo}>X</div>
                </li>
            </ul>
        );
    }
}

export default Todo;