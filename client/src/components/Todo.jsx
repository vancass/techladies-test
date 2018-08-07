import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component{
    constructor(props){
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
        this.checkboxChanged = this.checkboxChanged.bind(this);
    }

    removeTodo(){
        this.props.removeTodo(this.props.entry);
    }

    checkboxChanged(event){
        if (event.target.checked){
            this.props.check(this.props.entry);
        }else{
            this.props.uncheck(this.props.entry);
        }
    }

    render(){
        let todo_entry_class = this.props.status ? "Todo-entry-done" : "Todo-entry-notdone";
        let checked = this.props.status ? true : false;

        return(
            <ul>
                <li className="Todo">
                    <input type="checkbox" checked={checked} onChange={this.checkboxChanged}/>
                    <div className={todo_entry_class}>{this.props.entry}</div> 
                    <div className="Todo-delete" onClick={this.removeTodo}>X</div>
                </li>
            </ul>
        );
    }
}

export default Todo;