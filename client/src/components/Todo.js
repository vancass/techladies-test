import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component{
    constructor(props){
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
    }

    removeTodo(){
        this.props.removeTodo(this.props.entry);
    }

    render(){
        return(
            <ul>
                <li className="Todo">
                    {this.props.entry}
                    <br/>
                    <button onClick={this.removeTodo}>Delete</button>
                </li>
            </ul>
        );
    }
}

export default Todo;