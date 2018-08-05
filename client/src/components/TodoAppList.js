import React, {Component} from 'react';
import './TodoAppList.css';
import Todo from './Todo';
import AddEntry from './AddEntry';

class TodoAppList extends Component{
    constructor(props){
        super(props);
        this.state={todo: ['test to-do', 'todo2']};
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(newEntry){
        this.setState({todo:[...this.state.todo, newEntry]});
    }

    removeTodo(entry){
        const filteredEntries = this.state.todo.filter(name => {
            return name !== entry;
        });

        this.setState({todo: filteredEntries});
    }

    renderList(){
        return(
            this.state.todo.map(name=>(
                <Todo key={name} entry={name} removeTodo={this.removeTodo}/>
            ))
        );
    }

    render(){
        return(
            <div className="TodoAppList">
                <AddEntry addTodo={this.addTodo}/>
                {this.renderList()}
            </div>
        );
    }

}

export default TodoAppList;